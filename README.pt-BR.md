# Portfolio — romariojveloso

[English](./README.md) | **Português** | [Español](./README.es.md) | [Français](./README.fr.md)

Portfolio profissional de Romario Jonas (Roma). Simulador de sistema operacional classico (RomaOS) desenvolvido com React 19, Vite, TypeScript e Clean Architecture para apresentar sua carreira, formacao e projetos de forma imersiva.

## Demonstracao Online & Redes Sociais

[![RomaOS Live](https://img.shields.io/badge/Live%20Demo-RomaOS-blue?style=for-the-badge&logo=googlechrome&logoColor=white)](https://romariojveloso-fiteclabs.github.io/portifolio/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/romario-jonas-veloso-427373175)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/romariojveloso-fiteclabs)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/romadeoliveira1/)
[![Email](https://img.shields.io/badge/Email-romariojonas@outlook-D24939?style=for-the-badge&logo=microsoftoutlook&logoColor=white)](mailto:romariojonas@outlook.com.br)


## Stack

- **Frontend:** React 19.2.0, Vite 6.2.0, TypeScript 5.8.2
- **Estilizacao:** CSS Vanilla nativo (estilos modulares puros, sem frameworks)
- **Biblioteca de Icones:** React Icons (`react-icons`)
- **Internacionalizacao:** Context API nativa para suporte multilingue em tempo real (Portugues, Ingles, Espanhol, Frances)

## Requisitos

- Node.js 20+
- npm (ou gerenciador de pacotes equivalente)

## Setup

**1. Instalar dependencias**

```bash
npm install
```

**2. Iniciar o servidor de desenvolvimento**

```bash
npm run dev
```

Abra o endereco exibido no seu terminal para interagir com o RomaOS localmente.

## Comandos

```bash
npm run dev      # Inicia o servidor de desenvolvimento (Vite)
npm run build    # Compila a aplicacao para producao (dist)
npm run preview  # Visualiza o build de producao localmente
npm run deploy   # Executa o deploy para o GitHub Pages (gh-pages)
```

## Estrutura do Projeto

```
portifolio/
├── components/          # Componentes visuais subdivididos e isolados por responsabilidade
│   ├── Desktop/         # Componentes da area de trabalho
│   ├── InstallerWizard/ # Assistente de boas-vindas
│   ├── StartMenu/       # Subcomponentes e estilos do menu iniciar
│   ├── Taskbar/         # Elementos da barra de tarefas, relogio e botao iniciar
│   ├── Window/          # Controles, calculo de estilos e views mobile/desktop
│   └── WindowContent/   # Conteudo individualizado para as janelas
├── usecases/            # Regras de negocio puras (Clean Architecture)
├── hooks/               # Custom hooks de integracao de estado e eventos
├── context/             # Provedores de contexto global (LanguageContext)
├── locales/             # Dicionarios de internacionalizacao
└── types.ts             # Tipagens globais do sistema
```

## Arquitetura (Clean Architecture)

```
usecases (business logic) → hooks (react controllers) → components (view/presentation)
```

- **usecases:** Funcoes JavaScript/TypeScript puras e testaveis contendo as regras de negocio das janelas (abrir, focar, minimizar, fechar, sincronizar titulos, clique na barra de tarefas) sem dependencias do React.
- **hooks:** Custom Hooks que atuam como controladores de estado (State Holders) e abstracao de interacoes (como arrastar janelas ou gerenciar cliques externos), fazendo a ponte entre os casos de uso e a UI.
- **components:** Componentes React modularizados focados apenas em apresentacao e markup, estilizados com CSS nativo e isolado.

## RomaOS

A aplicacao simula uma area de trabalho completa onde o usuario pode:
- **Abrir e arrastar janelas:** Sistema flexivel que controla o foco atraves de manipulacao de Z-Index incremental.
- **Instalar o guia de inicio:** O assistente de boas-vindas ensina o usuario a interagir com os icones e a barra de tarefas.
- **Alternar idiomas:** Um botao na barra de tarefas atualiza dinamicamente toda a interface e os titulos das janelas ativas em tempo real.
