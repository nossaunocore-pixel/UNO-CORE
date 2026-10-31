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
    check (asset_type in ('product', 'service') or origin is null)
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

commit;
