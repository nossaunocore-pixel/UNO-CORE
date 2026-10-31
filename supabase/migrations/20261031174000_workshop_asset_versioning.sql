-- UNO CORE — founder/master Workshop asset drafts and immutable version snapshots.
-- All reads/writes are server-side through Firebase-verified APIs and Supabase service role.
-- No Data API grants are made to anon/authenticated. Not applied to hosted Supabase by this commit.

begin;

create table if not exists public.workshop_assets (
  id uuid primary key default gen_random_uuid(),
  asset_type text not null check (asset_type in (
    'agent', 'tool', 'api', 'module', 'automation', 'product', 'service',
    'integration', 'panel', 'volume', 'workflow', 'other'
  )),
  origin text check (origin in ('uno', 'third_party')),
  slug text not null unique,
  name text not null,
  description text not null default '',
  status text not null default 'draft'
    check (status in ('draft', 'in_review', 'approved', 'coded', 'integrated', 'tested', 'active', 'suspended', 'archived')),
  version integer not null default 1 check (version >= 1),
  definition jsonb not null default '{}'::jsonb,
  change_summary text not null default '',
  previous_asset_id uuid references public.workshop_assets(id) on delete set null,
  created_by_idu text not null,
  updated_by_idu text not null,
  approved_by_idu text,
  activated_by_idu text,
  requires_human_approval boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  approved_at timestamptz,
  activated_at timestamptz,
  constraint workshop_asset_name_check check (length(trim(name)) > 0),
  constraint workshop_asset_slug_check check (length(trim(slug)) > 0),
  constraint workshop_asset_definition_size_check check (pg_column_size(definition) <= 65536),
  constraint workshop_asset_origin_scope_check
    check (
      (asset_type in ('product', 'service') and origin in ('uno', 'third_party'))
      or (asset_type not in ('product', 'service') and origin is null)
    )
);

create table if not exists public.workshop_asset_versions (
  id uuid primary key default gen_random_uuid(),
  asset_id uuid not null references public.workshop_assets(id) on delete cascade,
  version integer not null check (version >= 1),
  snapshot jsonb not null,
  change_summary text not null default '',
  changed_by_idu text not null,
  created_at timestamptz not null default now(),
  constraint workshop_version_snapshot_size_check check (pg_column_size(snapshot) <= 65536),
  constraint workshop_asset_version_unique unique (asset_id, version)
);

create table if not exists public.workshop_audit_events (
  id uuid primary key default gen_random_uuid(),
  asset_id uuid references public.workshop_assets(id) on delete set null,
  actor_idu text not null,
  action text not null,
  before_state jsonb not null default '{}'::jsonb,
  after_state jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint workshop_audit_before_size_check check (pg_column_size(before_state) <= 32768),
  constraint workshop_audit_after_size_check check (pg_column_size(after_state) <= 32768)
);

create index if not exists workshop_assets_status_updated_idx
  on public.workshop_assets (status, updated_at desc);

create index if not exists workshop_assets_type_status_idx
  on public.workshop_assets (asset_type, status);

create index if not exists workshop_versions_asset_idx
  on public.workshop_asset_versions (asset_id, version desc);

create index if not exists workshop_audit_asset_idx
  on public.workshop_audit_events (asset_id, created_at desc);

alter table public.workshop_assets enable row level security;
alter table public.workshop_asset_versions enable row level security;
alter table public.workshop_audit_events enable row level security;

revoke all on public.workshop_assets, public.workshop_asset_versions, public.workshop_audit_events
  from public, anon, authenticated;
grant all on public.workshop_assets, public.workshop_asset_versions, public.workshop_audit_events
  to service_role;


