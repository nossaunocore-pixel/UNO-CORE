/**
 * UNO Integrations — Google AI Studio, Supabase, GitHub, Google Stitch, FlutterFlow
 * NOS S.A.
 */

export interface IntegrationConnector {
  id: string;
  name: string;
  type: 'ai_gateway' | 'database' | 'repository' | 'visual_design' | 'lowcode';
  status: 'connected' | 'configured' | 'pending_credentials';
  details: string;
}

export class UnoIntegrations {
  private connectors: IntegrationConnector[] = [
    {
      id: 'INT-01',
      name: 'Supabase Edge Function (uno-ai-gateway)',
      type: 'ai_gateway',
      status: 'configured',
      details: 'Gateway seguro server-side. Intermedia requisições para a Gemini API usando o segredo GEMINI_API_KEY sem expor chaves no browser.'
    },
    {
      id: 'INT-02',
      name: 'Google AI Studio (UNO Arquiteto-Chefe)',
      type: 'ai_gateway',
      status: 'configured',
      details: 'Integrado exclusivamente via Supabase Edge Function `uno-ai-gateway`. Nenhuma chave VITE_ GEMINI é exposta no frontend.'
    },
    {
      id: 'INT-03',
      name: 'Supabase (Uno - Universo Novo Operacional)',
      type: 'database',
      status: 'configured',
      details: 'URL pública: https://qfeyppyubxlewskpwtuh.supabase.co. Autenticação via VITE_SUPABASE_PUBLISHABLE_KEY (ou legado VITE_SUPABASE_ANON_KEY).'
    },
    {
      id: 'INT-04',
      name: 'Google Stitch (Conceito Visual)',
      type: 'visual_design',
      status: 'connected',
      details: 'Referência de identidade visual e layout para o Centro de Operações PCA.'
    },
    {
      id: 'INT-05',
      name: 'GitHub (Repositório de Engenharia)',
      type: 'repository',
      status: 'pending_credentials',
      details: 'Versionamento do código e especificações `/spec`.'
    },
    {
      id: 'INT-06',
      name: 'FlutterFlow',
      type: 'lowcode',
      status: 'pending_credentials',
      details: 'Conector para expansões mobile nativas.'
    }
  ];

  public getIntegrations(): IntegrationConnector[] {
    return this.connectors;
  }
}

export const integrations = new UnoIntegrations();
