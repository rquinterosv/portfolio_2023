// Icons
import nodejsLogo from "../img/nodejs.png";
import reactLogo from "../img/react.png";
import bootstrapLogo from "../img/bootstrap.png";
import tailwindLogo from "../img/Tailwind.png";
import javascript from '../img/js.png'
import html from '../img/html-5.png'
import css from '../img/css-3.png'
import wordpress from '../img/wordpress.png'

// Img
import incubadora from "../img/incubadora.png";
import trasmundoImage from "../img/trasmundo.png";
import grime from '../img/grime.png'
import rquinterosv from '../img/rquinterosv.png'

const datosProyecto = [
  {
    id: 1,
    nombre: "Desafío Latam Incubator",
    imagen: incubadora,
    lenguajes: [
      { nombre: "JavaScript", logo: javascript },
      { nombre: "html", logo: html },
      { nombre: "css", logo: css },
      { nombre: "Bootstrap", logo: bootstrapLogo },
    ],
    descripcion: "Project for Desafío Latam with the intention of promoting IT talent in Latin America, this page is the landing page so that those interested can apply to the work teams.",
    link: "https://desafiolatam.com/incubadora/",
  },
  {
    id: 2,
    nombre: "Trasmundo",
    imagen: trasmundoImage,
    lenguajes: [
      { nombre: "JavaScript", logo: javascript },
      { nombre: "React", logo: reactLogo },
      { nombre: "Node.js", logo: nodejsLogo },
      { nombre: "Bootstrap", logo: bootstrapLogo },
    ],
    descripcion: "Project focused on providing migration advisory services so that people from Latin America, initially, can access opportunities to obtain study visas, learn English, or plan vacations",
    link: "https://trasmundo.vercel.app",
  },
  {
    id: 2,
    nombre: "Grime Fighters",
    imagen: grime,
    lenguajes: [
      { nombre: "JavaScript", logo: wordpress },
      { nombre: "React", logo: html },
      { nombre: "Node.js", logo: css },
    ],
    descripcion: "Page created for the company Grime Fighters, this page was designed by wordpress and focused on presenting the services of the company, changes in HTML and CSS were adjusted to complement the design.",
    link: "https://grimefighters.ca/",
  },
  {
    id: 2,
    nombre: "Personal Website",
    imagen: rquinterosv,
    lenguajes: [
      { nombre: "JavaScript", logo: javascript },
      { nombre: "React", logo: reactLogo },
      { nombre: "Node.js", logo: nodejsLogo },
      { nombre: "Tailwindscss", logo: tailwindLogo },
    ],
    descripcion: "Personal presentation page for IT position. On this page components and design structures are created to create a professional presentation of my profile and apply for positions to continue working as a developer.",
    link: "https://rafaquinterosv.vercel.app/",
  },
  // Agrega más proyectos si es necesario
];

export default datosProyecto;
