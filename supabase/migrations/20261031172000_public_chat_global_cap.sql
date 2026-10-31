-- UNO CORE — global daily spend guard for anonymous visitor chat.
-- This migration is not applied to hosted Supabase by this commit.
-- The application must supply a founder-approved daily request ceiling.

begin;

create table if not exists uno_private.public_chat_global_limits (
  day_bucket bigint primary key,
  request_count integer not null default 0 check (request_count >= 0),
  updated_at timestamptz not null default now()
);

alter table uno_private.public_chat_global_limits enable row level security;
revoke all on table uno_private.public_chat_global_limits from public, anon, authenticated;
grant all on table uno_private.public_chat_global_limits to service_role;

create or replace function public.consume_public_chat_quota_with_global_cap(
  p_user_id uuid,
  p_global_limit integer
)
returns boolean
language plpgsql
security definer
set search_path = ''
as $function$
declare
  v_now timestamptz := pg_catalog.clock_timestamp();
  v_minute_bucket bigint;
  v_day_bucket bigint;
  v_minute_count integer;
  v_user_day_count integer;
  v_global_count integer;
begin
  if p_user_id is null or p_global_limit is null or p_global_limit < 1 then
    return false;
  end if;

  v_minute_bucket := floor(extract(epoch from v_now) / 60)::bigint;
  v_day_bucket := floor(extract(epoch from v_now) / 86400)::bigint;

  insert into uno_private.public_chat_limits (
    user_id, minute_bucket, minute_count, day_bucket, day_count,
    expires_at, updated_at
  )
  values (
    p_user_id, v_minute_bucket, 0, v_day_bucket, 0,
    v_now + interval '7 days', v_now
  )
  on conflict (user_id) do nothing;

  insert into uno_private.public_chat_global_limits (day_bucket, request_count, updated_at)
  values (v_day_bucket, 0, v_now)
  on conflict (day_bucket) do nothing;

  select
    case when minute_bucket = v_minute_bucket then minute_count else 0 end,
    case when day_bucket = v_day_bucket then day_count else 0 end
  into v_minute_count, v_user_day_count
  from uno_private.public_chat_limits
  where user_id = p_user_id
  for update;

  select request_count
  into v_global_count
  from uno_private.public_chat_global_limits
  where day_bucket = v_day_bucket
  for update;

  if coalesce(v_minute_count, 0) >= 5
     or coalesce(v_user_day_count, 0) >= 30
     or coalesce(v_global_count, 0) >= p_global_limit then
    return false;
  end if;

  update uno_private.public_chat_limits
  set
    minute_bucket = v_minute_bucket,
    minute_count = coalesce(v_minute_count, 0) + 1,
    day_bucket = v_day_bucket,
    day_count = coalesce(v_user_day_count, 0) + 1,
    expires_at = v_now + interval '7 days',
    updated_at = v_now
  where user_id = p_user_id;

  update uno_private.public_chat_global_limits
  set request_count = request_count + 1,
      updated_at = v_now
  where day_bucket = v_day_bucket;

  return true;
end;
$function$;

revoke all on function public.consume_public_chat_quota_with_global_cap(uuid, integer)
  from public, anon, authenticated;
grant execute on function public.consume_public_chat_quota_with_global_cap(uuid, integer)
  to service_role;

commit;
