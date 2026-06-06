import type { Project } from "../../types";

export const projects: Project[] = [
  {
    title: "HaveWant",
    description:
      "Plataforma brasileña para que coleccionistas y jugadores de TCG gestionen colecciones, negocien cartas, encuentren torneos y exploren catálogos. Desarrollada con frontend en React/TypeScript, backend en FastAPI, servicios de OCR y scraping, PostgreSQL, Redis, Celery e infraestructura en Docker.",
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
      "Aplicación para realizar el seguimiento del valor del carrito de compras en tiempo real, con OCR e IA para la categorización de productos. Desarrollada en Go con infraestructura Docker y autenticación mediante Keycloak. Usuario: teste@example.com Contraseña: test123",
    tech: ["Go", "Google Gemini", "OCR", "Docker", "Keycloak", "React"],
    url: "https://www.mercadigo.com",
  },
  {
    title: "Portfólio SO",
    description:
      "Este mismo portafolio que está utilizando. Un entorno de escritorio interactivo construido con React y Tailwind CSS.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    url: "https://github.com/romariojveloso-fiteclabs/portifolio",
  },
  {
    title: "Candidatos UFRPE",
    description:
      "Proyecto de análisis exploratorio de datos sobre los candidatos ingresantes a la Universidade Federal Rural de Pernambuco (UFRPE) a través del SISU. El repositorio reúne informes y notebooks en Python para examinar notas de corte, tipos de cuota y distribución por carrera y turno, con el objetivo de identificar patrones y tendencias académicas. Concebido como un estudio técnico y educativo, demuestra el uso práctico de la ciencia de datos aplicada al contexto educativo brasileño.",
    tech: ["Python", "Pandas", "Jupyter Notebook", "Matplotlib"],
    url: "https://github.com/romariojveloso-fiteclabs/Candidados_UFRPE",
  },
  {
    title: "Diário Oficial PDF Extractor",
    description:
      "Script en Python para la automatización de la extracción de datos de PDFs publicados en el Diário Oficial. La utilidad navega por el sitio web con Selenium, descarga los PDFs de interés y extrae fragmentos de texto relevantes utilizando PyMuPDF y expresiones regulares, facilitando las consultas automatizadas y la integración de datos.",
    tech: ["Python", "Selenium", "PyMuPDF", "Regular Expressions"],
    url: "https://github.com/romariojveloso-fiteclabs/DiarioOficial-PDFExtractor",
  },
  {
    title: "Business Messages Manager",
    description:
      "Aplicación fullstack para gestionar mensajes empresariales. Incluye una interfaz frontend en React/Vite y backend en FastAPI con rutas de API, persistencia en base de datos y orquestación con Docker. Permite el envío, almacenamiento y visualización de mensajes entre usuarios o sistemas.",
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
