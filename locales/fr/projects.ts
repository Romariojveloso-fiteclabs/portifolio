import type { Project } from "../../types";

export const projects: Project[] = [
  {
    title: "HaveWant",
    description:
      "Plateforme bresilienne pour collectionneurs et joueurs de TCG afin de gerer leurs collections, echanger des cartes, trouver des tournois et explorer des catalogues. Construite avec un front-end React/TypeScript, un back-end FastAPI, des services OCR et scraping, PostgreSQL, Redis, Celery et une infrastructure Docker.",
    tech: [
      "React",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Celery",
      "OCR",
      "Docker",
    ],
    url: "https://havewant.com.br",
  },
  {
    title: "Mercadigo",
    description:
      "Application permettant de suivre la valeur du panier en temps reel, avec OCR et IA pour la categorisation des produits. Developpee en Go avec une infrastructure Docker et une authentification via Keycloak.",
    tech: ["Go", "Google Gemini", "OCR", "Docker", "Keycloak", "React"],
    url: "https://www.mercadigo.com",
  },
  {
    title: "Portfolio OS",
    description:
      "Le portfolio que vous utilisez en ce moment. Un environnement de bureau interactif construit avec React et Tailwind CSS.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    url: "https://github.com/romariojveloso-fiteclabs/portifolio",
  },
  {
    title: "Candidats UFRPE",
    description:
      "Analyse exploratoire des donnees sur les candidats admis a l'Universite federale rurale de Pernambuco (UFRPE) via SISU. Le depot rassemble des rapports et des notebooks Python pour examiner les scores de coupure, les types de quota et la repartition par cours et par periode, en mettant l'accent sur l'identification de tendances et de motifs academiques. Concu comme une etude technique et educative, il montre l'application pratique de la science des donnees dans le contexte educatif bresilien.",
    tech: ["Python", "Pandas", "Jupyter Notebook", "Matplotlib"],
    url: "https://github.com/romariojveloso-fiteclabs/Candidados_UFRPE",
  },
  {
    title: "Extracteur PDF du Journal officiel",
    description:
      "Script Python pour automatiser l'extraction de donnees a partir de PDFs publies au Journal officiel. L'utilitaire navigue sur le site avec Selenium, telecharge les PDFs pertinents et extrait des passages de texte avec PyMuPDF et des expressions regulieres, simplifiant les requetes automatisees et l'integration de donnees.",
    tech: ["Python", "Selenium", "PyMuPDF", "Regular Expressions"],
    url: "https://github.com/romariojveloso-fiteclabs/DiarioOficial-PDFExtractor",
  },
  {
    title: "Gestionnaire de messages business",
    description:
      "Application full-stack pour gerer des messages d'entreprise. Comprend un front-end React/Vite et un back-end FastAPI avec routes API, persistance en base de donnees et orchestration Docker. Permet l'envoi, le stockage et la visualisation de messages entre utilisateurs ou systemes.",
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "FastAPI",
      "Python",
      "SQLAlchemy",
      "Alembic",
      "Docker",
      "Makefile",
    ],
    url: "https://github.com/romariojveloso-fiteclabs/Business-Messages",
  },
];
