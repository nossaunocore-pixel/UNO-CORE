# ESTRUTURA DO BANCO DE DADOS — Firestore

## Coleções:

### /agentes
- {id}: nome, funcao, principios, estado, ultima_verificacao

### /pessoas
- {id}: nome, dados, dignidade_protegida: true, necessidades, status

### /registros
- {id}: data, agente, acao, observacao, impacto

### /configuracoes
- {id}: regra, valor, ultima_atualizacao

## Regras de Segurança (desenvolvimento):
```rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
