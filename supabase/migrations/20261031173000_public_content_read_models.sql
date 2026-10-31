-- UNO CORE — minimal public read models for visitor navigation.
-- Additive migration; not applied to the hosted Supabase project by this commit.
-- Client writes are intentionally disabled until server-side panel authorization exists.

begin;

create table if not exists public.institutions (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid references public.institutions(id) on delete restrict,
  slug text not null unique,
  name text not null,
  institution_type text not null,
  unit_type text not null default 'independent'
    check (unit_type in ('independent', 'matrix', 'branch', 'unit')),
  summary text not null default '',
  public_profile jsonb not null default '{}'::jsonb,
  status text not null default 'draft'
    check (status in ('draft', 'in_review', 'approved', 'published', 'suspended', 'archived')),
  visibility text not null default 'private'
    check (visibility in ('public', 'restricted', 'private')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint institutions_public_profile_size_check
    check (pg_column_size(public_profile) <= 16384),
  constraint institutions_name_not_blank_check check (length(trim(name)) > 0),
  constraint institutions_slug_not_blank_check check (length(trim(slug)) > 0),
  constraint institutions_parent_structure_check
    check (
      (unit_type in ('branch', 'unit') and parent_id is not null)
      or (unit_type in ('independent', 'matrix') and parent_id is null)
    )
);

create table if not exists public.catalog_items (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  kind text not null check (kind in ('product', 'service')),
  origin text not null check (origin in ('uno', 'third_party')),
  title text not null,
  summary text not null default '',
  responsible_entity_id text not null,
  responsible_public_name text not null,
  provider_entity_id text not null,
  provider_public_name text not null,
  seller_entity_id text,
  seller_public_name text,
  category_label text,
  external_provider_id text,
  terms_version text,
  category_id text,
  institution_id uuid references public.institutions(id) on delete set null,
  price_amount numeric(12,2),
  currency char(3),
  region_ids text[] not null default '{}',
  status text not null default 'draft'
    check (status in ('draft', 'in_review', 'approved', 'published', 'available', 'suspended', 'unavailable', 'archived')),
  visibility text not null default 'private'
    check (visibility in ('public', 'restricted', 'private')),
  public_details jsonb not null default '{}'::jsonb,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint catalog_items_third_party_disclosure_check
    check (
      origin <> 'third_party'
      or (nullif(trim(external_provider_id), '') is not null
          and nullif(trim(terms_version), '') is not null)
    ),
  constraint catalog_items_public_details_size_check
    check (pg_column_size(public_details) <= 16384),
  constraint catalog_items_price_check
    check (price_amount is null or price_amount >= 0),
  constraint catalog_items_currency_check
    check (currency is null or currency ~ '^[A-Z]{3}$'),
  constraint catalog_items_title_not_blank_check check (length(trim(title)) > 0),
  constraint catalog_items_responsibility_check
    check (length(trim(responsible_entity_id)) > 0 and length(trim(provider_entity_id)) > 0),
  constraint catalog_items_public_names_check
    check (length(trim(responsible_public_name)) > 0 and length(trim(provider_public_name)) > 0)
);

create table if not exists public.community_posts (
  id uuid primary key default gen_random_uuid(),
  public_author_label text not null default 'Comunidade UNO',
  territory_id text,
  content_type text not null default 'text'
    check (content_type in ('text', 'image', 'video', 'audio', 'link', 'announcement')),
  title text,
  body text not null default '',
  media jsonb not null default '[]'::jsonb,
  status text not null default 'draft'
    check (status in ('draft', 'in_review', 'published', 'hidden', 'removed', 'archived')),
  visibility text not null default 'private'
    check (visibility in ('public', 'restricted', 'private')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint community_posts_media_size_check check (pg_column_size(media) <= 16384),
  constraint community_posts_author_label_check check (length(trim(public_author_label)) > 0)
);

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  summary text not null default '',
  description text not null default '',
  event_type text not null,
  organizer_entity_id text not null,
  organizer_public_name text not null,
  starts_at timestamptz not null,
  ends_at timestamptz,
  venue_name text,
  public_location jsonb not null default '{}'::jsonb,
  registration_mode text not null default 'informational'
    check (registration_mode in ('informational', 'free_registration', 'ticketed', 'external_registration')),
  registration_url text,
  status text not null default 'draft'
    check (status in ('draft', 'in_review', 'published', 'cancelled', 'completed', 'archived')),
  visibility text not null default 'private'
    check (visibility in ('public', 'restricted', 'private')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint events_time_check check (ends_at is null or ends_at >= starts_at),
  constraint events_location_size_check check (pg_column_size(public_location) <= 8192),
  constraint events_title_not_blank_check check (length(trim(title)) > 0),
  constraint events_organizer_public_name_check check (length(trim(organizer_public_name)) > 0)
);

create table if not exists public.participation_items (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  kind text not null
    check (kind in ('proposal', 'consultation', 'poll', 'survey', 'public_result')),
  title text not null,
  summary text not null default '',
  public_description text not null default '',
  territory_id text,
  opens_at timestamptz,
  closes_at timestamptz,
  status text not null default 'draft'
    check (status in ('draft', 'in_review', 'published', 'open', 'closed', 'results_published', 'archived')),
  visibility text not null default 'private'
    check (visibility in ('public', 'restricted', 'private')),
  public_result jsonb not null default '{}'::jsonb,
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint participation_result_size_check check (pg_column_size(public_result) <= 16384),
  constraint participation_time_check
    check (closes_at is null or opens_at is null or closes_at >= opens_at),
  constraint participation_title_not_blank_check check (length(trim(title)) > 0)
);

create index if not exists institutions_public_listing_idx
  on public.institutions (published_at desc)
  where status = 'published' and visibility = 'public';

create index if not exists catalog_items_public_listing_idx
  on public.catalog_items (kind, published_at desc)
  where status in ('published', 'available') and visibility = 'public';

create index if not exists community_posts_public_feed_idx
  on public.community_posts (published_at desc)
  where status = 'published' and visibility = 'public';

create index if not exists events_public_calendar_idx
  on public.events (starts_at asc)
  where status in ('published', 'cancelled', 'completed') and visibility = 'public';

create index if not exists participation_public_listing_idx
  on public.participation_items (published_at desc)
  where status in ('published', 'open', 'closed', 'results_published') and visibility = 'public';

alter table public.institutions enable row level security;
alter table public.catalog_items enable row level security;
alter table public.community_posts enable row level security;
alter table public.events enable row level security;
alter table public.participation_items enable row level security;

drop policy if exists institutions_public_read on public.institutions;
drop policy if exists catalog_items_public_read on public.catalog_items;
drop policy if exists community_posts_public_read on public.community_posts;
drop policy if exists events_public_read on public.events;
drop policy if exists participation_items_public_read on public.participation_items;

create policy institutions_public_read
  on public.institutions for select to anon, authenticated
  using (status = 'published' and visibility = 'public' and published_at <= now());

create policy catalog_items_public_read
  on public.catalog_items for select to anon, authenticated
  using (
    status in ('published', 'available')
    and visibility = 'public'
    and published_at <= now()
  );

create policy community_posts_public_read
  on public.community_posts for select to anon, authenticated
  using (status = 'published' and visibility = 'public' and published_at <= now());

create policy events_public_read
  on public.events for select to anon, authenticated
  using (
    status in ('published', 'cancelled', 'completed')
    and visibility = 'public'
    and published_at <= now()
  );

create policy participation_items_public_read
  on public.participation_items for select to anon, authenticated
  using (
    status in ('published', 'open', 'closed', 'results_published')
    and visibility = 'public'
    and published_at <= now()
  );

-- Explicit Data API grants: new tables must not rely on implicit exposure.
grant usage on schema public to anon, authenticated;
grant select on public.institutions, public.catalog_items, public.community_posts,
  public.events, public.participation_items to anon, authenticated;
revoke insert, update, delete on public.institutions, public.catalog_items,
  public.community_posts, public.events, public.participation_items
  from anon, authenticated;

grant all on public.institutions, public.catalog_items, public.community_posts,
  public.events, public.participation_items to service_role;

commit;
