/**
 * UNO Memory — Persistência e Camada de Integração Supabase
 * NOS S.A.
 */
import { createClient, SupabaseClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://qfeyppyubxlewskpwtuh.supabase.co';
// Suporta a nova chave VITE_SUPABASE_PUBLISHABLE_KEY com fallback temporário para VITE_SUPABASE_ANON_KEY
const SUPABASE_PUBLIC_KEY = 
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || 
  import.meta.env.VITE_SUPABASE_ANON_KEY || 
  '';

export class UnoMemory {
  private client: SupabaseClient | null = null;
  public isConfigured: boolean = false;

  constructor() {
    if (SUPABASE_PUBLIC_KEY && SUPABASE_PUBLIC_KEY.trim() !== '') {
      try {
        this.client = createClient(SUPABASE_URL, SUPABASE_PUBLIC_KEY);
        this.isConfigured = true;
      } catch (err) {
        console.warn('Erro ao inicializar Supabase Client:', err);
        this.isConfigured = false;
      }
    } else {
      this.isConfigured = false;
    }
  }

  public getClient(): SupabaseClient | null {
    return this.client;
  }

  /**
   * Invoca a Edge Function segura server-side `uno-ai-gateway`.
   * A chave GEMINI_API_KEY fica armazenada exclusivamente no ambiente server-side da Supabase Edge Function.
   */
  public async invokeAiGateway(prompt: string, context?: object) {
    if (!this.client) {
      return {
        success: false,
        message: 'Supabase Client não configurado no frontend. Adicione VITE_SUPABASE_PUBLISHABLE_KEY em .env.local.'
      };
    }

    try {
      const { data, error } = await this.client.functions.invoke('uno-ai-gateway', {
        body: { prompt, context }
      });

      if (error) {
        throw error;
      }

      return { success: true, data };
    } catch (err: any) {
      console.warn('Alerta/Erro ao invocar uno-ai-gateway Edge Function:', err);
      return {
        success: false,
        message: `Falha na invocação da Edge Function 'uno-ai-gateway': ${err.message || 'Function indisponível'}`
      };
    }
  }

  public getStatus() {
    return {
      url: SUPABASE_URL,
      hasPublicKey: this.isConfigured,
      keyType: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ? 'VITE_SUPABASE_PUBLISHABLE_KEY' : (import.meta.env.VITE_SUPABASE_ANON_KEY ? 'VITE_SUPABASE_ANON_KEY (Legado)' : 'Ausente'),
      mode: this.isConfigured ? 'Supabase Conectado' : 'Modo Seguro (Aguardando VITE_SUPABASE_PUBLISHABLE_KEY em .env.local)'
    };
  }
}

export const memory = new UnoMemory();
