import React, { useEffect } from 'react';
import { FileText, Image, Info, ShieldCheck, Volume2, X } from 'lucide-react';
import { approvalLabels } from '../content/contentLibrary';
import type { UnoContentDefinition } from '../types';

const kindLabels = { apresentacao: 'Apresentação', explicacao: 'Explicação', documento: 'Documento', midia: 'Mídia' } as const;

export function ContentViewerV63({ content, onClose }: { content: UnoContentDefinition; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return <div className="v63-dialog-backdrop" role="presentation" onMouseDown={onClose}>
    <article className="v63-content-viewer" role="dialog" aria-modal="true" aria-labelledby="content-viewer-title" onMouseDown={event => event.stopPropagation()}>
      <header><span><Info size={16}/>{kindLabels[content.kind]}</span><button onClick={onClose} aria-label="Fechar"><X/></button></header>
      {content.mediaUrl && <figure><img src={content.mediaUrl} alt={content.mediaAlt ?? ''}/><figcaption>{content.mediaAlt}</figcaption></figure>}
      <div className="v63-viewer-copy"><span className={`v63-approval ${content.approval}`}><i/>{approvalLabels[content.approval]}</span><h2 id="content-viewer-title">{content.title}</h2><p>{content.body}</p></div>
      <dl><div><dt>Fonte</dt><dd>{content.source}</dd></div><div><dt>Versão</dt><dd>{content.version}</dd></div><div><dt>Público</dt><dd>{content.audience}</dd></div></dl>
      <div className="v63-viewer-tools"><button disabled><Volume2/>Ouvir conteúdo <small>voz em preparação</small></button><button disabled>{content.kind === 'documento' ? <FileText/> : <Image/>}Baixar <small>quando autorizado</small></button></div>
      <footer><ShieldCheck/><span><b>Transparência de conteúdo</b><small>A UNO informa a origem e não apresenta rascunhos como documentos oficiais.</small></span></footer>
    </article>
  </div>;
}
