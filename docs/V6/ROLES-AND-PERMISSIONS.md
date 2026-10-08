# Papéis e Permissões — UNO V6

## Papéis iniciais

### Visitante

Explora conteúdo público e conversa em modo limitado. Não acessa dados privados nem executa ações externas.

### Usuário autenticado

Acessa apenas dados próprios e vínculos autorizados. Pode participar, propor e consentir em nome próprio.

### Colaborador

Acessa missões e dados mínimos do escopo delegado. Não herda poder administrativo.

### Operador departamental

Opera um Painel Mestre Departamental dentro de capacidade, período e território definidos.

### Administrador

Administra dados e configurações permitidas. Não altera arquitetura global, credenciais ou regras constitucionais.

### Fundador

Acessa o Painel Mestre Global e pode aprovar mudanças arquiteturais durante a fase de fundação, sempre com registro e freios de segurança.

### Orquestrador Mestre

Classifica, planeja, simula, recomenda e executa apenas dentro das autorizações existentes. Nunca concede privilégio a si próprio nem aprova sua própria alteração.

## Matriz resumida

| Capacidade | Visitante | Usuário | Colaborador | Operador | Admin | Fundador | OM |
|---|---:|---:|---:|---:|---:|---:|---:|
| Conteúdo público | Ver | Ver | Ver | Ver | Ver | Ver | Ler contexto |
| Dados próprios | — | Gerir | Próprios | Mínimo necessário | Conforme função | Auditado | Conforme missão |
| Propostas e votos | Limitado | Sim | Sim | Sim | Sim | Sim | Organizar |
| Missões | — | Solicitar | Delegadas | Coordenar escopo | Administrar | Supervisionar | Orquestrar |
| APIs e segredos | — | — | — | Estado apenas | Estado permitido | Gestão auditada | Usar por capability |
| Arquitetura global | — | — | — | — | — | Aprovar | Propor/simular |
| Publicação | — | — | — | — | Preparar | Aprovar | Executar autorizada |

## Reconhecimento do fundador

O reconhecimento ocorre por `user_id` autenticado associado a papel privilegiado concedido no backend. CPF pode participar de verificação de identidade, mas nunca será o único fator de autorização.

