export const common = {
  desktop_icons: {
    ABOUT: "A propos de moi",
    PROJECTS: "Projets",
    EXPERIENCE: "Experience",
    EDUCATION: "Formation",
    GITHUB: "GitHub",
    LINKEDIN: "LinkedIn",
    CONTACT: "Contact",
    LATTES: "CV Lattes",
    BLOG: "Mon Blog ",
  },
  ui: {
    start: "Demarrer",
    view_source: "Voir le projet",
    language_switch: "Portugues",
    context_menu: {
      sort_name: "Trier par Nom",
      sort_date: "Trier par Date",
      reset: "Réinitialiser",
    },
    installer: {
      welcome_title: "Bienvenue sur RomaOS !",
      welcome_description:
        "Ce guide rapide vous presentera les fonctionnalites de mon portfolio interactif.",
      about_description: (verb: string) =>
        `${verb} sur cette icone pour en savoir plus sur moi, mes competences et ma passion pour le developpement.`,
      projects_description:
        "Explorez une selection de mes travaux, avec des details sur les technologies utilisees et des liens vers le code source.",
      experience_education_title: (exp: string, edu: string) =>
        `${exp} & ${edu}`,
      experience_education_description:
        "Parcourez mon parcours professionnel et ma formation academique pour decouvrir ma trajectoire.",
      links_title: "Liens externes",
      links_description:
        "Connectez-vous avec moi ! Retrouvez mon code sur GitHub et mon profil professionnel sur LinkedIn via ces raccourcis.",
      contact_description: (verb: string) =>
        `${verb} sur cette icone pour trouver les meilleures facons de me contacter.`,
      all_set_title: "Tout est pret !",
      all_set_description: (verb: string) =>
        `L'"installation" est terminee. N'hesitez pas a explorer. ${verb} sur "Terminer" pour commencer.`,
      finish: "Terminer",
      next: "Suivant",
      back: "Retour",
      progress: "Progression",
      setup_guide: "Guide de configuration - RomaOS",
      start_exploring: "Commencer a explorer",
    },
    pwa: {
      title: "Installer RomaOS",
      description: "Souhaitez-vous installer RomaOS en tant qu'application sur votre appareil ? Cela permettra un accès rapide et une expérience en plein écran.",
      confirm: "Installer",
      cancel: "Annuler",
    },
  },
};
