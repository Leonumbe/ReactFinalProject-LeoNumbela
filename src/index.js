import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//toastify
import 'react-toastify/dist/ReactToastify.css';
//boostrap
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

