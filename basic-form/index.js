import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Here, the final step of rendering the page is performed. App is imported, and rendered to the DOM.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
