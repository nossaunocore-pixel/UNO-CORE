/**
 * Canonical experience areas for navigation and domain ownership.
 * A route being listed here does not imply that its backend capability is live.
 */

export type ExperienceAreaId =
  | 'profile'
  | 'home'
  | 'work_income'
  | 'institutions'
  | 'community'
  | 'participation'
  | 'leisure'
  | 'showcase'
  | 'services'
  | 'active_services';

export interface ExperienceArea {
  id: ExperienceAreaId;
  title: string;
  purpose: string;
  primaryRecord: string;
  requiresPersonalContext: boolean;
}

export const UNO_EXPERIENCE_AREAS: readonly ExperienceArea[] = [
  {
    id: 'profile',
    title: 'Perfil',
    purpose: 'Identidade pessoal, preferências, histórico e carteira individual.',
    primaryRecord: 'person_profile',
    requiresPersonalContext: true
  },
  {
    id: 'home',
    title: 'Casa',
    purpose: 'Organização familiar e compartilhamentos domésticos autorizados.',
    primaryRecord: 'household',
    requiresPersonalContext: true
  },
  {
    id: 'work_income',
    title: 'Emprego e Renda',
    purpose: 'Ofícios, habilidades, oportunidades, prestação de serviços e negócios da pessoa.',
    primaryRecord: 'professional_profile',
    requiresPersonalContext: true
  },
  {
    id: 'institutions',
    title: 'Instituições',
    purpose: 'Organizações, matriz, filiais, unidades, regras próprias e responsáveis.',
    primaryRecord: 'institution',
    requiresPersonalContext: false
  },
  {
    id: 'community',
    title: 'Comunidade',
    purpose: 'Rede social territorial, acontecimentos, iniciativas e transparência comunitária.',
    primaryRecord: 'community_publication',
    requiresPersonalContext: false
  },
  {
    id: 'participation',
    title: 'Participação',
    purpose: 'Propostas, consultas, avaliações da população e participação institucional.',
    primaryRecord: 'participation_record',
    requiresPersonalContext: false
  },
  {
    id: 'leisure',
    title: 'Lazer',
    purpose: 'Eventos, festivais e experiências espontâneas ou promovidas por UNO e terceiros.',
    primaryRecord: 'event',
    requiresPersonalContext: false
  },
  {
    id: 'showcase',
    title: 'Vitrine',
    purpose: 'Descoberta e apresentação de ofertas e integrações próprias ou de terceiros.',
    primaryRecord: 'catalog_listing',
    requiresPersonalContext: false
  },
  {
    id: 'services',
    title: 'Serviços',
    purpose: 'Catálogo de serviços contratáveis ou ativáveis por instituições e profissionais.',
    primaryRecord: 'service_offer',
    requiresPersonalContext: false
  },
  {
    id: 'active_services',
    title: 'Serviços Ativos',
    purpose: 'Serviços efetivamente contratados, matriculados, aderidos ou habilitados pela pessoa.',
    primaryRecord: 'service_activation',
    requiresPersonalContext: true
  }
] as const;
