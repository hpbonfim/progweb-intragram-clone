import React from 'react'
import './404.css'

export const NotFoundPage = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-error-code">404</div>
      <div className="notfound-error-message">Esta página não está disponível.</div>
      <div className="notfound-error-detail">
        O link que você seguiu pode estar quebrado, ou a página pode ter sido removida.
        <br/>
        <a href="/login">Voltar ao Instagram</a>.
      </div>
    </div>
  )
} 
