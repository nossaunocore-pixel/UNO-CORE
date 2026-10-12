import React, { useEffect } from 'react';
import { CheckCircle2, Flag, Info, LockKeyhole, X } from 'lucide-react';
import { statusLabels } from '../content/unoRegistry';
import type { UnoModuleDefinition } from '../types';

export function ModuleInfoDialogV63({ module, onClose }: { module: UnoModuleDefinition; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return <div className="v63-dialog-backdrop" role="presentation" onMouseDown={onClose}>
    <section className="v63-module-dialog" role="dialog" aria-modal="true" aria-labelledby="module-dialog-title" onMouseDown={event => event.stopPropagation()}>
      <header><span><Info size={17}/> Informação do módulo</span><button onClick={onClose} aria-label="Fechar"><X/></button></header>
      <div className="v63-dialog-status"><LockKeyhole/><span><small>Situação atual</small><b>{statusLabels[module.status]}</b></span></div>
      <h2 id="module-dialog-title">{module.title}</h2>
      <p>{module.summary}</p>

      {module.alreadyPrepared && <div className="v63-dialog-section"><h3><CheckCircle2/>O que já está preparado</h3><ul>{module.alreadyPrepared.map(item => <li key={item}>{item}</li>)}</ul></div>}
      {module.whyUnavailable && <div className="v63-dialog-section"><h3><LockKeyhole/>Por que ainda não está disponível</h3><p>{module.whyUnavailable}</p></div>}
      {module.nextMilestone && <div className="v63-dialog-next"><Flag/><span><small>Próximo marco</small><b>{module.nextMilestone}</b></span></div>}

      <footer><small>Nenhum serviço é apresentado como ativo antes da validação necessária.</small><button className="v6-primary" onClick={onClose}>Entendi</button></footer>
    </section>
  </div>;
}
