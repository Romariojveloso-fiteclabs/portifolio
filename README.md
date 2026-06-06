# Portfolio — romariojveloso

**English** | [Português](./README.pt-BR.md) | [Español](./README.es.md) | [Français](./README.fr.md)

Professional portfolio of Romário Jonas (Roma). A classic operating system simulator (RomaOS) built with React 19, Vite, TypeScript, and Clean Architecture to showcase his career, education, and projects in an immersive way.

## Stack

- **Frontend:** React 19.2.0, Vite 6.2.0, TypeScript 5.8.2
- **Styling:** Native CSS Vanilla (pure modular styles, no frameworks)
- **Icon Library:** React Icons (`react-icons`)
- **Internationalization:** Native Context API for real-time multilingual support (Portuguese, English, Spanish, French)

## Requirements

- Node.js 20+
- npm (or equivalent package manager)

## Setup

**1. Install dependencies**

```bash
npm install
```

**2. Start the development server**

```bash
npm run dev
```

Open the address displayed in your terminal to interact with RomaOS locally.

## Commands

```bash
npm run dev      # Start development server (Vite)
npm run build    # Build the application for production (dist)
npm run preview  # Preview the production build locally
npm run deploy   # Deploy to GitHub Pages (gh-pages)
```

## Project Structure

```
portifolio/
├── components/          # UI components split and isolated by responsibility
│   ├── Desktop/         # Desktop workspace components
│   ├── InstallerWizard/ # Welcome setup wizard
│   ├── StartMenu/       # Start menu subcomponents and styles
│   ├── Taskbar/         # Taskbar, clock, and start button elements
│   ├── Window/          # Window controls, style calculations, and mobile/desktop views
│   └── WindowContent/   # Individual window content
├── usecases/            # Pure business logic (Clean Architecture)
├── hooks/               # Custom hooks integrating state and events
├── context/             # Global context providers (LanguageContext)
├── locales/             # Internationalization dictionaries
└── types.ts             # Global system typings
```

## Architecture (Clean Architecture)

```
usecases (business logic) → hooks (react controllers) → components (view/presentation)
```

- **usecases:** Pure and testable JavaScript/TypeScript functions containing window business rules (open, focus, minimize, close, sync titles, taskbar tab click) with no React dependencies.
- **hooks:** Custom Hooks acting as state holders and interaction abstractions (such as window dragging or detecting outside clicks), bridging usecases and the UI.
- **components:** Modular React components focused purely on presentation and markup, styled with native, isolated CSS.

## RomaOS

The application simulates a fully featured desktop environment where the user can:
- **Open and drag windows:** A flexible system that controls active focus through incremental Z-Index manipulation.
- **Install via Setup Guide:** The onboarding guide teaches the user how to interact with icons and the taskbar.
- **Switch languages:** A button on the taskbar dynamically translates the entire interface and active window titles in real-time.
