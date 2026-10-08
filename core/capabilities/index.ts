/**
 * UNO Capabilities — Catálogo Oficial das Capacidades da Plataforma
 * NOS S.A.
 */

export interface CapabilityItem {
  id: string;
  name: string;
  category: 'cognitive' | 'data' | 'governance' | 'interface' | 'integration';
  description: string;
  status: 'active' | 'in_development' | 'proposed';
  provider: string;
}

export class UnoCapabilities {
  private catalog: CapabilityItem[] = [
    {
      id: 'CAP-001',
      name: 'Orquestração de Comandos Cognitivos',
      category: 'cognitive',
      description: 'Capacidade de interpretar texto e comandos estruturados no chat central.',
      status: 'active',
      provider: 'UNO Brain + Google AI Studio'
    },
    {
      id: 'CAP-002',
      name: 'Persistência Auditável RLS',
      category: 'data',
      description: 'Persistência de tabelas relacionais com controle estrito de políticas RLS.',
      status: 'active',
      provider: 'UNO Memory + Supabase'
    },
    {
      id: 'CAP-003',
      name: 'Menu Operacional Adaptativo (PCA)',
      category: 'interface',
      description: 'Navegação fluida e recolhível com telemetria para os 16 módulos operacionais.',
      status: 'active',
      provider: 'UNO Interface'
    },
    {
      id: 'CAP-004',
      name: 'Registro Formal de ADRs',
      category: 'governance',
      description: 'Capacidade de registrar e historizar Decisões de Arquitetura em Markdown.',
      status: 'active',
      provider: 'UNO Governance'
    }
  ];

  public getCapabilities(): CapabilityItem[] {
    return this.catalog;
  }
}

export const capabilities = new UnoCapabilities();
