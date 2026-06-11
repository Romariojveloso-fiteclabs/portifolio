# Portfolio — romariojveloso

**English** | [Português](./README.pt-BR.md) | [Español](./README.es.md) | [Français](./README.fr.md)

Professional portfolio of Romário Jonas (Roma). A classic operating system simulator (RomaOS) built with React 19, Vite, TypeScript, and Clean Architecture to showcase his career, education, and projects in an immersive way.

## Live Demo & Social Links

[![RomaOS Live](https://img.shields.io/badge/Live%20Demo-RomaOS-blue?style=for-the-badge&logo=googlechrome&logoColor=white)](https://romariojveloso-fiteclabs.github.io/portifolio/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/romario-jonas-veloso-427373175)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/romariojveloso-fiteclabs)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/romadeoliveira1/)
[![Email](https://img.shields.io/badge/Email-romariojonas@outlook-D24939?style=for-the-badge&logo=microsoftoutlook&logoColor=white)](mailto:romariojonas@outlook.com.br)


## Stack

- **Frontend:** React 19.2.0, Vite 6.2.0, TypeScript 5.8.2
- **Styling:** Native CSS Vanilla (pure modular styles, no frameworks)
- **Icon Library:** React Icons (`react-icons`)
- **Internationalization:** Native Context API for real-time multilingual support (Portuguese, English, Spanish, French)
- **PWA Integration:** Native manifest (`manifest.json`), custom lightweight caching service worker (`sw.js`), responsive app icons, and inline PWA installation handler

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
- **Install as a PWA:** Install the site directly on your desktop or mobile home screen via the native pop-up, Start Menu option, or onboarding wizard final step.

## PWA (Progressive Web App)

RomaOS is fully optimized as an installable Progressive Web App:
- **Offline Support:** Power by a custom Service Worker (`sw.js`) with dynamic asset caching, allowing the portfolio experience to load instantly even without an internet connection.
- **App Installation:** Employs a dedicated "Install RomaOS" button within the Start Menu and final onboarding step (for both desktop and mobile layouts) when visited over secure connections (HTTPS or localhost).
- **Mobile Ready:** Prepared with custom launcher icons (192px/512px) and native Apple standalone viewport properties.

