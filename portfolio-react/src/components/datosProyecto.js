import nodejsLogo from "../img/nodejs.png";
import reactLogo from "../img/react.png";
import bootstrapLogo from "../img/bootstrap.png";
import tailwindLogo from "../img/Tailwind.png";
import perfilImage from "../img/perfil.jpeg";
import trasmundoImage from "../img/trasmundo.png";

const datosProyecto = [
  {
    id: 1,
    nombre: "Personal Portfolio",
    imagen: perfilImage,
    lenguajes: [
      { nombre: "JavaScript", logo: nodejsLogo },
      { nombre: "React", logo: reactLogo },
      { nombre: "Node.js", logo: nodejsLogo },
      { nombre: "Bootstrap", logo: bootstrapLogo },
    ],
    descripcion: "Project created to showcase my work experience, present the projects I've been working on, and also share some things I'm passionate about in life.",
    link: "https://portfolio-2023-coral-three.vercel.app/",
  },
  {
    id: 2,
    nombre: "Proyecto 2",
    imagen: trasmundoImage,
    lenguajes: [
      { nombre: "JavaScript", logo: nodejsLogo },
      { nombre: "React", logo: reactLogo },
      { nombre: "Node.js", logo: nodejsLogo },
      { nombre: "Tailwindscss", logo: tailwindLogo },
    ],
    descripcion: "Project focused on providing migration advisory services so that people from Latin America, initially, can access opportunities to obtain study visas, learn English, or plan vacations",
    link: "https://trasmundo.vercel.app",
  },
  // Agrega más proyectos si es necesario
];

export default datosProyecto;
