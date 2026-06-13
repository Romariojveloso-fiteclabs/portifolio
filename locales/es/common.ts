export const common = {
  desktop_icons: {
    ABOUT: "Sobre Mí",
    PROJECTS: "Proyectos",
    EXPERIENCE: "Experiencia",
    EDUCATION: "Formación",
    GITHUB: "GitHub",
    LINKEDIN: "LinkedIn",
    CONTACT: "Contacto",
    LATTES: "Currículum Lattes",
    BLOG: "Mi Blog ",
  },
  ui: {
    start: "Iniciar",
    view_source: "Ver Proyecto",
    language_switch: "Español",
    context_menu: {
      sort_name: "Organizar por Nombre",
      sort_date: "Organizar por Fecha",
      reset: "Restablecer",
    },
    installer: {
      welcome_title: "¡Bienvenido a RomaOS!",
      welcome_description:
        "Esta guía rápida le presentará las características de mi portafolio interactivo.",
      about_description: (verb: string) =>
        `${verb} en este icono para saber más sobre mí, mis habilidades y mi pasión por el desarrollo.`,
      projects_description:
        "Explore una selección de mis trabajos, con detalles sobre las tecnologías utilizadas y enlaces al código fuente.",
      experience_education_title: (exp: string, edu: string) =>
        `${exp} & ${edu}`,
      experience_education_description:
        "Navegue por mi trayectoria profesional y formación académica para conocer mi camino.",
      links_title: "Enlaces Externos",
      links_description:
        "¡Conéctese conmigo! Encuentre mi código en GitHub y mi perfil profesional en LinkedIn a través de estos accesos directos.",
      contact_description: (verb: string) =>
        `${verb} en este icono para encontrar las mejores formas de ponerse en contacto conmigo.`,
      all_set_title: "¡Todo Listo!",
      all_set_description: (verb: string) =>
        `La "instalación" está completa. Siéntase libre de explorar. ${verb} en "Finalizar" para comenzar.`,
      finish: "Finalizar",
      next: "Siguiente",
      back: "Anterior",
      progress: "Progreso",
      setup_guide: "Guía de Configuración - RomaOS",
      start_exploring: "Comenzar a Explorar",
    },
    pwa: {
      title: "Instalar RomaOS",
      description: "¿Desea instalar RomaOS como una aplicación en su dispositivo? Esto permitirá un acceso rápido y una experiencia a pantalla completa.",
      confirm: "Instalar",
      cancel: "Cancelar",
    },
  },
};
