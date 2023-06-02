import React from 'react'
import './login.css'

export function Login() {
  return (
    <main className="main">
      <div className="container">
        <div className="logo-container">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
            alt="Instagram"
          />
        </div>
        <br />
        <form className="form">
          <div className="form-group">
            <label className="form-label" htmlFor="username">
              Usuário
            </label>
            <input
              className="form-input"
              type="text"
              id="username"
              name="username"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Senha
            </label>
            <input
              className="form-input"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>

          <button className="btn-submit" type='button' onClick={() => window.location.replace('/home')}>
            Entrar
          </button>
        </form>

        <div className="divider-container">
          <div className="divider"></div>
          <div className="divider-text">OU</div>
          <div className="divider"></div>
        </div>

        <button className="btn-facebook">Entrar com Facebook</button>

        <div className="forgot-password-container">
          <a className="forgot-password-link" href="">
            Esqueceu a senha?
          </a>
        </div>
      </div>
    </main>
  )
}