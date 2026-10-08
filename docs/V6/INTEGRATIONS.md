# Integrações — UNO V6

## Contrato universal

Toda integração deve declarar:

- identificador e provedor;
- finalidade;
- ambientes disponíveis;
- autenticação usada;
- capacidades autorizadas;
- dados enviados e recebidos;
- custo e limites;
- saúde e última verificação;
- responsável;
- logs permitidos;
- fallback;
- processo de revogação.

## Integrações iniciais

| Serviço | Função | Primeiro estado |
|---|---|---|
| Gemini | contexto e compreensão | server-side/teste |
| GPT | estruturação e decisão assistida | server-side/teste |
| Firebase | autenticação e operação interna | piloto controlado |
| Supabase | dados relacionais do usuário | RLS/teste |
| Stripe | adesão e planos | test mode |
| YouTube | transmissão pública | conector futuro controlado |
| GitHub | código, documentação e ADRs | ativo por branch |
| Vercel | preview e publicação | preview antes de produção |
| Antigravity | desenvolvimento assistido | branch e revisão humana |

## Painel de integração

Cada integração exibirá estado, ambiente, custo estimado, consumo, limites, falhas recentes e ações permitidas. Chaves e tokens jamais serão exibidos.

## Falhas

Uma falha de provedor não autoriza troca silenciosa de finalidade, exposição de dados ou execução duplicada. O sistema deverá falhar de forma segura, registrar o evento e informar o usuário quando relevante.

