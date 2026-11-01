import { createClient } from '@supabase/supabase-js';
import { auth } from './firebase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabasePublishableKey) {
  throw new Error(
    'As variáveis VITE_SUPABASE_URL e VITE_SUPABASE_PUBLISHABLE_KEY (ou VITE_SUPABASE_ANON_KEY legado) são obrigatórias.'
  );
}

/**
 * Supabase recebe o JWT do Firebase como token de acesso.
 * A integração Third-Party Auth do Firebase deve estar habilitada no projeto
 * Supabase antes de liberar operações reais protegidas por RLS.
 */
export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  accessToken: async () => {
    const user = auth?.currentUser;
    return user ? user.getIdToken() : null;
  }
});
