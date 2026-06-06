# Portfolio — romariojveloso

[English](./README.md) | [Português](./README.pt-BR.md) | **Español** | [Français](./README.fr.md)

Portafolio profesional de Romário Jonas (Roma). Un simulador de sistema operativo clásico (RomaOS) desarrollado con React 19, Vite, TypeScript y Clean Architecture para presentar su carrera, formación y proyectos de forma inmersiva.

## Stack

- **Frontend:** React 19.2.0, Vite 6.2.0, TypeScript 5.8.2
- **Estilo:** CSS Vanilla nativo (estilos modulares puros, sin frameworks)
- **Biblioteca de Iconos:** React Icons (`react-icons`)
- **Internacionalización:** Context API nativa para soporte multilingüe en tiempo real (Portugués, Inglés, Español, Francés)

## Requisitos

- Node.js 20+
- npm (o gestor de paquetes equivalente)

## Instalación

**1. Instalar dependencias**

```bash
npm install
```

**2. Iniciar el servidor de desarrollo**

```bash
npm run dev
```

Abra la dirección que se muestra en su terminal para interactuar con RomaOS localmente.

## Comandos

```bash
npm run dev      # Inicia el servidor de desarrollo (Vite)
npm run build    # Compila la aplicación para producción (dist)
npm run preview  # Previsualiza la versión de producción localmente
npm run deploy   # Ejecuta el despliegue en GitHub Pages (gh-pages)
```

## Estructura del Proyecto

```
portifolio/
├── components/          # Componentes de interfaz divididos e aislados por responsabilidad
│   ├── Desktop/         # Componentes del espacio de trabajo del escritorio
│   ├── InstallerWizard/ # Asistente de configuración de bienvenida
│   ├── StartMenu/       # Subcomponentes y estilos del menú de inicio
│   ├── Taskbar/         # Elementos de la barra de tareas, reloj y botón de inicio
│   ├── Window/          # Controles, cálculos de estilos y vistas móviles/escritorio
│   └── WindowContent/   # Contenido individual de cada ventana
├── usecases/            # Lógica de negocio pura (Clean Architecture)
├── hooks/               # Hooks personalizados que integran estado y eventos
├── context/             # Proveedores de contexto global (LanguageContext)
├── locales/             # Diccionarios de internacionalización
└── types.ts             # Tipados globales del sistema
```

## Arquitectura (Clean Architecture)

```
usecases (business logic) → hooks (react controllers) → components (view/presentation)
```

- **usecases:** Funciones de JavaScript/TypeScript puras y probables que contienen las reglas de negocio de las ventanas (abrir, enfocar, minimizar, cerrar, sincronizar títulos, clic en la pestaña de la barra de tareas) sin dependencias de React.
- **hooks:** Hooks personalizados que actúan como controladores de estado (State Holders) y abstracciones de interacción (como arrastrar ventanas o detectar clics externos), conectando los casos de uso con la interfaz de usuario.
- **components:** Componentes de React modulares centrados puramente en la presentación y el marcado, estilizados con CSS nativo y aislado.

## RomaOS

La aplicación simula un entorno de escritorio completo donde el usuario puede:
- **Abrir y arrastrar ventanas:** Un sistema flexible que controla el enfoque activo mediante la manipulación incremental de Z-Index.
- **Instalar mediante la guía de inicio:** La guía de bienvenida enseña al usuario cómo interactuar con los iconos y la barra de tareas.
- **Cambiar de idioma:** Un botón en la barra de tareas traduce dinámicamente toda la interfaz y los títulos de las ventanas activas en tiempo real.
