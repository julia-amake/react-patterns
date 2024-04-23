import './styles/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
