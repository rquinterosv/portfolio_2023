import React from 'react';
import { createRoot } from 'react-dom/client'; // Cambio en la importación
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')); // No es necesario usar ReactDOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Si deseas comenzar a medir el rendimiento en tu aplicación, puedes utilizar reportWebVitals
reportWebVitals();
