/** Public, sanitized read models. These types intentionally omit private IDU and account data. */

export interface PublicInstitution {
  id: string;
  parent_id: string | null;
  slug: string;
  name: string;
  institution_type: string;
  summary: string;
  public_profile: Record<string, unknown>;
  published_at: string;
}

export interface PublicCatalogItem {
  id: string;
  slug: string;
  kind: 'product' | 'service';
  origin: 'uno' | 'third_party';
  title: string;
  summary: string;
  responsible_entity_id: string;
  provider_entity_id: string;
  seller_entity_id: string | null;
  external_provider_id: string | null;
  terms_version: string | null;
  category_id: string | null;
  institution_id: string | null;
  price_amount: number | null;
  currency: string | null;
  region_ids: string[];
  status: 'published' | 'available';
  public_details: Record<string, unknown>;
  published_at: string;
}

export interface PublicCommunityPost {
  id: string;
  public_author_label: string;
  territory_id: string | null;
  content_type: 'text' | 'image' | 'video' | 'audio' | 'link' | 'announcement';
  title: string | null;
  body: string;
  media: unknown[];
  published_at: string;
}

export interface PublicEvent {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  event_type: string;
  organizer_entity_id: string;
  starts_at: string;
  ends_at: string | null;
  venue_name: string | null;
  public_location: Record<string, unknown>;
  registration_mode: 'informational' | 'free_registration' | 'ticketed' | 'external_registration';
  registration_url: string | null;
  status: 'published' | 'cancelled' | 'completed';
  published_at: string;
}

export interface PublicParticipationItem {
  id: string;
  slug: string;
  kind: 'proposal' | 'consultation' | 'poll' | 'survey' | 'public_result';
  title: string;
  summary: string;
  public_description: string;
  territory_id: string | null;
  opens_at: string | null;
  closes_at: string | null;
  status: 'published' | 'open' | 'closed' | 'results_published';
  public_result: Record<string, unknown>;
  published_at: string;
}
