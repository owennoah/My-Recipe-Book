import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles/index.css';
import { playTactileClick } from './utils/audio.js';

// Global click handler for skeuomorphic sound effects
document.addEventListener('pointerdown', (e) => {
  // If the user clicks a button or a link (or an element inside one)
  if (e.target.closest('button') || e.target.closest('a')) {
    playTactileClick();
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
