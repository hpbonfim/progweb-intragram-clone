import { BrowserRouter as Router, Routes as Switch, Route, Navigate } from 'react-router-dom'
import { Login } from './pages/Login'
import { Perfil } from './pages/Perfil'
import { NotFoundPage } from './pages/404'

export const Routes = () => (
  <Router>
    <Switch>
      <Route path="/login" element={<Login />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Switch>
  </Router>
)