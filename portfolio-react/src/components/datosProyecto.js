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
    descripcion: "Descripción del Proyecto 1.",
    link: "link_proyecto_1",
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
    descripcion: "Descripción del Proyecto 2.",
    link: "link_proyecto_2",
  },
  // Agrega más proyectos si es necesario
];

export default datosProyecto;
