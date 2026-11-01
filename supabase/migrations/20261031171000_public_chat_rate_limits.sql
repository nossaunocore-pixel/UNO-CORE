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


commit;
