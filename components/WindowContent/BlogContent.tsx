import React, { useState, useMemo } from "react";
import { useTranslations } from "../../context/LanguageContext";
import { Language } from "../../types";

export interface BlogPost {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: { pt: string; en: string };
  overview: { pt: string; en: string };
  content: { pt: string; en: string };
  image: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: "why-astro-is-the-future",
    category: "Astro",
    date: "11 Jun 2026",
    readTime: "5 min",
    title: {
      pt: "Por que o Astro é o futuro para Blogs de Desenvolvedores",
      en: "Why Astro is the Future for Developer Blogs",
    },
    overview: {
      pt: "Entenda como o Astro envia zero JavaScript por padrão, alcançando pontuações perfeitas de SEO e performance impecável.",
      en: "Understand how Astro ships zero JavaScript by default, achieving perfect SEO scores and flawless performance.",
    },
    content: {
      pt: `O Astro revolucionou a forma como criamos sites focados em conteúdo nos últimos anos. Se você está planejando criar um blog pessoal, portfólio ou site de documentação, o Astro é indiscutivelmente a escolha mais inteligente.

### 1. Zero JavaScript por Padrão
Diferente dos tradicionais Single Page Application (SPA) criados com React ou frameworks como Next.js/Nuxt que obrigam a hidratação completa da página, o Astro compila todo o seu site para HTML super limpo e estático no build time. 

Se o seu post de blog não tem componentes interativos complexos, seu leitor receberá **0 KB de JavaScript**. Isso se traduz em um carregamento instantâneo em conexões mobile instáveis e notas 100/100 perfeitas no Lighthouse de forma automática!

### 2. A Mágica das Astro Islands (Arquitetura de Ilhas)
Mas e se você precisar de uma funcionalidade interativa? Um buscador em tempo real, ou um seletor de temas? Com as Astro Islands, você pode trazer componentes criados em qualquer biblioteca (React, Vue, Svelte, Solid, etc.) e deixá-los interativos apenas onde necessário:

\`\`\`astro
---
// Importe seu componente React favorito!
import SearchBarComponent from '../components/SearchBar.tsx';
---
<Layout title="Meu Blog">
  <header>
    <!-- Ativa o JavaScript apenas para este componente ao ficar visível! -->
    <SearchBarComponent client:visible />
  </header>
</Layout>
\`\`\`

Esta hidratação parcial parcial permite que você aproveite o ecossistema maduro do React, mas pague o custo de performance apenas pelos pacotes JS estritamente necessários.

### 3. Markdown e Coleções de Conteúdo Nativos
O Astro se integra perfeitamente ao Markdown e MDX. E com as "Content Collections", você ganha validação forte de esquemas com TypeScript para todos os seus arquivos Markdown das suas postagens de blog! Isso previne builds quebrados se você esquecer de preencher um autor ou data de publicação no frontmatter.

### Conclusão
O Astro combina o melhor de dois mundos: a simplicidade dos geradores estáticos clássicos (como Jekyll ou Hugo) com o poder dos componentes modernos de UI. É a ferramenta perfeita para você construir o blog dos seus sonhos de forma rápida e incrivelmente otimizada!`,
      en: `Astro has revolutionized how we build content-focused websites over the past few years. If you are planning to build a personal blog, portfolio, or documentation site, Astro is hands-down the smartest choice.

### 1. Zero JavaScript by Default
Unlike traditional Single Page Applications (SPAs) built with React, or full-stack frameworks like Next.js/Nuxt that force-hydrate the whole page, Astro compiles your entire site to super clean, static HTML at build time.

If your blog post doesn't include complex interactive components, your reader receives **0 KB of JavaScript**. This translates directly to instantaneous load times even on spotty mobile connections and automatic 100/100 Lighthouse scores!

### 2. The Magic of Astro Islands (Island Architecture)
But what if you need an interactive feature? A real-time search bar, or an interactive theme toggler? With Astro Islands, you can bring components built in any library (React, Vue, Svelte, Solid, etc.) and make them interactive only where needed:

\`\`\`astro
---
// Import your favorite React component!
import SearchBarComponent from '../components/SearchBar.tsx';
---
<Layout title="My Blog">
  <header>
    <!-- Activates JavaScript only for this component once it becomes visible! -->
    <SearchBarComponent client:visible />
  </header>
</Layout>
\`\`\`

This partial hydration allows you to leverage the rich React ecosystem while only paying the performance cost of JavaScript for the elements that strictly require it.

### 3. Native Markdown & Content Collections
Astro integrates seamlessly with Markdown and MDX. With "Content Collections", you get ultra-strict, TypeScript-validated schemas for all your markdown post files. This completely prevents broken builds if you forget to fill a publication date or author in the frontmatter.

### Verdict
Astro yields the absolute best of two worlds: the extreme simplicity and light footprint of classical static site generators (like Jekyll or Hugo) combined with the flexibility of modern component-driven UI. It is the perfect tool to build your dream developer blog!`,
    },
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "windows-framer-motion-tricks",
    category: "React",
    date: "08 Jun 2026",
    readTime: "4 min",
    title: {
      pt: "Micro-Interações e Janelas Fluidas em React com Motion",
      en: "Fluid Window Micro-Interactions in React via Motion",
    },
    overview: {
      pt: "Como projetar layouts de Desktop virtuais responsivos utilizando físicas de arrastar, foco ativo e animações inteligentes de redimensionamento.",
      en: "How to design responsive virtual desktop layouts utilizing drag physics, active z-index focus, and smart resizing animations.",
    },
    content: {
      pt: `Dourar a experiência de desenvolvimento de um portfólio no formato de Sistema Operacional depende exclusivamente de dar atenção cuidadosa ao feedback visual. Micro-interações dão vida à interface, transformando elementos estáticos de web em uma experiência imersiva e prazerosa.

### Arranstar Janelas Sem Esforço
Mover janelas de um lado para o outro necessita parecer ágil e responsivo. Veja um padrão simples para alcançar física de arrastar resiliente e leve usando a linha motion reestruturada:

\`\`\`typescript
import { motion } from 'motion/react';

// Um componente de janela com arrastar nativo acelerado por hardware
export const DraggableWindow = ({ children }) => {
  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0}
      whileDrag={{ scale: 1.01, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}
      className="absolute border border-amber-500 rounded bg-gray-900"
    >
      <div className="drag-handle cursor-move p-2 bg-gray-800 text-amber-400">
        Header (Arraste-me)
      </div>
      <div className="p-4 text-white">
        {children}
      </div>
    </motion.div>
  );
};
\`\`\`

### Tratando Foco de z-Index Dinamicamente
Em um desktop, clicar em uma janela deve trazê-la para o topo imediatamente. Para evitar redesenhos desnecessários, mantemos um estado centralizado no app principal, rastreando o maior \`nextZIndex\` a cada foco, incrementando-o sequencialmente.

### Layout Mágico no Mobile
Em telas menores de 768px, a física tradicional de desktop vira um empecilho. Janelas livres flutuantes ficam amontoadas e ilegíveis. A solução ideal consiste em transformar as janelas ativas em contêineres de tela cheia absolute/fixed, ocultando as decorações supérfluas (sombras externas, botões de minimizar/maximizar) e centralizando em um cabeçalho simples de navegação e conteúdo scrollável amplo.`,
      en: `Fleshing out a virtual OS portfolio relies entirely on paying close attention to user feedback and dynamic physics. Micro-interactions breathe life into the UI, elevating simple web forms into an immersive virtual playground.

### Drag Dynamics That Feel Right
Moving window frames around should feel light-weight and responsive. Here is an elegant pattern for smooth, hardware-accelerated drag-and-drop utilizing modern React Motion:

\`\`\`typescript
import { motion } from 'motion/react';

// A window shell component with native physical drag properties
export const DraggableWindow = ({ children }) => {
  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0}
      whileDrag={{ scale: 1.01, boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}
      className="absolute border border-amber-500 rounded bg-gray-900"
    >
      <div className="drag-handle cursor-move p-2 bg-gray-800 text-amber-400">
        Header (Drag Me)
      </div>
      <div className="p-4 text-white">
        {children}
      </div>
    </motion.div>
  );
};
\`\`\`

### Dynamic Z-Index Focus Flow
In active desktop environments, interacting with a window frame must immediately raise it. To avoid broad visual lag, it is best to persist a centralized, reactive state that maps to the highest active \`zIndex\`, incrementing it sequentially whenever a window handles an \`onMouseDown\` or click.

### Magic Responsive Transformation
On screens smaller than 768px, floating windows become a usability nightmare. The screen is too small to split into columns. Our ideal approach uses Tailwind responsive prefixes (\`sm:\`, \`md:\`) to transform windows into immersive, fullscreen overlays (\`fixed inset-0\`) that maximize mobile readability, strip away layout margin noise, and streamline navigation!`,
    },
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "tailwind-css-v4-rust",
    category: "Architecture",
    date: "01 Jun 2026",
    readTime: "6 min",
    title: {
      pt: "Turbinando Projetos React com a Revolução do Tailwind CSS v4",
      en: "Boosting React Workflows with Tailwind CSS v4",
    },
    overview: {
      pt: "Explore os novos recursos do Tailwind v4, que traz um compilador de alta performance escrito em Rust para builds de CSS super ágeis.",
      en: "Explore the amazing features of Tailwind v4, introducing a high-performance Rust compiler for lightning-fast CSS builds.",
    },
    content: {
      pt: `O ecossistema do CSS foi abalado pelo lançamento da nova grande versão do Tailwind CSS: a v4.0. Se você costumava achar que os tempos de compilação de CSS podiam ser melhorados, esta versão foi pensada especificamente para você.

### 1. Novo Compilador de Alto Desempenho em Rust
O Tailwind v4 migrou de uma arquitetura estritamente JavaScript (PostCSS) para um motor nativo ultra otimizado construído inteiramente em Rust. O resultado?
- Builds de desenvolvimento até **10 vezes mais rápidos**.
- Compilações incrementais de Hot Module Replacement (HMR) que ocorrem na escala de sub-milissegundos!

### 2. Configuração "CSS-First" Própria
Esqueça o tradicional e demorado arquivo \`tailwind.config.js\`. Agora você configura seus breakpoints, cores customizadas, fontes e variáveis de tema diretamente no seu arquivo CSS principal usando propriedades CSS nativas!

\`\`\`css
@import "tailwindcss";

@theme {
  --color-primary-brand: #ea580c;
  --font-display: "Space Grotesk", sans-serif;
  --animate-pulse-slow: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
\`\`\`

Isso significa que o seu arquivo de estilo vira a única fonte da verdade, aproximando a ferramenta dos padrões modernos do W3C.

### 3. Detecção Automática de Arquivos de Origem
O compilador v4 varre suas pastas e arquivos de forma automática para rastrear classes utilitárias em uso, sem a necessidade de preencher manualmente uma configuração de \`content\` (com strings complexas de regex). O gerador apenas descobre arquivos JS, TS, TSX e HTML e gera as folhas correspondentes de forma transparente!`,
      en: `The modern CSS community experienced a massive architectural shift with the release of Tailwind CSS v4.0. If you have ever wanted your CSS build times to match your fast Rust backend speeds, this release was built for you.

### 1. A Brand New High-Performance Rust Compiler
Tailwind v4 shifts away from its JavaScript-heavy PostCSS heritage into a custom Rust-coded engine. The real-world results:
- Development builds that are up to **10 times faster**.
- Incremental hot-reloads that achieve sub-millisecond execution!

### 2. Native CSS-First Configuration
Forget about complex \`tailwind.config.js\` files cluttering up your repository. You now define customized breakpoints, theme colors, display fonts, and animations directly inside your core CSS rule files using native CSS properties:

\`\`\`css
@import "tailwindcss";

@theme {
  --color-primary-brand: #ea580c;
  --font-display: "Space Grotesk", sans-serif;
  --animate-pulse-slow: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
\`\`\`

This aligns your workflow beautifully with modern web standards, keeping styles unified in stylesheet files.

### 3. Absolute Auto-Content Detection
No more maintaining arrays of content file-paths to tell the scanner where to look. Tailwind v4 automatically scans your sources for utility classes, effortlessly reading your React TypeScript codes (\`.ts\`, \`.tsx\`, \`.html\`) and building optimal production assets!`,
    },
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop",
  },
];

