import React from 'react';
import { ArrowLeft, ShieldCheck, Wrench } from 'lucide-react';
import type { NavigateV6 } from '../types';
import { WorkshopStudioV7 } from '../components/WorkshopStudioV7';
import { EOUVolumeCatalogV7 } from '../components/EOUVolumeCatalogV7';

export function WorkshopV6({ onNavigate }: { onNavigate: NavigateV6 }) {
  return <section className="v62-workshop v7-workshop-page">
    <header>
      <div><span className="v6-kicker">Fundador e delegados autorizados · ambiente isolado</span><h1>Oficina UNO</h1><p>Crie o que ainda não existe no catálogo. Edite, modifique, melhore e amplie recursos existentes. Cada mudança começa como rascunho versionado.</p></div>
      <span className="v62-safe"><ShieldCheck/> Sem publicação automática</span>
    </header>
    <EOUVolumeCatalogV7 />
    <WorkshopStudioV7 />
    <footer className="v7-workshop-footer">
      <p><Wrench size={16}/> Aprovação, codificação, integração, testes e ativação são etapas diferentes. A Oficina não libera recursos em produção por conta própria.</p>
      <button onClick={() => onNavigate('mestre')}><ArrowLeft size={15}/> Voltar ao Painel Mestre</button>
    </footer>
  </section>;
}
