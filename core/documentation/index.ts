/**
 * UNO Documentation — Biblioteca Oficial, Documentos, Versionamento e Engenharia
 * NOS S.A.
 */

export interface DocSpecEntry {
  title: string;
  path: string;
  category: 'spec' | 'adr' | 'engineering' | 'prompt';
  lastUpdated: string;
}

export class UnoDocumentation {
  private docs: DocSpecEntry[] = [
    { title: 'Especificação Mestra (MASTER_SPEC.md)', path: 'spec/MASTER_SPEC.md', category: 'spec', lastUpdated: '2026-07-27' },
    { title: 'Arquitetura de Engenharia (ARCHITECTURE.md)', path: 'spec/ARCHITECTURE.md', category: 'spec', lastUpdated: '2026-07-27' },
    { title: 'Registro de Decisões (DECISIONS.md)', path: 'spec/DECISIONS.md', category: 'adr', lastUpdated: '2026-07-27' },
    { title: 'Roadmap de Evolução (ROADMAP.md)', path: 'spec/ROADMAP.md', category: 'spec', lastUpdated: '2026-07-27' },
    { title: 'ADR-0001 Base Architecture', path: 'spec/ADR/0001-base-architecture.md', category: 'adr', lastUpdated: '2026-07-27' },
    { title: 'Prompt Oficial Arquiteto-Chefe', path: 'spec/PROMPTS/arquiteto_chefe.md', category: 'prompt', lastUpdated: '2026-07-27' }
  ];

  public getDocs(): DocSpecEntry[] {
    return this.docs;
  }
}

export const documentation = new UnoDocumentation();
