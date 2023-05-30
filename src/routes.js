import { BrowserRouter as Router, Routes as Switch, Route, Navigate } from 'react-router-dom'
import { Login } from './views/Login.js'
import { Perfil } from './views/Perfil.js'

export const Routes = () => (
  <Router>
    <Switch>
      <Route path="/login" element={<Login />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/404" element={<h1>404</h1>} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Switch>
  </Router>
)