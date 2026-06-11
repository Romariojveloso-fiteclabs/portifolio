import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export const windows = {
  ABOUT: {
    title: "About Me",
    content: `Hello! I'm Romário Jonas (or Roma), a Bachelor's student in Electronic Engineering and a Mid-level Full‑stack Developer with solid experience in data analysis, automation, and software architecture. I work on building scalable and efficient solutions that bring together technology, sustainability, and innovation.

My path includes experience at Ford Motor Company, SEMINE, and FITec. I have applied technologies such as FastAPI, NestJS, PostgreSQL, Docker, RabbitMQ, Prisma, and Prometheus/Grafana to develop distributed systems and microservice‑based platforms.

My philosophy is to build robust and well‑structured solutions with a focus on clarity, performance, and real‑world impact. I believe in the union of data science and software engineering to transform information into intelligent and sustainable decisions.

This portfolio reflects my technical and creative journey — a space where technology and purpose meet. Feel free to explore my projects and reach out!`,
  },
  PROJECTS: {
    title: "My Projects",
    content: "Here are some of the projects I've worked on.",
  },
  EXPERIENCE: {
    title: "Professional Experience",
    content: "A summary of my professional journey and main achievements.",
  },
  EDUCATION: {
    title: "Education & Certifications",
    content: "My academic background and relevant professional certifications.",
  },
  CONTACT: {
    title: "Get in Touch",
    content: "You can contact me through the channels below:",
    contactItems: [
      {
        icon: MdEmail,
        label: "Emails",
        value: "romariojonas@outlook.com.br | romario.veloso@ufpe.br",
        link: "mailto:romariojonas@outlook.com.br",
      },
      {
        icon: MdPhone,
        label: "Phone",
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
      "Feel free to reach out for collaborations, projects, or just to exchange ideas about technology and innovation.",
  },
  BLOG: {
    title: "Roma's Blog ",
    content: "Discover my latest articles about web development, Astro, and more.",
  },
};
