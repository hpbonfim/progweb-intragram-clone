import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { Login } from './views/Login.js'
import { Perfil } from './views/Perfil.js'

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/404" element={<h1>404</h1>} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </React.StrictMode>
  )