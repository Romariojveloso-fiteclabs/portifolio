---
title: "Micro-Interações e Janelas Fluidas em React com Motion"
description: "Como projetar layouts de Desktop virtuais responsivos utilizando físicas de arrastar, foco ativo e animações inteligentes de redimensionamento."
pubDate: "2026-06-08"
category: "React"
readTime: "4 min"
image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop"
---

Dourar a experiência de desenvolvimento de um portfólio no formato de Sistema Operacional depende exclusivamente de dar atenção cuidadosa ao feedback visual. Micro-interações dão vida à interface, transformando elementos estáticos de web em uma experiência imersiva e prazerosa.

## Arranstar Janelas Sem Esforço
Mover janelas de um lado para o outro necessita parecer ágil e responsivo. Veja um padrão simples para alcançar física de arrastar resiliente e leve usando a linha motion reestruturada:

```typescript
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
```

## Tratando Foco de z-Index Dinamicamente
Em um desktop, clicar em uma janela deve trazê-la para o topo imediatamente. Para evitar redesenhos desnecessários, mantemos um estado centralizado no app principal, rastreando o maior `nextZIndex` a cada foco, incrementando-o sequencialmente.

## Layout Mágico no Mobile
Em telas menores de 768px, a física tradicional de desktop vira um empecilho. Janelas livres flutuantes ficam amontoadas e ilegíveis. A solução ideal consiste em transformar as janelas ativas em contêineres de tela cheia absolute/fixed, ocultando as decorações supérfluas (sombras externas, botões de minimizar/maximizar) e centralizando em um cabeçalho simples de navegação e conteúdo scrollável amplo.
