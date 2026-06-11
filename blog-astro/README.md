# Roma Blog - Astro + Tailwind CSS

Este diretorio contem o blog estatico desenvolvido com Astro e integrado ao portfolio principal.

---

## Stacks Utilizadas

- **Astro v4**: Framework focado em performance de conteudo estatico com tempo de carregamento instantaneo.
- **Tailwind CSS v3**: Utilizado para a estilizacao rapida e responsiva de toda a interface.
- **TypeScript**: Tipagem estatica para validacao de schemas do frontmatter das postagens.
- **Vite/React (no Portfolio)**: Atua como hospedeiro que serve a compilacao do Astro em uma rota de subpasta publica (`/blog/`).

---

## Como Funciona a Integracao

Para eliminar a necessidade de rodar dois servidores de desenvolvimento paralelos (Astro e React), configuramos o Astro de forma integrada:
1. **base**: Configurado como `/blog` em `astro.config.mjs` para garantir que todas as rotas e assets gerados tenham caminhos que comecem com `/blog/`.
2. **outDir**: Configurado como `../public/blog` para gerar o build estatico do Astro diretamente dentro da pasta de assets publicos do portfolio React.
3. **build.format**: Configurado como `'file'` para compilar as paginas em arquivos `.html` fisicos especificos (ex: `/blog/porque-astro.html`), evitando conflitos de redirecionamento SPA do Vite.
4. **Iframe**: A janela do blog no portfolio React carrega o caminho relativo `/blog/index.html` de forma local e offline.

---

## Como Atualizar o Blog (Criar/Editar Artigos)

Toda a gestao de conteudo e feita de forma estatica a partir do diretório do Astro.

### 1. Criar novo Artigo
Adicione um arquivo com a extensao `.md` (ex: `meu-novo-post.md`) na pasta:
`blog-astro/src/content/blog/`

### 2. Definir o Frontmatter no topo do arquivo
Certifique-se de que o arquivo inicie com os metadados exigidos pelo schema (configurado em `src/content/config.ts`):

```markdown
---
title: "Meu Post de Engenharia"
description: "Breve resumo do que o post aborda."
pubDate: "2026-06-11"
category: "Conto"
readTime: "2 min"
image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400"
---

Escreva o conteudo em Markdown aqui...
```

### 3. Compilar e Atualizar o Portfolio
Apos criar ou editar seus posts, abra o terminal no diretorio `blog-astro` e execute o comando de build:
```bash
cd blog-astro
npm run build
```

O Astro compilara as paginas e atualizara a pasta `public/blog/` do portfolio de forma automatica. O Vite do portfolio exibira as alteracoes na janela do blog instantaneamente sem a necessidade de reiniciar o servidor do portfolio principal.

---

## Comandos Disponiveis

No diretorio `blog-astro`, voce pode executar:

- `npm install`: Instala todas as dependencias locais do Astro.
- `npm run build`: Compila o blog e gera os arquivos estaticos diretamente na pasta publica do portfolio principal.
- `npm run dev`: Inicia o dev server isolado do Astro na porta 4321 (apenas para testes isolados do blog fora do portfolio).
