import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement.dataset.prerendered === 'true') {
  hydrateRoot(rootElement, <App />);
} else {
  rootElement.textContent = '';
  createRoot(rootElement).render(<App />);
}
