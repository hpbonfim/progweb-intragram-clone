import React from 'react'
import './perfil.css'

export function Perfil() {
  return (
    <div>
      <header>
        <div className="container">
          <div className="logo-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
              alt="Logo do Instagram"
            />
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <div className="profile-header">
            <div className="profile-picture">
              <img src="https://picsum.photos/2000" alt="Foto do perfil" />
            </div>
            <div className="profile-info">
              <h1>fulano_de_tal</h1>
              <br />
              <div className="stats">
                <div className="stat">
                  <span className="number">1.234</span> publicações
                </div>
                <div className="stat">
                  <span className="number">3M</span> seguidores
                </div>
                <div className="stat">
                  <span className="number">555</span> seguindo
                </div>
              </div>
              <div className="bio">
                <code>Só sei que nada sei - Sócrates</code>
              </div>
            </div>
          </div>
          <div className="photo-grid">
            <div className="photo">
              <img src="https://picsum.photos/2000" alt="Foto 1" />
            </div>
            <div className="photo">
              <img src="https://picsum.photos/2000" alt="Foto 2" />
            </div>
            <div className="photo">
              <img src="https://picsum.photos/2000" alt="Foto 3" />
            </div>
            <div className="photo">
              <img src="https://picsum.photos/2000" alt="Foto 4" />
            </div>
            <div className="photo">
              <img src="https://picsum.photos/2000" alt="Foto 5" />
            </div>
            <div className="photo">
              <img src="https://picsum.photos/2000" alt="Foto 6" />
            </div>
            <div className="photo">
              <img src="https://picsum.photos/2000" alt="Foto 7" />
            </div>
            <div className="photo">
              <img src="https://picsum.photos/2000" alt="Foto 8" />
            </div>
            <div className="photo">
              <img src="https://picsum.photos/2000" alt="Foto 9" />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="container">
          <ul>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Ajuda</a>
            </li>
            <li>
              <a href="#">Imprensa</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
            <li>
              <a href="#">Carreiras</a>
            </li>
            <li>
              <a href="#">Privacidade</a>
            </li>
            <li>
              <a href="#">Termos</a>
            </li>
            <li>
              <a href="#">Diretório</a>
            </li>
            <li>
              <a href="#">Língua</a>
            </li>
          </ul>
          <div className="legal">© 2022 Instagram do Facebook</div>
        </div>
      </footer>
    </div>
  )
}