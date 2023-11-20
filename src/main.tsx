import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '../src/globalStyles/reset.scss';
import '../src/globalStyles/vars.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
