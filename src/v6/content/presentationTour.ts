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
    eyebrow: 'Sua identidade',
    title: 'Este é o Perfil Vivo.',
    text: 'Ele reúne capacidades, vínculos e trajetória. Você escolhe o que permanece privado e o que deseja compartilhar.',
    mediaLabel: 'Prévia aprovada · Perfil Vivo'
  },
  {
    moduleId: 'home',
    eyebrow: 'Seu ambiente',
    title: 'A Casa organiza a vida familiar.',
    text: 'Moradores, responsabilidades, consentimentos e futuros serviços da residência ficam conectados sem exposição pública.',
    mediaLabel: 'Prévia aprovada · Casa e família'
  },
  {
    moduleId: 'people',
    eyebrow: 'Sua voz',
    title: 'Participar é mais do que votar.',
    text: 'A UNO separa escuta, proposta, consulta, parecer e deliberação para que cada participação tenha contexto e continuidade.',
    mediaLabel: 'Prévia aprovada · Participação'
  },
  {
    moduleId: 'community',
    eyebrow: 'Construção coletiva',
    title: 'A Comunidade organiza os assuntos.',
    text: 'Pessoas podem acompanhar temas da casa, rua, bairro, profissão ou interesse, com moderação e memória das decisões.',
    mediaLabel: 'Prévia aprovada · Comunidade'
  },
  {
    moduleId: 'live',
    eyebrow: 'Instituição em formação',
    title: 'Conheça a NÓS S.A.',
    text: 'A Vitrine mostra a proposta institucional, os departamentos e o motivo de cada etapa ainda não estar disponível.',
    mediaLabel: 'Documento aprovado · Vitrine NÓS S.A.'
  },
  {
    moduleId: 'services',
    eyebrow: 'Vida real',
    title: 'Serviços serão liberados com responsabilidade.',
    text: 'Cada serviço explica o que fará, o que já está preparado e quais validações ainda faltam para sua inauguração.',
    mediaLabel: 'Catálogo informativo · Serviços'
  },
  {
    moduleId: 'work',
    eyebrow: 'Capacidades locais',
    title: 'Ofícios e renda conectam talentos.',
    text: 'O banco de talentos reunirá habilidades, oportunidades, capacitação e redes profissionais conforme as regras forem aprovadas.',
    mediaLabel: 'Em preparação · Ofícios e renda'
  }
];
