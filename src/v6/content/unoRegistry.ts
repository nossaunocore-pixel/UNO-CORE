import type { AvailabilityStatus, NosDepartmentDefinition, UnoModuleDefinition } from '../types';

export const statusLabels: Record<AvailabilityStatus, string> = {
  publico: 'Disponível para conhecer',
  'em-construcao': 'Em construção',
  'em-discussao': 'Em discussão pública',
  'aguardando-assembleia': 'Aguardando assembleia',
  'em-simulacao': 'Em simulação',
  futuro: 'Planejado para o futuro'
};

export const squareModules: UnoModuleDefinition[] = [
  { id: 'perfil', title: 'Perfil Vivo', summary: 'Identidade, capacidades, vínculos e objetivos sob controle do usuário.', status: 'em-construcao', alreadyPrepared: ['Modelo visual', 'Áreas do perfil', 'Controle de visibilidade'], nextMilestone: 'Validar campos e controles de privacidade.' },
  { id: 'casa', title: 'Casa', summary: 'Espaço familiar, moradores, responsabilidades e serviços da residência.', status: 'em-construcao', alreadyPrepared: ['Modelo de residência', 'Vínculos familiares', 'Separação de permissões'], nextMilestone: 'Concluir adesão familiar e consentimentos.' },
  { id: 'participacao', title: 'Participação', summary: 'Propostas, consultas, debates, assembleias e acompanhamento cidadão.', status: 'em-discussao', nextMilestone: 'Publicar regras das consultas e deliberações.' },
  { id: 'comunidade', title: 'Comunidade', summary: 'Assuntos territoriais e temáticos organizados com contexto e moderação.', status: 'publico' },
  { id: 'rede-social', title: 'Rede Social', summary: 'Perfis públicos, depoimentos, publicações e conexões voluntárias.', status: 'em-construcao', nextMilestone: 'Validar moderação e visibilidade.' },
  { id: 'marketplace', title: 'Marketplace', summary: 'Produtos, prestadores, compras coletivas e logística inteligente.', status: 'futuro', whyUnavailable: 'Depende de fornecedores, pagamentos e regras comerciais.', alreadyPrepared: ['Catálogo conceitual', 'Vínculo territorial', 'Fluxo de avaliação de fornecedores'], nextMilestone: 'Deliberação do modelo econômico.' },
  { id: 'vitrine-nos', title: 'Vitrine NÓS S.A.', summary: 'Proposta institucional, departamentos, documentos e evolução pública.', status: 'publico' },
  { id: 'oficios-renda', title: 'Ofícios e Renda', summary: 'Talentos, profissões, oportunidades, capacitação e redes de trabalho.', status: 'em-construcao', alreadyPrepared: ['Perfil de talentos', 'Categorias profissionais', 'Modelo de oportunidades'], nextMilestone: 'Ativar banco de talentos.' },
  { id: 'instituicoes', title: 'Instituições', summary: 'Integrações futuras com organizações públicas, privadas e comunitárias.', status: 'futuro', whyUnavailable: 'Cada instituição precisa aderir, autorizar a integração e definir quais serviços poderá oferecer.', alreadyPrepared: ['Modelo de integração', 'Estados de conexão', 'Separação entre informação e operação'], nextMilestone: 'Firmar e validar a primeira integração institucional.' },
  { id: 'financas', title: 'Finanças', summary: 'Adesão, contratos, recompensas, contribuições e prestação de contas.', status: 'em-simulacao', whyUnavailable: 'Movimentações reais exigem validação jurídica, contábil e antifraude.', alreadyPrepared: ['Livro financeiro conceitual', 'Separação de valores', 'Fluxos de aprovação'], nextMilestone: 'Concluir simulação financeira.' }
];

const department = (
  id: string,
  title: string,
  area: string,
  summary: string,
  responsibilities: string[]
): NosDepartmentDefinition => ({
  id,
  title,
  area,
  summary,
  responsibilities,
  status: 'aguardando-assembleia',
  whyUnavailable: 'A estrutura será validada durante a constituição da NÓS S.A.',
  nextMilestone: 'Revisão do estatuto e deliberação da estrutura departamental.'
});

