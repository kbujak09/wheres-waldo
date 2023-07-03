import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Router } from 'react-router-dom';
import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename='/wheres-waldo'>
    <App />
  </Router>
);