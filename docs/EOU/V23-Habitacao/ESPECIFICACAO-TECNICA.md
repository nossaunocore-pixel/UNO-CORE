# EOU-V23 — Especificação técnica de Habitação

- Revisão documental: 0.3.0
- Estado: proposta técnica; não habilita corretagem, transação imobiliária ou assistência pública
- Dependências: V13, V16–V18, V20, V24, V27–V29, V31, V39, V40

## 1. Fronteira
V23 organiza informação e oportunidades habitacionais, imóveis, manutenção, serviços e encaminhamentos. Não substitui cartório, registro imobiliário, corretor habilitado, análise jurídica, crédito ou órgão público. Cada operação declara se é diretório, publicidade, intermediação, prestação ou programa social.

## 2. Modelo lógico
Property(id, property_type, owner_entity, location_ref, status, verification_ref).
PropertyAuthority(id, property_id, advertiser, authority_type, evidence_ref, valid_from, valid_until).
HousingOffer(id, property_id, offer_type, price, currency, conditions, provider, terms_version, status).
OccupancyRelation(id, property_id, occupant, relation, validity, evidence_ref).
VisitRequest(id, offer_id, requester, schedule, status, consent_ref).
MaintenanceService(id, property_id, provider, scope, price, warranty, status).
HousingNeed(id, territory, requester_ref, privacy_level, category, status).
ProgramReferral(id, need_id, institution, eligibility_source, protocol, status).

## 3. Verificação
Distinguir declaração, documento recebido, consulta a fonte confiável e revisão por profissional. Verificação de anunciante não comprova domínio; autorização para anunciar precisa de evidência. Não afirmar regularidade registral ou ausência de ônus sem fonte atual e análise competente.

## 4. Privacidade e segurança
Endereço exato, ocupação, vulnerabilidade e documentos são restritos. Publicar localização aproximada quando suficiente. Visitas não devem expor residência de pessoa vulnerável sem fluxo seguro. Impedir scraping, fraude, anúncio duplicado e coleta indevida de documentos.

## 5. Oferta e contratação
Informar preço, encargos, condições, responsável, validade, situação, restrições e documentos. Contratos, sinal, depósito, locação, compra e comissão exigem revisão jurídica e financeira. Não receber valores em nome de terceiros sem arranjo aprovado. Cancelamento e devolução seguem contrato e lei aplicável.

## 6. Encaminhamento social
Programas e benefícios exibem fonte, data, critérios e órgão responsável. A UNO não garante elegibilidade, concessão ou disponibilidade. Dados de família e vulnerabilidade exigem finalidade específica, acesso mínimo e não exposição pública.

## 7. Testes e aceite
Testar anunciante sem autoridade, documento expirado, propriedade disputada, localização exposta, fraude, duplicidade, oferta suspensa, visita, pagamento, cancelamento e acesso cross-user. Aceite requer política de verificação, fluxo de suporte, contrato e revisão jurídica/imobiliária.

## 8. Pendências
Definir escopo inicial informacional versus transacional, fontes de verificação, parceiros, papéis jurídicos, política de anúncios, dados sensíveis e eventual integração com programas oficiais.
