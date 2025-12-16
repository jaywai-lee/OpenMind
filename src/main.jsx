import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global/_reset.css';
import './styles/global/_base.css';
import './styles/global/_layout.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
