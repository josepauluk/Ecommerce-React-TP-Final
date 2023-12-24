import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; 



const rootElement = document.getElementById('root');

// Utilizar createRoot desde react-dom/client
const root = createRoot(rootElement);

// Montar la aplicación dentro del contenedor root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);