export const nosDepartments: NosDepartmentDefinition[] = [
  department('rh', 'Recursos Humanos Inteligente', 'Pessoas e cuidado', 'Talentos, equipes, funções e desenvolvimento humano.', ['Banco de talentos', 'Formação de equipes', 'Desenvolvimento de pessoas']),
  department('juridico', 'Jurídico e Conformidade', 'Governança e integridade', 'Contratos, pareceres, conformidade e prevenção de riscos.', ['Contratos', 'Conformidade', 'Pareceres']),
  department('tecnologia', 'Tecnologia e Infraestrutura', 'Tecnologia e dados', 'Plataforma, servidores, integrações e continuidade.', ['Infraestrutura', 'APIs', 'Disponibilidade']),
  department('comercial', 'Comercial e Parcerias', 'Economia e serviços', 'Relações comerciais, fornecedores e parcerias.', ['Parcerias', 'Fornecedores', 'Adesões']),
  department('logistica', 'Logística', 'Operação e território', 'Distribuição, entregas e circulação de recursos.', ['Distribuição', 'Entregas', 'Rotas']),
  department('financeiro', 'Financeiro', 'Governança e integridade', 'Receitas, despesas, fundos e prestação de contas.', ['Tesouraria', 'Prestação de contas', 'Reconciliação']),
  department('seguros', 'Seguros e Proteção Patrimonial', 'Economia e serviços', 'Riscos, coberturas e proteção de pessoas e bens.', ['Riscos', 'Coberturas', 'Proteção patrimonial']),
  department('acolhimento', 'Acolhimento Social', 'Pessoas e cuidado', 'Escuta, orientação e encaminhamentos responsáveis.', ['Escuta', 'Orientação', 'Encaminhamento']),
  department('resgates', 'Resgates e Emergências', 'Operação e território', 'Missões críticas e articulação de respostas.', ['Triagem', 'Coordenação', 'Acompanhamento']),
  department('saude', 'Saúde Integrada', 'Pessoas e cuidado', 'Prevenção, orientação e acompanhamento de saúde.', ['Saúde básica', 'Prevenção', 'Rede especializada']),
  department('ambiental', 'Meio Ambiente e Sustentabilidade', 'Economia e serviços', 'Território, resíduos, recursos e ciclo da matéria.', ['Ciclo da matéria', 'Resíduos', 'Sustentabilidade']),
  department('seguranca', 'Segurança Preventiva', 'Operação e território', 'Prevenção, alertas e protocolos comunitários.', ['Prevenção', 'Alertas', 'Protocolos']),
  department('relacoes-publicas', 'Relações Públicas', 'Comunicação e expansão', 'Comunicação institucional e diálogo com a sociedade.', ['Imprensa', 'Relações institucionais', 'Comunicados']),
  department('redes', 'Comunicação e Redes Sociais', 'Comunicação e expansão', 'Conteúdo, campanhas, transmissões e presença pública.', ['Conteúdo', 'Campanhas', 'Transmissões']),
  department('internacional', 'Relações Internacionais', 'Comunicação e expansão', 'Cooperação e adaptação a outros países.', ['Cooperação', 'Representação', 'Adaptação']),
  department('expansao', 'Crescimento e Expansão', 'Comunicação e expansão', 'Entrada responsável em novos territórios.', ['Planejamento', 'Implantação', 'Acompanhamento']),
  department('ouvidoria', 'Ouvidoria e Experiência', 'Governança e integridade', 'Sugestões, reclamações e qualidade da experiência.', ['Escuta independente', 'Respostas', 'Melhoria contínua']),
  department('capacitacao', 'Capacitação Técnica', 'Pessoas e cuidado', 'Formação profissional, atualização e certificações.', ['Cursos', 'Certificações', 'Atualização']),
  department('formacao-humana', 'Formação Humana e Espiritual', 'Pessoas e cuidado', 'Valores, desenvolvimento humano e liberdade de consciência.', ['Convivência', 'Valores', 'Liberdade de consciência']),
  department('criacao', 'Criação e Design', 'Comunicação e expansão', 'Identidade, interfaces e experiências acessíveis.', ['Design', 'Identidade visual', 'Experiência']),
  department('manutencao', 'Manutenção e Zeladoria', 'Operação e território', 'Conservação, reparos e infraestrutura comunitária.', ['Manutenção', 'Zeladoria', 'Infraestrutura']),
  department('pesquisa', 'Pesquisa e Inteligência de Dados', 'Tecnologia e dados', 'Diagnósticos, métricas e conhecimento territorial.', ['Pesquisa', 'Indicadores', 'Diagnósticos']),
  department('cultura', 'Lazer, Cultura e Desporto', 'Comunicação e expansão', 'Convivência, cultura, esporte e bem-estar.', ['Cultura', 'Esporte', 'Convivência']),
  department('inovacao', 'Inovação e Desenvolvimento', 'Tecnologia e dados', 'Novos serviços, produtos e experimentação segura.', ['Pesquisa aplicada', 'Protótipos', 'Simulação']),
  department('auditoria', 'Auditoria Algorítmica e Tecnológica', 'Governança e integridade', 'Revisão de decisões automatizadas, logs e impactos.', ['Rastreabilidade', 'Revisão de IA', 'Relatórios de impacto'])
];