export const BlogContent: React.FC = () => {
  const { language } = useTranslations();
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const langKey = language === Language.PT ? "pt" : "en";

  const categories = useMemo(() => {
    const list = BLOG_POSTS.map((p) => p.category);
    return Array.from(new Set(list));
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const titleText = post.title[langKey].toLowerCase();
      const overviewText = post.overview[langKey].toLowerCase();
      const contentText = post.content[langKey].toLowerCase();

      const matchesSearch =
        titleText.includes(searchQuery.toLowerCase()) ||
        overviewText.includes(searchQuery.toLowerCase()) ||
        contentText.includes(searchQuery.toLowerCase());

      const matchesCategory =
        !selectedCategory || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, langKey]);

  return (
    <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 font-sans">
      <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex-shrink-0">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
            Roma Blog
          </span>
        </div>
        {selectedPost && (
          <button
            id="blog-back-btn"
            onClick={() => setSelectedPost(null)}
            className="flex items-center space-x-1.5 px-3 py-1 text-sm bg-amber-500 hover:bg-amber-600 text-white rounded font-medium transition-colors"
          >
            &larr; {language === Language.PT ? "Voltar para Listagem" : "Back to List"}
          </button>
        )}
      </div>

      <div className="flex-grow overflow-auto p-4 md:p-6">
        {selectedPost ? (
          <article className="max-w-2xl mx-auto py-4 animate-fade-in">
            <div className="flex items-center space-x-2.5 mb-3 text-sm">
              <span className="px-2 py-0.5 text-xs font-bold bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 rounded">
                {selectedPost.category}
              </span>
              <span className="text-slate-400 dark:text-slate-500 font-mono text-xs">
                {selectedPost.date}
              </span>
              <span className="text-slate-300 dark:text-slate-700 font-mono text-xs">
                &bull;
              </span>
              <span className="text-slate-400 dark:text-slate-500 font-mono text-xs">
                {selectedPost.readTime}{" "}
                {language === Language.PT ? "de leitura" : "read"}
              </span>
            </div>

            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight mb-6">
              {selectedPost.title[langKey]}
            </h1>

            <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden mb-6 border border-slate-200 dark:border-slate-800">
              <img
                src={selectedPost.image}
                alt="article cover"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed space-y-4">
              {selectedPost.content[langKey].split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3
                      key={index}
                      className="text-xl font-bold text-slate-900 dark:text-white pt-4"
                    >
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={index}
                      className="text-2xl font-bold text-slate-950 dark:text-slate-50 border-b border-slate-200 dark:border-slate-800 pb-2 pt-4"
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  );
                }
                if (paragraph.startsWith("- ")) {
                  return (
                    <ul key={index} className="list-disc pl-5 space-y-1 my-2">
                      {paragraph.split("\n").map((li, i) => (
                        <li key={i}>{li.replace("- ", "")}</li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.startsWith("```")) {
                  const blockLines = paragraph.split("\n");
                  const langTag = blockLines[0].replace("```", "");
                  const codeText = blockLines.slice(1, -1).join("\n");
                  return (
                    <div
                      key={index}
                      className="my-4 rounded-lg overflow-hidden border border-amber-600/30 overflow-x-auto bg-slate-950 p-4 font-mono text-xs text-amber-400"
                    >
                      {langTag && (
                        <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider mb-2 border-b border-slate-800 pb-1">
                          {langTag} snippet
                        </div>
                      )}
                      <pre className="whitespace-pre">{codeText}</pre>
                    </div>
                  );
                }
                return (
                  <p key={index} className="whitespace-pre-wrap">
                    {paragraph}
                  </p>
                );
              })}
            </div>

            <div className="mt-12 p-5 rounded-xl border border-dashed border-amber-500/40 bg-amber-500/5 dark:bg-amber-950/10">
              <h4 className="font-bold text-amber-600 dark:text-amber-400 mb-2">
                Seu Template Oficial do Astro esta Pronto!
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
                {language === Language.PT
                  ? "Criei uma pasta isolada chamada /blog-astro contendo este blog escrito no framework Astro oficial com Tailwind CSS, coleções de tipos prontas e instruções detalhadas de como publicar!"
                  : "An isolated directory /blog-astro was generated containing this blog code written in the Astro framework with Tailwind CSS, collections ready, and deploy instructions!"}
              </p>
              <div className="text-xs font-mono bg-slate-950 text-emerald-400 px-3 py-2 rounded border border-slate-800">
                cd blog-astro && npm install && npm run dev
              </div>
            </div>
          </article>
        ) : (
          <div className="max-w-4xl mx-auto space-y-6">


            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-white dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="relative flex-grow max-w-md">
                <input
                  id="blog-search-input"
                  type="text"
                  placeholder={
                    language === Language.PT ? "Pesquisar posts..." : "Search posts..."
                  }
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-3 pr-8 py-1.5 text-sm rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-2 text-slate-400 hover:text-slate-200 text-xs font-bold leading-normal"
                  >
                    &times;
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5 items-center">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all \${
                    !selectedCategory
                      ? "bg-amber-500 text-white"
                      : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                  }`}
                >
                  {language === Language.PT ? "Todos" : "All"}
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition-all \${
                      selectedCategory === category
                        ? "bg-amber-500 text-white"
                        : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-12 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl">
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  {language === Language.PT
                    ? "Nenhuma postagem encontrada para a busca."
                    : "No posts found matching the query."}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredPosts.map((post) => {
                  const title = post.title[langKey];
                  const overview = post.overview[langKey];
                  return (
                    <div
                      key={post.id}
                      onClick={() => {
                        setSelectedPost(post);
                        setTimeout(() => {
                          const winContainer = document.getElementById("blog-back-btn")
                            ?.parentElement?.parentElement?.nextSibling as HTMLElement;
                          if (winContainer) winContainer.scrollTop = 0;
                        }, 50);
                      }}
                      className="group flex flex-col bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow transition-all"
                    >
                      <div className="w-full h-36 bg-slate-100 dark:bg-slate-800 overflow-hidden relative">
                        <img
                          src={post.image}
                          alt="preview cover"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                        <span className="absolute top-2.5 left-2.5 px-2 py-0.5 text-[10px] font-bold bg-amber-500 text-white rounded shadow-sm">
                          {post.category}
                        </span>
                      </div>

                      <div className="p-4 flex flex-col flex-grow">
                        <span className="text-[10px] font-mono font-semibold text-slate-400 dark:text-slate-500 tracking-wider">
                          {post.date} &bull; {post.readTime}
                        </span>
                        <h3 className="mt-1.5 font-bold text-slate-900 dark:text-white leading-snug group-hover:text-amber-500 transition-colors line-clamp-2">
                          {title}
                        </h3>
                        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed flex-grow">
                          {overview}
                        </p>
                        <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-900/60 flex items-center justify-between text-xs font-semibold text-amber-500 dark:text-amber-400">
                          <span>
                            {language === Language.PT ? "Ler mais" : "Read more"} &rarr;
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
