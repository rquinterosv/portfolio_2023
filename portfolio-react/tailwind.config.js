// tailwind.config.js

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    // Archivos que Tailwind debe revisar para eliminar estilos no utilizados en producción
  ],
  darkMode: false, // Opciones para el modo oscuro, por ejemplo
  theme: {
    extend: {
      colors: {
        primary: '#FF3366',
        // Define tus propios colores personalizados
      },
      fontFamily: {
        custom: ['Calibri', 'sans-serif'],
        // Define tus propias fuentes personalizadas
      },
      // Más configuraciones de tema extendido
    },
  },
  variants: {
    extend: {
      // Define variantes adicionales de clases aquí
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),  
  ],
};
