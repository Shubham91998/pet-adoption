import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import ReactDOM from "react-dom/client";

import './index.css'
import App from './App.jsx'
import AuthProvider from './component/context/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AuthProvider>
    <div>
        <App />
      </div>
      </AuthProvider>
  </BrowserRouter>
)
