import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';

export function ActiveServicesV7() {
  return <section className="v7-personal-area" aria-labelledby="active-services-title">
    <span className="v6-kicker">Área pessoal · acesso protegido</span>
    <h1 id="active-services-title">Meus Serviços Ativos</h1>
    <p>Este espaço reunirá serviços efetivamente contratados, matrículas confirmadas, capacitações iniciadas e benefícios habilitados para você.</p>
    <div className="v7-personal-empty"><CheckCircle2/><b>Nenhuma ativação será presumida.</b><span>A conexão com contratos, matrículas e confirmações do prestador ainda está em implementação. Quando estiver pronta, cada item terá origem, responsável, estado, histórico e condições.</span></div>
    <p className="v7-directory-notice"><ShieldCheck size={16}/> Descobrir na Vitrine não ativa um serviço. Contratar não é o mesmo que iniciar; concluir também terá um estado próprio.</p>
  </section>;
}
