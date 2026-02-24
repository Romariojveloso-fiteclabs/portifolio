import { MdEmail, MdPhone } from "react-icons/md";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export const windows = {
  ABOUT: {
    title: "A propos de moi",
    content: `Bonjour ! Je suis Romario Jonas (ou Roma), etudiant en genie electronique et developpeur full-stack de niveau intermediaire avec une solide experience en analyse de donnees, automatisation et architecture logicielle. Je travaille a la creation de solutions evolutives et efficaces qui reunissent technologie, durabilite et innovation.

Mon parcours inclut des experiences chez Ford Motor Company, SEMINE et FITec. J'ai utilise des technologies telles que FastAPI, NestJS, PostgreSQL, Docker, RabbitMQ, Prisma et Prometheus/Grafana pour developper des systemes distribues et des plateformes basees sur des microservices.

Ma philosophie est de construire des solutions robustes et bien structurees, avec un accent sur la clarte, les performances et l'impact reel. Je crois en l'union entre science des donnees et ingenierie logicielle pour transformer l'information en decisions intelligentes et durables.

Ce portfolio reflete mon parcours technique et creatif — un espace ou technologie et finalite se rencontrent. N'hesitez pas a explorer mes projets et a me contacter !`,
  },
  PROJECTS: {
    title: "Mes projets",
    content: "Voici quelques-uns des projets sur lesquels j'ai travaille.",
  },
  EXPERIENCE: {
    title: "Experience professionnelle",
    content:
      "Un resume de mon parcours professionnel et de mes principales realisations.",
  },
  EDUCATION: {
    title: "Formation et certifications",
    content:
      "Ma formation academique et mes certifications professionnelles pertinentes.",
  },
  CONTACT: {
    title: "Entrer en contact",
    content: "Vous pouvez me contacter par les canaux ci-dessous :",
    contactItems: [
      {
        icon: MdEmail,
        label: "E-mails",
        value: "romariojonas@outlook.com.br | romario.veloso@ufpe.br",
        link: "mailto:romariojonas@outlook.com.br",
      },
      {
        icon: MdPhone,
        label: "Telephone",
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
        value: "Romadeoliveira3",
        link: "https://github.com/Romadeoliveira3",
      },
    ],
    footer:
      "N'hesitez pas a me contacter pour des collaborations, des projets ou simplement pour echanger des idees sur la technologie et l'innovation.",
  },
};
