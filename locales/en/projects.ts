import type { Project } from "../../types";

export const projects: Project[] = [
  {
    title: "HaveWant",
    description:
      "Brazilian platform for TCG collectors and players to manage collections, trade cards, find tournaments, and explore card catalogs. Built with a React/TypeScript frontend, FastAPI backend, OCR and scraping services, PostgreSQL, Redis, Celery, and Docker infrastructure.",
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
      "Application to track shopping cart totals in real time, using OCR and AI for product categorization. Built in Go with Docker infrastructure and Keycloak authentication.",
    tech: ["Go", "Google Gemini", "OCR", "Docker", "Keycloak", "React"],
    url: "https://www.mercadigo.com",
  },
  {
    title: "OS Portfolio",
    description:
      "This very portfolio you are using. An interactive desktop-like environment built with React and Tailwind CSS.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    url: "https://github.com/romariojveloso-fiteclabs/portifolio",
  },
  {
    title: "UFRPE Candidates",
    description:
      "Exploratory data analysis on applicants admitted to the Federal Rural University of Pernambuco (UFRPE) via SISU. The repository brings together reports and Python notebooks to examine cut-off scores, quota types, and distribution by course and shift, focusing on identifying academic patterns and trends. Designed as a technical and educational study, it demonstrates practical data science applied to the Brazilian education context.",
    tech: ["Python", "Pandas", "Jupyter Notebook", "Matplotlib"],
    url: "https://github.com/romariojveloso-fiteclabs/Candidados_UFRPE",
  },
  {
    title: "Official Gazette PDF Extractor",
    description:
      "Python script to automate data extraction from PDFs published in the Official Gazette. The utility navigates the site with Selenium, downloads relevant PDFs, and extracts text snippets using PyMuPDF and regular expressions, streamlining automated queries and data integration.",
    tech: ["Python", "Selenium", "PyMuPDF", "Regular Expressions"],
    url: "https://github.com/romariojveloso-fiteclabs/DiarioOficial-PDFExtractor",
  },
  {
    title: "Business Messages Manager",
    description:
      "Full‑stack application for managing business messages. Includes a React/Vite frontend and a FastAPI backend with API routes, database persistence, and Docker orchestration. Enables sending, storing, and viewing messages between users or systems.",
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
