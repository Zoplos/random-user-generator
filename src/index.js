import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Card from './Card';
import GenerateButton from './GenerateButton';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="flex flex-col gap-8 items-center justify-center min-h-screen">
      <App />
    </div>
  </React.StrictMode>
);
