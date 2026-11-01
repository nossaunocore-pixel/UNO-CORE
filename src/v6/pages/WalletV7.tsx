import React from 'react';
import { ArrowDownLeft, ArrowUpRight, ShieldCheck, Wallet } from 'lucide-react';

export function WalletV7() {
  return <section className="v7-personal-area" aria-labelledby="wallet-title">
    <span className="v6-kicker">Perfil pessoal · carteira</span>
    <h1 id="wallet-title">Minha Carteira UNO</h1>
    <p>Área para acompanhar valores pessoais, recebimentos, pagamentos e movimentações, com origem e estado de cada lançamento.</p>
    <div className="v7-wallet-grid">
      <article><Wallet/><span>Saldo disponível</span><strong>Não conectado</strong><small>Nenhum saldo real é exibido nesta versão.</small></article>
      <article><ArrowDownLeft/><span>Valores a receber</span><strong>Não conectado</strong><small>Recebimentos pendentes só aparecerão após confirmação.</small></article>
      <article><ArrowUpRight/><span>Valores em processamento</span><strong>Não conectado</strong><small>Não há movimentações reais sendo simuladas.</small></article>
    </div>
    <div className="v7-personal-empty"><ShieldCheck/><b>Carteira ainda não conectada ao ledger.</b><span>A futura carteira deverá separar saldo disponível, pendente, bloqueado, histórico, origem dos valores, tarifas, estornos e direitos de terceiros. A tela não autoriza movimentar fundos nem substitui o painel financeiro da plataforma.</span></div>
  </section>;
}
