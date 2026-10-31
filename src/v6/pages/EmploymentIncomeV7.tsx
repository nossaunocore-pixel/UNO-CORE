import React from 'react';
import { Briefcase, ShieldCheck, Wrench } from 'lucide-react';

export function EmploymentIncomeV7() {
  return <section className="v7-personal-area" aria-labelledby="work-income-title">
    <span className="v6-kicker">Emprego e Renda · área profissional</span>
    <h1 id="work-income-title">Ofícios, oportunidades e renda</h1>
    <p>O espaço do cidadão e do profissional para organizar habilidades, experiências, disponibilidade, portfólio, serviços oferecidos e negócios.</p>
    <div className="v7-personal-principles"><span><Briefcase/> Emprego e oportunidades</span><span><Wrench/> Ofícios e serviços</span><span><ShieldCheck/> Qualificação e confiança</span></div>
    <div className="v7-personal-empty"><Briefcase/><b>Perfil profissional ainda não conectado.</b><span>Não serão inventadas qualificações, experiências ou oportunidades. O cadastro e a publicação dependerão de consentimento, validação adequada e integração ao catálogo de serviços.</span></div>
  </section>;
}
