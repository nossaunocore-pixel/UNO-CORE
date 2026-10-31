import React from 'react';
import { ArrowLeft, LockKeyhole, ShieldCheck } from 'lucide-react';
import { getPanelDefinition, type PanelId } from '../../domain/panels';
import type { NavigateV6 } from '../types';

export function PanelWorkspaceV7({
  panelId,
  onNavigate
}: {
  panelId: Exclude<PanelId, 'master'>;
  onNavigate: NavigateV6;
}) {
  const panel = getPanelDefinition(panelId);
  if (!panel) return null;

  return <section className="v7-panel-workspace" aria-labelledby="panel-workspace-title">
    <header>
      <div><span className="v6-kicker">Painel institucional · escopo validado</span><h1 id="panel-workspace-title">{panel.title}</h1><p>{panel.purpose}</p></div>
      <span className="v7-panel-secure"><ShieldCheck size={17}/> Acesso verificado no servidor</span>
    </header>
    <div className="v7-panel-workspace-grid">
      <article><h2>Áreas de responsabilidade</h2><ul>{panel.subAreas.map((area) => <li key={area}>{area}</li>)}</ul></article>
      <article><h2>Domínios sob gestão</h2><ul>{panel.responsibleDomains.map((domain) => <li key={domain}>{domain.replace(/_/g, ' ')}</li>)}</ul></article>
      <article><h2>Funções operacionais</h2><ul>{panel.operationalRoles.map((role) => <li key={role}>{role.replace(/_/g, ' ')}</li>)}</ul></article>
    </div>
    <div className="v7-panel-pending">
      <LockKeyhole/>
      <div><b>Área estrutural preparada; operações ainda não liberadas.</b><p>Os contratos e limites deste painel estão definidos. Dados operacionais, filas, documentos, movimentações e ações serão conectados depois que as APIs, fontes de verdade, trilhas de auditoria e permissões específicas forem testadas.</p></div>
    </div>
    <footer><small>Escopo requerido: {panel.requiredScope} · acesso padrão: negado · ações sensíveis exigem autorização humana.</small><button onClick={() => onNavigate('mestre')}><ArrowLeft size={15}/> Voltar ao Painel Mestre</button></footer>
  </section>;
}
