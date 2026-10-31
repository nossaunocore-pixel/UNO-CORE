-- UNO CORE — Firebase JWT / IDU compatibility migration
-- Prepared on 2026-10-31 for review and Antigravity deployment.
--
-- IMPORTANT:
-- 1. This migration is NOT applied to the live Supabase project by this commit.
-- 2. It intentionally aborts if any affected user table contains rows.
-- 3. Confirm Firebase project ID "uno-core-a9125" and Third-Party Auth setup
--    before applying. Update the issuer constant if the actual project differs.
-- 4. Review the resulting policies with Supabase advisors and two real test users.
--
-- Why this is needed:
-- Firebase JWT "sub" is a Firebase UID string. Supabase auth.uid() casts sub
-- to UUID, while the current tables use UUID columns/FKs to auth.users and RLS
-- predicates based on auth.uid(). UNO identity is instead the server-issued
-- text claim "uno_idu". This migration changes ownership columns to text and
-- authorizes rows by that claim, not by email or Firebase UID.

begin;

do $$
begin
  if exists (select 1 from public.profiles limit 1)
     or exists (select 1 from public.user_roles limit 1)
     or exists (select 1 from public.consents limit 1)
     or exists (select 1 from public.conversations limit 1)
     or exists (select 1 from public.messages limit 1)
     or exists (select 1 from public.admin_audit_logs limit 1) then
    raise exception
      'UNO IDU migration aborted: affected tables are no longer empty; prepare a reviewed data migration first.';
  end if;
end
$$;

-- Remove Supabase Auth UUID foreign keys. Firebase/UNO identity is external
-- to auth.users and must not be represented by an assumed Supabase UUID.
alter table public.profiles
  drop constraint if exists profiles_id_fkey;

alter table public.user_roles
  drop constraint if exists user_roles_user_id_fkey;

alter table public.consents
  drop constraint if exists consents_user_id_fkey;

alter table public.conversations
  drop constraint if exists conversations_user_id_fkey;

alter table public.admin_audit_logs
  drop constraint if exists admin_audit_logs_actor_user_id_fkey,
  drop constraint if exists admin_audit_logs_target_user_id_fkey;

-- Convert identity ownership references to UNO IDU text.
alter table public.profiles
  alter column id type text using id::text;

alter table public.user_roles
  alter column user_id type text using user_id::text,
  alter column granted_by type text using granted_by::text;

alter table public.consents
  alter column user_id type text using user_id::text;

alter table public.conversations
  alter column user_id type text using user_id::text;

alter table public.admin_audit_logs
  alter column actor_user_id type text using actor_user_id::text,
  alter column target_user_id type text using target_user_id::text;

alter table public.profiles
  add constraint profiles_id_is_uno_idu
  check (left(id, 4) = 'idu_');

-- A single helper ensures RLS only accepts the intended Firebase issuer and
-- a server-issued UNO IDU. It is SECURITY INVOKER, never SECURITY DEFINER.
create or replace function public.current_uno_idu()
returns text
language sql
stable
set search_path = ''
as $function$
  select case
    when (select auth.jwt() ->> 'iss') = 'https://securetoken.google.com/uno-core-a9125'
     and (select auth.jwt() ->> 'role') = 'authenticated'
     and (select auth.jwt() -> 'firebase' ->> 'sign_in_provider') = 'google.com'
     and (select auth.jwt() ->> 'email_verified') = 'true'
     and left(coalesce((select auth.jwt() ->> 'uno_idu'), ''), 4) = 'idu_'
    then (select auth.jwt() ->> 'uno_idu')
    else null
  end;
$function$;

revoke all on function public.current_uno_idu() from public, anon;
grant execute on function public.current_uno_idu() to authenticated;

-- Replace UUID/auth.uid() policies with IDU ownership policies.
drop policy if exists profiles_select_own on public.profiles;
drop policy if exists profiles_insert_own on public.profiles;
drop policy if exists profiles_update_own on public.profiles;

drop policy if exists user_roles_select_own on public.user_roles;

drop policy if exists consent_documents_select_active_or_owned on public.consent_documents;
drop policy if exists consent_documents_select_active on public.consent_documents;
drop policy if exists consents_select_own on public.consents;
drop policy if exists consents_insert_own_active_document on public.consents;
drop policy if exists consents_revoke_own on public.consents;

drop policy if exists conversations_select_own on public.conversations;
drop policy if exists conversations_insert_own on public.conversations;
drop policy if exists conversations_update_own on public.conversations;

drop policy if exists messages_select_own_conversation on public.messages;
drop policy if exists messages_insert_text_as_user on public.messages;

