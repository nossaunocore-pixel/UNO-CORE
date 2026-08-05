# 006 — Estados Operacionais

## Objetivo

Definir os estados que representam o ciclo de vida de uma operação coordenada pelo Orquestrador Mestre.

---

## Conceito

Toda operação executada pela Plataforma UNO percorre estados operacionais claramente definidos, permitindo acompanhamento, rastreabilidade e controle durante toda sua execução.

Os estados representam a condição atual da operação, possibilitando que entidades, agentes e administradores compreendam seu andamento em tempo real.

---

## Estados

Uma operação poderá assumir, entre outros, os seguintes estados:

- Recebida;
- Em análise;
- Planejada;
- Aguardando autorização;
- Preparada;
- Em execução;
- Pausada;
- Concluída;
- Cancelada;
- Falhou;
- Em recuperação;
- Arquivada.

---

## Princípio

Toda operação deve possuir um estado conhecido e rastreável.
