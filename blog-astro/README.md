# 🚀 Template de Blog Pessoal no Astro + Tailwind CSS

Este diretório contém a estrutura completa, limpa e autossuficiente para o seu futuro Blog de Desenvolvedor, desenvolvida utilizando o moderno framework **Astro** e estilizada de ponta a ponta com **Tailwind CSS**.

---

## 📁 Estrutura de Pastas Escolhida

Abaixo estão descritos os principais elementos fornecidos no scaffold:

```text
/blog-astro
├── src/
│   ├── content/             <-- Onde ficam seus artigos Markdown (.md)
│   │   ├── config.ts        <-- Validação de frontmatter forte baseada em TypeScript
│   │   └── blog/
│   │       ├── porque-astro.md
│   │       ├── micro-interactions.md
│   │       └── tailwind-v4.md
│   ├── layouts/
│   │   └── Layout.astro     <-- O "esqueleto" HTML compartilhado (Header, Footer, SEO)
│   ├── pages/
│   │   ├── index.astro      <-- A página principal que lê, filtra e exibe o grid de cards
│   │   └── blog/
│   │       └── [slug].astro <-- Rota dinâmica para ler e renderizar cada markdown de forma estática
│   └── styles/
│       └── global.css       <-- Configuração central de diretivas Tailwind & tipografia
├── astro.config.mjs         <-- Configurações e integrações oficiais do Astro (Tailwind ativa)
├── tailwind.config.mjs      <-- Paleta de cores, fontes integradas e utilitários estendidos
├── package.json             <-- Script de comandos (dev, build, preview) e dependências
└── README.md                <-- Este arquivo de guia explicativo!
```

---

## ⚡ Como Rodar o Blog Localmente

Para extrair este repositório do seu portfólio e rodá-lo no seu computador pessoal, siga estas instruções simples:

1. **Baixe ou Exportar os Arquivos**:
   Abra o menu de configurações do AI Studio (no canto superior direito) e faça o download do projeto como um arquivo **ZIP** (ou exporte diretamente para o seu **GitHub**).

2. **Entre na Pasta do Blog**:
   Abra o terminal na pasta em que você descompactou o projeto e navegue para o subdiretório do Astro:
   ```bash
   cd blog-astro
   ```

3. **Instale as Dependências**:
   Recomendamos utilizar o `npm`, mas você também pode usar `yarn` ou `pnpm`:
   ```bash
   npm install
   ```

4. **Inicie o Servidor de Desenvolvimento**:
   Inicie o renderizador em tempo real na porta padrão (geralmente `http://localhost:4321`):
   ```bash
   npm run dev
   ```

---

## ✍️ Como Criar Novos Artigos de Forma Segura

Graças às **Coleções de Conteúdo (Content Collections)** do Astro, cada postagem inserida possui o seu Frontmatter validado por tipos TypeScript declarados em `src/content/config.ts`.

Para criar mais um artigo, basta adicionar um arquivo `.md` (ou `.mdx`) dentro de `src/content/blog/` com as metatags corretas no topo:

```markdown
---
title: "Meu Quarto Post Sensacional"
description: "Um resumo chamativo sobre o conteúdo abordado neste artigo."
pubDate: "2026-06-12"
category: "React"
readTime: "3 min"
image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400"
---

Escreva seu texto aqui em Markdown tradicional! Você pode usar formatos de título de nível 2 (##),
listas ordenadas ou blocos de código usando crases triplas.
```

Se você se esquecer de especificar algum desses campos obrigatórios, o compilador do Astro acusará o erro na tela imediatamente durante o build, impedindo deploys quebrados em produção de forma proativa.

---

## 🪐 Como Funciona o Roteamento Dinâmico no Astro

No Astro, **rotas são arquivos físicos**. O arquivo em `src/pages/blog/[slug].astro` usa uma função especial chamada `getStaticPaths()`. Ele instrui o gerador a coletar todos os posts do diretório de coleções e gerar rotas estáticas pré-compiladas individuais a cada slug correspondente.

Essa compilação totalmente estática ao invés de buscar os textos do banco de dados a cada request poupa tráfego no servidor e faz com que seu blog seja carregado com latência quase nula de qualquer lugar do mundo!

---

## 🚢 Como Fazer o Deploy em 5 Minutos

O Astro gera arquivos estáticos puros ao rodar o build. Você pode hospedá-los gratuitamente nas plataformas mais populares:

### Opção A: Vercel ou Netlify (Altamente Recomendado)
1. Conecte seu repositório Git baixado na plataforma em questão.
2. A Vercel/Netlify detectará de forma automática que se trata de uma aplicação Astro.
3. Elas configurarão o comando de compilação como `astro build` e a pasta de saída como `dist/`.
4. Clique em **Deploy** e pronto! Seu blog estará no ar de forma global.

### Opção B: GitHub Pages
Você pode compilar e enviar a pasta estática `/dist` gerada para o braço de páginas estáticas do próprio GitHub.

---

Aproveite este modelo! Ele foi projetado para ser leve, rápido, limpo e estruturado por um Engenheiro de Software Sênior. Se precisar de melhorias ou extensões, basta continuar a conversa. Boa escrita! 🚀