drop policy if exists admin_audit_logs_deny_client_access on public.admin_audit_logs;

create policy profiles_select_own
  on public.profiles for select to authenticated
  using (id = (select public.current_uno_idu()));

create policy profiles_insert_own
  on public.profiles for insert to authenticated
  with check (id = (select public.current_uno_idu()));

create policy profiles_update_own
  on public.profiles for update to authenticated
  using (id = (select public.current_uno_idu()))
  with check (id = (select public.current_uno_idu()));

create policy user_roles_select_own
  on public.user_roles for select to authenticated
  using (user_id = (select public.current_uno_idu()));

create policy consent_documents_select_active
  on public.consent_documents for select to authenticated
  using (active is true);

create policy consents_select_own
  on public.consents for select to authenticated
  using (user_id = (select public.current_uno_idu()));

create policy consents_insert_own_active_document
  on public.consents for insert to authenticated
  with check (
    user_id = (select public.current_uno_idu())
    and exists (
      select 1
      from public.consent_documents d
      where d.id = consents.consent_document_id
        and d.active is true
    )
  );

create policy consents_revoke_own
  on public.consents for update to authenticated
  using (
    user_id = (select public.current_uno_idu())
    and revoked_at is null
  )
  with check (
    user_id = (select public.current_uno_idu())
    and revoked_at is not null
  );

create policy conversations_select_own
  on public.conversations for select to authenticated
  using (user_id = (select public.current_uno_idu()));

create policy conversations_insert_own
  on public.conversations for insert to authenticated
  with check (user_id = (select public.current_uno_idu()));

create policy conversations_update_own
  on public.conversations for update to authenticated
  using (user_id = (select public.current_uno_idu()))
  with check (user_id = (select public.current_uno_idu()));

create policy messages_select_own_conversation
  on public.messages for select to authenticated
  using (
    exists (
      select 1
      from public.conversations c
      where c.id = messages.conversation_id
        and c.user_id = (select public.current_uno_idu())
    )
  );

create policy messages_insert_text_as_user
  on public.messages for insert to authenticated
  with check (
    role = 'user'
    and content_type = 'text'
    and processing_status = 'completed'
    and exists (
      select 1
      from public.conversations c
      where c.id = messages.conversation_id
        and c.user_id = (select public.current_uno_idu())
    )
  );

-- Administrative audit records are backend-only. Explicit false policies make
-- the client denial visible to the advisor; service_role bypasses RLS.
create policy admin_audit_logs_deny_client_access
  on public.admin_audit_logs for all to anon, authenticated
  using (false)
  with check (false);

-- Restrict client writes to intended columns. Server-side service_role remains
-- responsible for role grants, audit logs, message assistant rows and metadata.
revoke insert, update on public.profiles from anon, authenticated;
grant insert (id, display_name, avatar_url, bio)
  on public.profiles to authenticated;
grant update (display_name, avatar_url, bio)
  on public.profiles to authenticated;

revoke insert, update, delete on public.user_roles from anon, authenticated;
grant select on public.user_roles to authenticated;

revoke insert, update, delete on public.consents from anon, authenticated;
grant insert (user_id, consent_document_id, metadata)
  on public.consents to authenticated;
grant update (revoked_at) on public.consents to authenticated;

revoke insert, update, delete on public.conversations from anon, authenticated;
grant insert (user_id, title, metadata) on public.conversations to authenticated;
grant update (title) on public.conversations to authenticated;

revoke insert, update, delete on public.messages from anon, authenticated;
grant insert (conversation_id, role, content_type, processing_status, body_text, metadata)
  on public.messages to authenticated;

revoke all on public.admin_audit_logs from anon, authenticated;
grant select on public.consent_documents to authenticated;

-- Audio objects remain private and scoped to the owner's IDU + conversation.
drop policy if exists conversation_audio_insert_own on storage.objects;
drop policy if exists conversation_audio_select_own on storage.objects;

create policy conversation_audio_insert_own
  on storage.objects for insert to authenticated
  with check (
    bucket_id = 'conversation-audio'
    and (storage.foldername(name))[1] = (select public.current_uno_idu())
    and exists (
      select 1
      from public.conversations c
      where c.id::text = (storage.foldername(objects.name))[2]
        and c.user_id = (select public.current_uno_idu())
    )
  );

create policy conversation_audio_select_own
  on storage.objects for select to authenticated
  using (
    bucket_id = 'conversation-audio'
    and (storage.foldername(name))[1] = (select public.current_uno_idu())
    and exists (
      select 1
      from public.conversations c
      where c.id::text = (storage.foldername(objects.name))[2]
        and c.user_id = (select public.current_uno_idu())
    )
  );

commit;
