import React from 'react';
import { Briefcase, HeartHandshake, MapPin, Package, Search, ShieldCheck, ShoppingBag, Store, Truck, Users, Wrench } from 'lucide-react';

const offers = [
  { icon: ShoppingBag, title: 'Produtos e comércio local', text: 'Vitrines de lojas, produtores, pequenos negócios e ofertas do território.', state: 'Planejado' },
  { icon: Wrench, title: 'Profissionais e serviços', text: 'Descoberta de prestadores, especialistas, manutenção, cuidados e serviços sob demanda.', state: 'Planejado' },
  { icon: Truck, title: 'Entregas e mobilidade', text: 'Conexão com entregadores, transporte, coletas e logística de última milha.', state: 'Planejado' },
  { icon: Briefcase, title: 'Trabalho, talentos e renda', text: 'Perfis profissionais, portfólios, oportunidades, capacitação e conexões de trabalho.', state: 'Planejado' },
  { icon: Package, title: 'Compras coletivas e encomendas', text: 'Organização de demandas, cotações e compras em grupo com regras transparentes.', state: 'Planejado' },
  { icon: Users, title: 'Criadores e comunidades de interesse', text: 'Vitrines de criadores, transmissões, conteúdos e apoio voluntário com destino claro.', state: 'Planejado' }
];

export function NosShowcaseV63() {
  return <section className="v63-nos v7-commerce" aria-labelledby="commerce-title">
    <header className="v63-page-heading">
      <div>
        <span className="v6-kicker">Vitrine comercial UNO</span>
        <h1 id="commerce-title">A economia local pode trabalhar em rede.</h1>
        <p>Um ambiente para descobrir produtos, contratar serviços, encontrar profissionais, organizar entregas e aproximar quem oferece de quem precisa — começando pelo território.</p>
      </div>
      <span className="v63-constitution"><Store size={17}/> Visão comercial planejada</span>
    </header>

    <div className="v7-commerce-intro">
      <div><MapPin/><span><b>Começar perto.</b><small>Dar visibilidade a negócios, talentos e serviços do bairro, sem limitar a expansão para outras regiões.</small></span></div>
      <div><ShieldCheck/><span><b>Negociar com clareza.</b><small>Identificar fornecedor, preço, taxas, condições, responsabilidades e destino dos pagamentos antes de qualquer contratação.</small></span></div>
      <div><HeartHandshake/><span><b>Conectar com responsabilidade.</b><small>Reputação, avaliações, mediação e proteção contra fraude precisam fazer parte do serviço.</small></span></div>
    </div>

    <div className="v7-commerce-grid">
      {offers.map(({ icon: Icon, title, text, state }) => <article key={title}>
        <span className="v7-commerce-icon"><Icon/></span>
        <span className="v7-commerce-status">{state}</span>
        <h2>{title}</h2>
        <p>{text}</p>
      </article>)}
    </div>

    <section className="v7-commerce-flow">
      <div><span className="v6-kicker">Como a experiência deverá funcionar</span><h2>Da descoberta à entrega, com informação em cada etapa.</h2></div>
      <ol>
        <li><Search/><span><b>Encontrar</b><small>Pesquisar por produto, serviço, profissional ou necessidade.</small></span></li>
        <li><Store/><span><b>Conhecer</b><small>Ver quem oferece, condições, localização aproximada e avaliações verificadas.</small></span></li>
        <li><ShoppingBag/><span><b>Combinar</b><small>Solicitar orçamento, reservar ou comprar quando o módulo estiver liberado.</small></span></li>
        <li><Truck/><span><b>Receber e avaliar</b><small>Acompanhar entrega ou execução e registrar uma avaliação responsável.</small></span></li>
      </ol>
    </section>

    <p className="v7-commerce-notice"><ShieldCheck size={17}/> Esta é uma apresentação do que a UNO pretende construir. Catálogo, contratação, pagamentos, entregas e avaliações reais ainda não estão habilitados nesta versão. Nenhuma compra ou venda é realizada por esta página.</p>
  </section>;
}
