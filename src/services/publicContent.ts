import { supabasePublic } from './supabasePublic';
import type {
  PublicCatalogItem,
  PublicCommunityPost,
  PublicEvent,
  PublicInstitution,
  PublicParticipationItem
} from '../domain/publicContent';

export class PublicContentUnavailableError extends Error {
  constructor() {
    super('O conteúdo público ainda não está configurado no Supabase.');
    this.name = 'PublicContentUnavailableError';
  }
}

function getClient() {
  if (!supabasePublic) throw new PublicContentUnavailableError();
  return supabasePublic;
}

function safeLimit(value = 30): number {
  return Math.max(1, Math.min(100, Math.trunc(value)));
}

/** RLS is the security boundary; filters here are also applied for clear intent. */
export async function listPublicInstitutions(limit = 30): Promise<PublicInstitution[]> {
  const { data, error } = await getClient()
    .from('institutions')
    .select('id,parent_id,slug,name,institution_type,summary,public_profile,published_at')
    .eq('status', 'published')
    .eq('visibility', 'public')
    .order('published_at', { ascending: false })
    .limit(safeLimit(limit));

  if (error) throw error;
  return (data ?? []) as PublicInstitution[];
}

export async function listPublicCatalogItems(
  kind?: PublicCatalogItem['kind'],
  limit = 30
): Promise<PublicCatalogItem[]> {
  let query = getClient()
    .from('catalog_items')
    .select('id,slug,kind,origin,title,summary,responsible_public_name,provider_public_name,seller_public_name,category_label,price_amount,currency,region_ids,status,public_details,published_at')
    .in('status', ['published', 'available'])
    .eq('visibility', 'public');

  if (kind) query = query.eq('kind', kind);

  const { data, error } = await query
    .order('published_at', { ascending: false })
    .limit(safeLimit(limit));

  if (error) throw error;
  return (data ?? []) as PublicCatalogItem[];
}

export async function listPublicCommunityPosts(limit = 30): Promise<PublicCommunityPost[]> {
  const { data, error } = await getClient()
    .from('community_posts')
    .select('id,public_author_label,territory_id,content_type,title,body,media,published_at')
    .eq('status', 'published')
    .eq('visibility', 'public')
    .order('published_at', { ascending: false })
    .limit(safeLimit(limit));

  if (error) throw error;
  return (data ?? []) as PublicCommunityPost[];
}

export async function listPublicEvents(limit = 30): Promise<PublicEvent[]> {
  const { data, error } = await getClient()
    .from('events')
    .select('id,slug,title,summary,description,event_type,organizer_public_name,starts_at,ends_at,venue_name,public_location,registration_mode,registration_url,status,published_at')
    .in('status', ['published', 'cancelled', 'completed'])
    .eq('visibility', 'public')
    .order('starts_at', { ascending: true })
    .limit(safeLimit(limit));

  if (error) throw error;
  return (data ?? []) as PublicEvent[];
}

export async function listPublicParticipationItems(limit = 30): Promise<PublicParticipationItem[]> {
  const { data, error } = await getClient()
    .from('participation_items')
    .select('id,slug,kind,title,summary,public_description,territory_id,opens_at,closes_at,status,public_result,published_at')
    .in('status', ['published', 'open', 'closed', 'results_published'])
    .eq('visibility', 'public')
    .order('published_at', { ascending: false })
    .limit(safeLimit(limit));

  if (error) throw error;
  return (data ?? []) as PublicParticipationItem[];
}
