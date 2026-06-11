import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export const windows = {
  ABOUT: {
    title: "Sobre Mí",
    content: `¡Hola! Soy Romário Jonas (ou Roma), estudiante de Ingeniería Electrónica y Desarrollador Fullstack Pleno con sólida experiencia en análisis de datos, automatización y arquitectura de software. Me dedico a la creación de soluciones escalables y eficientes, uniendo tecnología, sostenibilidad e innovación.

Con una trayectoria que incluye experiencias en Ford Motor Company, SEMINE y FITec, he estado aplicando tecnologías como FastAPI, NestJS, PostgreSQL, Docker, RabbitMQ, Prisma y Prometheus/Grafana en el desarrollo de sistemas distribuidos y plataformas basadas en microservicios.

Mi filosofía es construir soluciones robustas y bien estructuradas, con un enfoque en la claridad, el rendimiento y el impacto real. Creo en la unión entre la ciencia de datos y la ingeniería de software para transformar información en decisiones inteligentes y sostenibles.

Este portafolio refleja mi viaje técnico y creativo — un espacio donde la tecnología y el propósito se encuentran. ¡Siéntase libre de explorar mis proyectos e intercambiar ideas!`,
  },
  PROJECTS: {
    title: "Mis Proyectos",
    content: "Aquí están algunos de los proyectos en los que he trabajado.",
  },
  EXPERIENCE: {
    title: "Experiencia Profesional",
    content:
      "Un resumen de mi trayectoria profesional y principales logros.",
  },
  EDUCATION: {
    title: "Formación y Certificados",
    content:
      "Mi formación académica y certificados profesionales relevantes.",
  },
  CONTACT: {
    title: "Póngase en Contacto",
    content: "Puede ponerse en contacto conmigo a través de los siguientes canales:",
    contactItems: [
      {
        icon: MdEmail,
        label: "Correos electrónicos",
        value: "romariojonas@outlook.com.br | romario.veloso@ufpe.br",
        link: "mailto:romariojonas@outlook.com.br",
      },
      {
        icon: MdPhone,
        label: "Teléfono",
        value: "+55 (81) 98538-4702",
        link: "tel:+5581985384702",
      },
      {
        icon: FaLinkedin,
        label: "LinkedIn",
        value: "Romario Jonas",
        link: "https://www.linkedin.com/in/romario-jonas-veloso-427373175",
      },
      {
        icon: FaInstagram,
        label: "Instagram",
        value: "romadeoliveira1",
        link: "https://www.instagram.com/romadeoliveira1/",
      },
      {
        icon: FaGithub,
        label: "GitHub",
        value: "romariojveloso-fiteclabs",
        link: "https://github.com/romariojveloso-fiteclabs",
      },
    ],
    footer:
      "No dude en ponerse en contacto para colaboraciones, proyectos o simplemente para compartir ideas sobre tecnología e innovación.",
  },
  BLOG: {
    title: "Roma's Blog ",
    content: "Descubre mis artículos más recientes sobre desarrollo web, Astro y mucho más.",
  },
};
