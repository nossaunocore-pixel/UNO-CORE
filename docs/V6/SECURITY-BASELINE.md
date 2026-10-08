# Base Mínima de Segurança — UNO V6

## Princípios

- menor privilégio;
- negação por padrão;
- segredos somente no servidor;
- separação entre teste e produção;
- confirmação proporcional ao impacto;
- rastreabilidade sem exposição de dados sensíveis;
- responsabilidade humana para ações críticas.

## Controles obrigatórios

1. Nenhuma chave em código, navegador, repositório ou log.
2. Variáveis públicas limitadas a identificadores explicitamente seguros.
3. Papéis concedidos apenas pelo backend confiável.
4. CPF informado pelo cliente nunca concede privilégio de fundador.
5. Firebase Rules e Supabase RLS testados por papel.
6. Uploads passam por limite, validação de tipo, quarentena e análise.
7. Logs mascaram tokens, documentos, CPF, dados financeiros e conteúdo sensível.
8. Webhooks verificam assinatura e idempotência.
9. Ações irreversíveis exigem confirmação explícita e registro de evidência.
10. Toda publicação mantém versão anterior recuperável.

## Modos operacionais

| Modo | Dados | Pagamentos | Execução externa |
|---|---|---|---|
| Demonstração | fictícios/local | nenhuma | nenhuma |
| Teste | contas e dados de teste | Stripe test mode | sandbox |
| Piloto | dados reais mínimos e consentidos | somente se formalmente liberado | allowlist |
| Produção | dados reais classificados | contrato e controles completos | políticas aprovadas |

## Bloqueadores de produção

- ausência de política de privacidade e retenção;
- ausência de consentimento versionado;
- falha de isolamento entre usuários;
- segredo exposto;
- ação crítica sem aprovação;
- inexistência de rollback;
- logs contendo dados sensíveis em texto aberto.

