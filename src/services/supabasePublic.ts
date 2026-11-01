import { createClient } from '@supabase/supabase-js';

/**
 * Public/visitor Supabase client.
 *
 * Deliberately independent from Firebase: public browsing and anonymous
 * visitor sessions must not require a Firebase app, Google login or IDU.
 * Never place a service-role/secret key in this client.
 */
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const publishableKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabasePublic = supabaseUrl && publishableKey
  ? createClient(supabaseUrl, publishableKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
      }
    })
  : null;

export const isPublicSupabaseConfigured = Boolean(supabasePublic);
