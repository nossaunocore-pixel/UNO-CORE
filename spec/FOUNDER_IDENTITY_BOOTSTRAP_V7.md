# Bootstrap seguro da identidade do fundador — UNO CORE V7

**Status:** especificação para implementação; não contém CPF, UID, token ou credenciais.
**Projeto Firebase informado anteriormente:** `uno-core-a9125`.
**Importante:** não aplicar alterações no Firebase Console até executar e revisar o procedimento.

## Objetivo
Reconhecer o fundador uma única vez por um processo confiável, vincular a identidade autenticada a um identificador interno estável e, nas requisições seguintes, usar essa associação em vez de pesquisar todos os usuários.

## Distinções de identidade
- **CPF:** dado pessoal identificador, não senha nem prova de autenticação.
- **Firebase Authentication UID:** identidade técnica autenticada pelo Firebase.
- **IDU:** identificador universal interno da UNO CORE.
- **Documento Firestore:** registro de dados; sua existência não significa que a pessoa esteja autenticada.
- **Papel de fundador:** autorização privilegiada emitida por processo confiável, não inferida de um campo que o cliente possa editar.

## Fluxo de bootstrap
1. Confirmar no Firebase Console se o registro atual do fundador está em Firestore e se existe algum usuário em Firebase Authentication. A verificação anterior mostrou a lista do Authentication vazia; não presumir que o documento de fundador seja uma conta autenticada.
2. Criar ou vincular um método de autenticação controlado pelo fundador. Não usar CPF como senha, token de sessão ou único fator de autenticação. A opção de autenticação deve ser definida com o fundador e testada.
3. Em ambiente server-side confiável, validar a identidade e fazer uma única associação entre a identidade autenticada e o registro interno do fundador. CPF, quando necessário para a verificação inicial, deve ser enviado por canal protegido, minimizado, não incluído em logs e não gravado no GitHub.
4. O processo de provisionamento concede a claim `unoFounder: true` ao UID autenticado correto usando Firebase Admin SDK. Nenhum cliente pode definir essa claim.
5. Persistir o vínculo estável entre UID autenticado e IDU em uma coleção de identidade protegida. Após a associação, requisições autenticadas usam o UID/IDU já vinculado; não precisam procurar pelo CPF repetidamente.
6. Conceder `unoMaster: true` apenas a pessoas que o fundador autorizar manualmente. A autorização deve ser auditada e revogável. A permissão administrativa não concede automaticamente acesso ao Painel Mestre.
7. Testar com Emulator Suite e uma matriz de permissões antes de aplicar regras em qualquer ambiente compartilhado.

## Política de dados
- Não colocar CPF em código-fonte, URLs, nomes de documentos públicos, logs ou metadados de deploy.
- Evitar usar CPF como ID do documento Firestore; preferir UID/IDU opaco e estável.
- Se o CPF precisar permanecer no sistema para finalidade legítima, restringir a leitura ao mínimo necessário, definir retenção e proteger com regras e acesso server-side.
- Não confiar em `request.resource.data.role`, `isFounder`, `cpf` ou campos equivalentes enviados pelo cliente para conceder privilégios.
- Negar acesso por padrão a coleções sem regras específicas aprovadas.
- O cliente não escreve papéis, permissões, transações, recompensas nem trilhas de auditoria críticas.

## Critério de conclusão
A configuração só é considerada concluída quando:
- a identidade autenticada do fundador foi verificada e vinculada ao registro interno correto;
- a claim de fundador foi concedida por processo confiável;
- usuário comum e usuário não autenticado não conseguem acessar o Painel Mestre por UI, API ou Firestore;
- a revogação de permissões é efetiva;
- testes positivos e negativos foram aprovados;
- o Firebase Console e o ambiente implantado foram verificados após publicação controlada.
