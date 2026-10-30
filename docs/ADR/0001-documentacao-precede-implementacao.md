# ADR-0001 — A documentação precede a implementação

- **Status:** Aceito como princípio documental já declarado no repositório
- **Data do registro:** 30 de outubro de 2026
- **Escopo:** engenharia, produto, dados, segurança, integrações e operações da UNO CORE

## Contexto

A engenharia da UNO declara que decisões estruturais devem ser documentadas antes de sua implementação. O princípio aparece no README da EOU e no fluxo de evolução da Engenharia Oficial.

Sem documentação rastreável, a implementação pode divergir da missão, criar conceitos duplicados, ocultar dependências ou transformar hipóteses em comportamentos de produto sem aprovação.

## Decisão

Toda mudança estrutural ou funcional relevante deve possuir documentação suficiente antes de ser implementada. A documentação deve identificar, no mínimo:

- problema e objetivo;
- fonte da necessidade e autoridade da decisão;
- escopo incluído e excluído;
- atores, papéis e permissões;
- dados, finalidade, retenção e proteção;
- fluxos e estados;
- dependências e integrações;
- falhas e respostas esperadas;
- critérios de aceite e testes;
- estado de maturidade.

A documentação deve distinguir decisões consolidadas, propostas técnicas e temas ainda sujeitos à deliberação.

## Consequências

- A implementação terá requisitos verificáveis e critérios de aceite.
- Alterações relevantes terão rastreabilidade entre decisão, documento, código e teste.
- Lacunas devem ser registradas, não preenchidas silenciosamente com suposições.
- Mudanças emergenciais poderão ser executadas apenas dentro de autorização e salvaguardas existentes, com documentação e revisão posteriores.
- A documentação não substitui validação jurídica, segurança, testes ou autorização humana.

## Relação com a EOU

Este ADR complementa a Engenharia Oficial. A EOU define os fundamentos e padrões; os ADRs registram decisões específicas e sua evolução. Um ADR posterior poderá substituir esta decisão apenas mediante justificativa explícita e sem apagar o histórico.

## Critério de conformidade

Uma mudança relevante está em conformidade quando existe fonte decisória identificada, especificação suficiente, critérios de aceite, implementação rastreável e evidência de teste antes de ser declarada liberada.
