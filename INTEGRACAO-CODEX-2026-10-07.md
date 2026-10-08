# UNO Core — pacote integrado de 07/10/2026

## Resultado

- Build TypeScript/Vite aprovado.
- Landing pública reformulada como Cidade UNO.
- Avatar central clicável conduz à conversa.
- Módulos públicos exibem estado real: disponível no MVP ou em construção.
- Marcos de 1.000 participantes e 10.000 usuários apresentados separadamente.
- Painel Mestre oculto até a simulação local do perfil fundador.
- Simulação de fundador claramente identificada, sem alegar cadastro ou pagamento real.
- Conversa conectada a `/api/chat`, com falha transparente quando o motor estiver indisponível.
- Função `/api/chat` ajustada para o runtime Edge da Vercel.
- Nenhuma chave ou arquivo `.env` incluído neste pacote.

## Instalação no projeto local

Este ZIP já contém o projeto completo. Antes de substituir qualquer arquivo no computador,
preserve uma cópia da pasta atual.

No PowerShell, dentro da pasta do projeto:

```powershell
npm.cmd install
npm.cmd run build
npm.cmd run dev
```

Endereço configurado pelo Vite:

```text
http://localhost:3000
```

Para testar também a função `/api/chat` localmente, utilize o ambiente da Vercel:

```powershell
npx.cmd vercel dev
```

## Variáveis e segurança

As credenciais devem permanecer nas variáveis de ambiente da Vercel ou em `.env.local`.
Nunca inserir chaves em arquivos `.tsx`, `.ts`, prompts, capturas de tela ou commits.

O motor de conversa requer a variável configurada para o AI Gateway no ambiente em que
a função `/api/chat` for executada.

## Limites atuais

- O cadastro e a autenticação ainda são demonstrativos.
- O reconhecimento do fundador é apenas local e temporário.
- Stripe não realiza cobrança neste pacote.
- Persistência de conversas por usuário ainda precisa ser conectada ao banco após a
  definição final de autenticação e consentimento.
