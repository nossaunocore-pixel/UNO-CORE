import React from 'react';
import { Home, ShieldCheck, Users } from 'lucide-react';

export function HouseV7() {
  return <section className="v7-personal-area" aria-labelledby="house-title">
    <span className="v6-kicker">Casa · ambiente familiar protegido</span>
    <h1 id="house-title">Minha Casa e Família</h1>
    <p>Um espaço para organizar vínculos familiares, moradores, responsabilidades e recursos compartilhados, sempre respeitando a privacidade de cada pessoa.</p>
    <div className="v7-personal-empty"><Home/><b>Estrutura familiar ainda não conectada.</b><span>Os vínculos só poderão ser criados com autorização das pessoas envolvidas, escopos individuais e proteção reforçada para dados de dependentes.</span></div>
    <div className="v7-personal-principles"><span><Users/> Vínculos consentidos</span><span><ShieldCheck/> Privacidade por pessoa</span></div>
  </section>;
}