create or replace function public.create_workshop_asset(
  p_asset_type text,
  p_origin text,
  p_slug text,
  p_name text,
  p_description text,
  p_definition jsonb,
  p_change_summary text,
  p_actor_idu text
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $function$
declare
  v_asset public.workshop_assets%rowtype;
begin
  if p_actor_idu is null or p_actor_idu not like 'idu\_%' escape '\' then
    raise exception 'WORKSHOP_ACTOR_IDU_INVALID';
  end if;
  if p_asset_type not in (
    'agent', 'tool', 'api', 'module', 'automation', 'product', 'service',
    'integration', 'panel', 'volume', 'workflow', 'other'
  ) then
    raise exception 'WORKSHOP_ASSET_TYPE_INVALID';
  end if;
  if p_asset_type in ('product', 'service') and p_origin not in ('uno', 'third_party') then
    raise exception 'WORKSHOP_ASSET_ORIGIN_REQUIRED';
  end if;
  if p_asset_type not in ('product', 'service') and p_origin is not null then
    raise exception 'WORKSHOP_ASSET_ORIGIN_NOT_APPLICABLE';
  end if;
  if p_definition is null or pg_catalog.jsonb_typeof(p_definition) <> 'object'
     or pg_catalog.octet_length(p_definition::text) > 65536 then
    raise exception 'WORKSHOP_DEFINITION_INVALID';
  end if;

  insert into public.workshop_assets (
    asset_type, origin, slug, name, description, status, version,
    definition, change_summary, created_by_idu, updated_by_idu,
    requires_human_approval
  ) values (
    p_asset_type, p_origin, p_slug, p_name, coalesce(p_description, ''),
    'draft', 1, p_definition, coalesce(p_change_summary, ''),
    p_actor_idu, p_actor_idu, true
  )
  returning * into v_asset;

  insert into public.workshop_asset_versions (
    asset_id, version, snapshot, change_summary, changed_by_idu
  ) values (
    v_asset.id, v_asset.version, pg_catalog.to_jsonb(v_asset),
    v_asset.change_summary, p_actor_idu
  );

  insert into public.workshop_audit_events (
    asset_id, actor_idu, action, after_state
  ) values (
    v_asset.id, p_actor_idu, 'created', pg_catalog.to_jsonb(v_asset)
  );

  return pg_catalog.to_jsonb(v_asset);
end;
$function$;

create or replace function public.update_workshop_asset(
  p_asset_id uuid,
  p_origin text,
  p_name text,
  p_description text,
  p_definition jsonb,
  p_change_summary text,
  p_actor_idu text
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $function$
declare
  v_before public.workshop_assets%rowtype;
  v_asset public.workshop_assets%rowtype;
begin
  if p_actor_idu is null or p_actor_idu not like 'idu\_%' escape '\' then
    raise exception 'WORKSHOP_ACTOR_IDU_INVALID';
  end if;
  select * into v_before
  from public.workshop_assets
  where id = p_asset_id
  for update;

  if not found then raise exception 'WORKSHOP_ASSET_NOT_FOUND'; end if;
  if v_before.status <> 'draft' then raise exception 'WORKSHOP_ASSET_NOT_DRAFT'; end if;
  if v_before.asset_type in ('product', 'service') and p_origin not in ('uno', 'third_party') then
    raise exception 'WORKSHOP_ASSET_ORIGIN_REQUIRED';
  end if;
  if v_before.asset_type not in ('product', 'service') and p_origin is not null then
    raise exception 'WORKSHOP_ASSET_ORIGIN_NOT_APPLICABLE';
  end if;
  if p_definition is null or pg_catalog.jsonb_typeof(p_definition) <> 'object'
     or pg_catalog.octet_length(p_definition::text) > 65536 then
    raise exception 'WORKSHOP_DEFINITION_INVALID';
  end if;

  update public.workshop_assets
  set origin = p_origin,
      name = p_name,
      description = coalesce(p_description, ''),
      definition = p_definition,
      change_summary = coalesce(p_change_summary, ''),
      version = version + 1,
      updated_by_idu = p_actor_idu,
      updated_at = pg_catalog.now()
  where id = p_asset_id
  returning * into v_asset;

  insert into public.workshop_asset_versions (
    asset_id, version, snapshot, change_summary, changed_by_idu
  ) values (
    v_asset.id, v_asset.version, pg_catalog.to_jsonb(v_asset),
    v_asset.change_summary, p_actor_idu
  );

  insert into public.workshop_audit_events (
    asset_id, actor_idu, action, before_state, after_state
  ) values (
    v_asset.id, p_actor_idu, 'updated', pg_catalog.to_jsonb(v_before), pg_catalog.to_jsonb(v_asset)
  );

  return pg_catalog.to_jsonb(v_asset);
end;
$function$;

create or replace function public.submit_workshop_asset(
  p_asset_id uuid,
  p_actor_idu text
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $function$
declare
  v_before public.workshop_assets%rowtype;
  v_asset public.workshop_assets%rowtype;
begin
  if p_actor_idu is null or p_actor_idu not like 'idu\_%' escape '\' then
    raise exception 'WORKSHOP_ACTOR_IDU_INVALID';
  end if;
  select * into v_before
  from public.workshop_assets
  where id = p_asset_id
  for update;

  if not found then raise exception 'WORKSHOP_ASSET_NOT_FOUND'; end if;
  if v_before.status <> 'draft' then raise exception 'WORKSHOP_ASSET_NOT_DRAFT'; end if;

  update public.workshop_assets
  set status = 'in_review',
      updated_by_idu = p_actor_idu,
      updated_at = pg_catalog.now()
  where id = p_asset_id
  returning * into v_asset;

  insert into public.workshop_audit_events (
    asset_id, actor_idu, action, before_state, after_state
  ) values (
    v_asset.id, p_actor_idu, 'submitted_for_review',
    pg_catalog.to_jsonb(v_before), pg_catalog.to_jsonb(v_asset)
  );

  return pg_catalog.to_jsonb(v_asset);
end;
$function$;

create or replace function public.clone_workshop_asset(
  p_asset_id uuid,
  p_actor_idu text
)
returns jsonb
language plpgsql
security definer
set search_path = ''
as $function$
declare
  v_source public.workshop_assets%rowtype;
  v_asset public.workshop_assets%rowtype;
  v_slug text;
begin
  if p_actor_idu is null or p_actor_idu not like 'idu\_%' escape '\' then
    raise exception 'WORKSHOP_ACTOR_IDU_INVALID';
  end if;
  select * into v_source
  from public.workshop_assets
  where id = p_asset_id;

  if not found then raise exception 'WORKSHOP_ASSET_NOT_FOUND'; end if;

  v_slug := v_source.slug || '-draft-' ||
    pg_catalog.substr(pg_catalog.replace(pg_catalog.gen_random_uuid()::text, '-', ''), 1, 8);

  insert into public.workshop_assets (
    asset_type, origin, slug, name, description, status, version,
    definition, change_summary, previous_asset_id, created_by_idu,
    updated_by_idu, requires_human_approval
  ) values (
    v_source.asset_type, v_source.origin, v_slug,
    v_source.name || ' — revisão', v_source.description, 'draft', 1,
    v_source.definition, 'Cópia de trabalho criada a partir da versão ' || v_source.version,
    v_source.id, p_actor_idu, p_actor_idu, true
  )
  returning * into v_asset;

  insert into public.workshop_asset_versions (
    asset_id, version, snapshot, change_summary, changed_by_idu
  ) values (
    v_asset.id, v_asset.version, pg_catalog.to_jsonb(v_asset),
    v_asset.change_summary, p_actor_idu
  );

  insert into public.workshop_audit_events (
    asset_id, actor_idu, action, before_state, after_state
  ) values (
    v_asset.id, p_actor_idu, 'cloned', pg_catalog.to_jsonb(v_source), pg_catalog.to_jsonb(v_asset)
  );

  return pg_catalog.to_jsonb(v_asset);
end;
$function$;

revoke all on function public.create_workshop_asset(text, text, text, text, text, jsonb, text, text)
  from public, anon, authenticated;
revoke all on function public.update_workshop_asset(uuid, text, text, text, jsonb, text, text)
  from public, anon, authenticated;
revoke all on function public.submit_workshop_asset(uuid, text)
  from public, anon, authenticated;
revoke all on function public.clone_workshop_asset(uuid, text)
  from public, anon, authenticated;

grant execute on function public.create_workshop_asset(text, text, text, text, text, jsonb, text, text)
  to service_role;
grant execute on function public.update_workshop_asset(uuid, text, text, text, jsonb, text, text)
  to service_role;
grant execute on function public.submit_workshop_asset(uuid, text)
  to service_role;
grant execute on function public.clone_workshop_asset(uuid, text)
  to service_role;

commit;
