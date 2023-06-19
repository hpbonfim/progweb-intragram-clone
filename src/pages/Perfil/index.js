import React from 'react'
import './perfil.css'
import {useNavigate} from 'react-router-dom';
import {HiHome} from 'react-icons/hi';
import {MdExplore} from 'react-icons/md';
import {BsFilePlay} from 'react-icons/bs';
import {BiMessageSquareDetail} from 'react-icons/bi';


const icon_styling = {margin: "10px",}
export function Perfil() {

  const navigate = useNavigate();
    const handleClickHome = () => {
        navigate('/home', {replace: true})
    }
    const handleClickExplore = () => {
        navigate('/explore', {replace: true})
    }
    const handleClickProfile = () => {
        navigate('/perfil', {replace: true})
    }
    const handleClickMessages = () => {
        navigate('/messages', {replace: true})
    }

  return (
    <div>
      <nav id="sidebar">
        <div id="logo-container">
          <img id="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
            alt="Instagram" />
        </div>
        <ul id="sidebar-list">
          <li id="homePage" onClick={handleClickHome}><HiHome size="28" style={icon_styling} /><strong> Página Inicial</strong></li>
          <li id="explorePage" onClick={handleClickExplore}><MdExplore size="28" style={icon_styling} /> Explorar</li>
          <li><BsFilePlay size="28" style={icon_styling} /> Reels</li>
          <li onClick={handleClickMessages}><BiMessageSquareDetail size="28" style={icon_styling} /> Mensagens</li>
          <li id="profilePage" onClick={handleClickProfile}><img id="img-list-profile" src="https://picsum.photos/2000" style={icon_styling} /> Perfil</li>
        </ul>
      </nav>

      <hr id="line-separator" />

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