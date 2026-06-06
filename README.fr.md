# Portfolio — romariojveloso

[English](./README.md) | [Português](./README.pt-BR.md) | [Español](./README.es.md) | **Français**

Portfolio professionnel de Romário Jonas (Roma). Un simulateur de système d'exploitation classique (RomaOS) développé avec React 19, Vite, TypeScript et la Clean Architecture pour présenter sa carrière, sa formation et ses projets de manière immersive.

## Stack

- **Frontend :** React 19.2.0, Vite 6.2.0, TypeScript 5.8.2
- **Style :** CSS Vanilla natif (styles modulaires purs, sans frameworks)
- **Bibliothèque d'icônes :** React Icons (`react-icons`)
- **Internationalisation :** Context API native pour un support multilingue en temps réel (Portugais, Anglais, Espagnol, Français)

## Prérequis

- Node.js 20+
- npm (ou gestionnaire de paquets équivalent)

## Installation

**1. Installer les dépendances**

```bash
npm install
```

**2. Démarrer le serveur de développement**

```bash
npm run dev
```

Ouvrez l'adresse affichée dans votre terminal pour interagir avec RomaOS localement.

## Commandes

```bash
npm run dev      # Démarre le serveur de développement (Vite)
npm run build    # Compile l'application pour la production (dist)
npm run preview  # Prévisualise la version de production localement
npm run deploy   # Déploie sur GitHub Pages (gh-pages)
```

## Structure du Projet

```
portifolio/
├── components/          # Composants UI divisés et isolés par responsabilité
│   ├── Desktop/         # Composants de l'espace de travail du bureau
│   ├── InstallerWizard/ # Assistant de configuration de bienvenue
│   ├── StartMenu/       # Sous-composants et styles du menu démarrer
│   ├── Taskbar/         # Éléments de la barre des tâches, de l'horloge et du bouton démarrer
│   ├── Window/          # Contrôles, calculs de styles et vues mobiles/desktop
│   └── WindowContent/   # Contenu individuel de chaque fenêtre
├── usecases/            # Logique métier pure (Clean Architecture)
├── hooks/               # Hooks personnalisés intégrant l'état et les événements
├── context/             # Fournisseurs de contexte global (LanguageContext)
├── locales/             # Dictionnaires d'internationalisation
└── types.ts             # Typages globais du système
```

## Architecture (Clean Architecture)

```
usecases (business logic) → hooks (react controllers) → components (view/presentation)
```

- **usecases :** Fonctions JavaScript/TypeScript pures et testables contenant les règles métier des fenêtres (ouvrir, focaliser, minimiser, fermer, synchroniser les titres, clic sur la barre des tâches) sans dépendances React.
- **hooks :** Hooks personnalisés agissant comme des gestionnaires d'état (State Holders) et des abstractions d'interaction (comme le glisser-déposer de fenêtres ou la détection de clics extérieurs), faisant le pont entre les cas d'utilisation et l'interface utilisateur.
- **components :** Composants React modulaires axés purement sur la présentation et le balisage, stylisés avec du CSS natif et isolé.

## RomaOS

L'application simule un environnement de bureau complet où l'utilisateur peut :
- **Ouvrir et glisser des fenêtres :** Un système flexible qui contrôle le focus actif grâce à une manipulation incrémentale du Z-Index.
- **Installer via le guide de configuration :** Le guide d'intégration montre à l'utilisateur comment interagir avec les icônes et la barre des tâches.
- **Changer de langue :** Un bouton sur la barre des tâches traduit dynamiquement toute l'interface et les titres des fenêtres actives en temps réel.
