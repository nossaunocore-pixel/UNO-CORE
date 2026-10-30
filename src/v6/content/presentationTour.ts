export interface PresentationStep {
  moduleId: 'profile' | 'home' | 'people' | 'community' | 'live' | 'services' | 'work';
  eyebrow: string;
  title: string;
  text: string;
  mediaLabel: string;
}

export const presentationTour: PresentationStep[] = [
  {
    moduleId: 'profile',
    eyebrow: 'Pessoa e privacidade',
    title: 'Cada pessoa mantém o controle da própria identidade.',
    text: 'O Perfil Vivo deverá reunir capacidades, vínculos e objetivos, com escolhas claras sobre o que permanece privado e o que pode ser compartilhado.',
    mediaLabel: 'Visão planejada · Perfil Vivo'
  },
  {
    moduleId: 'home',
    eyebrow: 'Casa e família',
    title: 'A Casa organiza necessidades e responsabilidades.',
    text: 'Moradores, responsabilidades, consentimentos e serviços da residência poderão ser conectados sem exposição pública de informações familiares.',
    mediaLabel: 'Visão planejada · Casa e família'
  },
  {
    moduleId: 'people',
    eyebrow: 'Participação social',
    title: 'A comunidade poderá transformar escuta em ação organizada.',
    text: 'A UNO separará escuta, propostas, consultas, pareceres e deliberações para que a participação tenha contexto e continuidade.',
    mediaLabel: 'Visão planejada · Participação'
  },
  {
    moduleId: 'community',
    eyebrow: 'Construção coletiva',
    title: 'A Comunidade organiza os assuntos do território.',
    text: 'Pessoas poderão acompanhar temas da casa, rua, bairro, profissão ou interesse, formar iniciativas e cooperar com moderação e transparência.',
    mediaLabel: 'Visão planejada · Comunidade UNO'
  },
  {
    moduleId: 'live',
    eyebrow: 'Economia e comércio',
    title: 'A Vitrine conecta quem oferece a quem precisa.',
    text: 'Produtos, serviços, profissionais, pequenos negócios, compras coletivas, criadores e logística poderão ser encontrados em um só ambiente.',
    mediaLabel: 'Visão planejada · Vitrine Comercial'
  },
  {
    moduleId: 'services',
    eyebrow: 'Serviços e recursos',
    title: 'Serviços deverão informar condições e responsabilidades.',
    text: 'Cada oferta precisa explicar o que entrega, quem responde, quanto custa, quais taxas existem e o que ainda precisa ser validado.',
    mediaLabel: 'Princípios comerciais · Transparência'
  },
  {
    moduleId: 'work',
    eyebrow: 'Trabalho e renda',
    title: 'Talentos locais poderão encontrar oportunidades.',
    text: 'Perfis profissionais, capacitação, portfólios e redes de trabalho farão parte da visão comercial e econômica da UNO.',
    mediaLabel: 'Visão planejada · Trabalho e renda'
  }
];
