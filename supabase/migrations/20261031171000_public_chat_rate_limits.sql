-- UNO CORE — isolated rate-limit store for public visitor conversations.
-- Not applied to the hosted Supabase project by this commit.
-- Anonymous Supabase sign-in must be enabled in Auth before this route is used.

begin;

create schema if not exists uno_private;
revoke all on schema uno_private from public, anon, authenticated;
grant usage on schema uno_private to service_role;

create table if not exists uno_private.public_chat_limits (
  user_id uuid primary key references auth.users(id) on delete cascade,
  minute_bucket bigint not null,
  minute_count integer not null check (minute_count between 0 and 5),
  day_bucket bigint not null,
  day_count integer not null check (day_count between 0 and 30),
  expires_at timestamptz not null,
  updated_at timestamptz not null default now()
);

alter table uno_private.public_chat_limits enable row level security;
revoke all on table uno_private.public_chat_limits from public, anon, authenticated;
grant all on table uno_private.public_chat_limits to service_role;

create or replace function uno_private.consume_public_chat_quota(p_user_id uuid)
returns boolean
language plpgsql
security definer
set search_path = ''
as $function$
declare
  v_minute_bucket bigint := floor(extract(epoch from pg_catalog.clock_timestamp()) / 60)::bigint;
  v_day_bucket bigint := floor(extract(epoch from pg_catalog.clock_timestamp()) / 86400)::bigint;
  v_allowed boolean := false;
begin
  if p_user_id is null then
    return false;
  end if;

  insert into uno_private.public_chat_limits as existing_row (
    user_id,
    minute_bucket,
    minute_count,
    day_bucket,
    day_count,
    expires_at,
    updated_at
  )
  values (
    p_user_id,
    v_minute_bucket,
    1,
    v_day_bucket,
    1,
    pg_catalog.now() + interval '7 days',
    pg_catalog.now()
  )
  on conflict (user_id) do update
  set
    minute_bucket = excluded.minute_bucket,
    minute_count = case
      when existing_row.minute_bucket = excluded.minute_bucket
        then existing_row.minute_count + 1
      else 1
    end,
    day_bucket = excluded.day_bucket,
    day_count = case
      when existing_row.day_bucket = excluded.day_bucket
        then existing_row.day_count + 1
      else 1
    end,
    expires_at = excluded.expires_at,
    updated_at = excluded.updated_at
  where
    (case when existing_row.minute_bucket = excluded.minute_bucket
      then existing_row.minute_count else 0 end) < 5
    and
    (case when existing_row.day_bucket = excluded.day_bucket
      then existing_row.day_count else 0 end) < 30
  returning true into v_allowed;

  return coalesce(v_allowed, false);
end;
$function$;

revoke all on function uno_private.consume_public_chat_quota(uuid)
  from public, anon, authenticated;
grant execute on function uno_private.consume_public_chat_quota(uuid)
  to service_role;

commit;
