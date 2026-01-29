# Groove Code

<img width="1536" height="1024" alt="groovecodelogo2" src="https://github.com/user-attachments/assets/52c39672-a56c-4e72-9b56-2c08e1a3ce83" />

Imagine um instrumento musical de código: um ambiente online, minimalista e imersivo. De um lado, um editor simples e elegante; do outro, uma visualização abstrata e pulsante que reage ao som. Não há botões tradicionais de play/stop: o código é a música. Cada alteração no código é refletida em tempo real no áudio.

> Objetivo: não ser uma DAW completa (como Ableton Live), mas sim um instrumento expressivo em que a linguagem de programação é a interface.

---

## Visão geral
- **Monorepo** com Turborepo.
- **Web (Angular)**: interface minimalista e visualização reativa.
- **API (NestJS)**: serviços backend para áudio/estado (evoluindo conforme o projeto).
- (Opcional) **Docs (Next.js)**: site de documentação.

Estrutura:
```
apps/
  groove-code-web/   # App web (Angular)
  groove-code-api/   # API (NestJS)
  docs/              # Documentação (opcional)
packages/
  ui/                # Componentes compartilhados (se aplicável)
  eslint-config/     # Config ESLint
  typescript-config/ # TS configs
```

---

## Pré‑requisitos
- Node.js >= 18
- npm >= 9

Dica: use as versões indicadas em `package.json` (campo `engines`/`packageManager`).

---

## Como rodar localmente
1. Instale as dependências na raiz do monorepo:
   ```bash
   npm install
   ```
2. Suba Web e API em paralelo:
   ```bash
   npm run dev
   ```
3. Acesse:
   - Web (Angular): http://localhost:4200
   - API (NestJS): http://localhost:3000

> O comando `npm run dev` usa o Turborepo para rodar `dev` apenas em `./apps/groove-code-web` e `./apps/groove-code-api`.

---

## Scripts úteis
- Raiz
  - `npm run dev`: inicia Web e API em paralelo (via Turbo).
  - `npm run build`: build nos pacotes/aplicações.
  - `npm run lint`: lint em todo o monorepo.
  - `npm run check-types`: checagem de tipos.
- Web (apps/groove-code-web)
  - `npm run dev`: `ng serve` (porta padrão 4200). 
- API (apps/groove-code-api)
  - `npm run dev`: `nest start --watch` (porta padrão 3000).

---

## Variáveis de ambiente
- Arquivos `.env` são ignorados pelo Git.
- Configure variáveis específicas da API/Web conforme necessário (ex.: URLs, tokens, portas). As portas padrão podem ser ajustadas via flags/scripts ou variáveis.

---

## Solução de problemas
- "No tasks were executed": confirme que cada app possui `scripts.dev` e que o filtro do Turbo aponta para:
  - `./apps/groove-code-web`
  - `./apps/groove-code-api`
- Conflito de portas: ajuste as portas (`ng serve --port 4200`, configurar porta no Nest ou via `PORT`).
- Dependências inconsistentes: `rm -rf node_modules && npm install` na raiz.

---

## Roadmap resumido
- Linguagem de live coding musical amigável e expressiva.
- Engine de áudio reativa a mudanças no código (hot‑reload musical).
- Visualização generativa sincronizada com o áudio.
- Presets, exemplos e compartilhamento de sketches.

---

## 🎨 Paleta de cores – Groove Code
# 🔵 Fundo (dark navy)

#0C0E18 – fundo mais escuro

#141827 – variação do fundo

#151927 – navy levemente mais claro

Essas cores criam o clima tech + noturno + sofisticado.

🔷 Gradiente do símbolo (vinil / groove)

Gradiente frio, moderno, muito bem alinhado com música + código:

#2F6FE4 – azul elétrico

#3F8DEB – azul médio vibrante

#55C6C4 – ciano / verde água

#6FE7D8 – ciano claro (highlight)

👉 Esse gradiente funciona muito bem em linear (45° ou 90°) ou radial, como no símbolo atual.

⚪ Tipografia

#FFFFFF – branco puro (texto principal)

#F2F2F3 – branco suave (alternativa para menos contraste)
---

## Licença
Projeto em estágio inicial; detalhes de licença podem evoluir.
