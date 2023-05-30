import React from 'react';
import '../css/explore.css';
import { useState } from 'react';
import {HiHome} from 'react-icons/hi';
import {MdExplore} from 'react-icons/md';
import {BsFilePlay} from 'react-icons/bs';
import {BiMessageSquareDetail, BiComment} from 'react-icons/bi';
import {useNavigate} from 'react-router-dom';

const icon_styling = {margin: "10px",}
export function Explore() {
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
    return (
        <div id="root-div">
            <nav id="sidebar">
                <div id="logo-container">
                    <img id="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
                        alt="Instagram" />
                </div>
                <ul id="sidebar-list">
                    <li onClick={handleClickHome} id="homePage"><HiHome size="28" style={icon_styling} /><strong> Página Inicial</strong></li>
                    <li onClick={handleClickExplore} id="explorePage"><MdExplore size="28" style={icon_styling} /> Explorar</li>
                    <li id="reelsPage"><BsFilePlay size="28" style={icon_styling} /> Reels</li>
                    <li id="dmPage"><BiMessageSquareDetail size="28" style={icon_styling} /> Mensagens</li>
                    <li id="profilePage" onClick={handleClickProfile}><img id="img-list-profile" src="https://picsum.photos/2008" style={icon_styling}/> Perfil</li>
                </ul>
            </nav>

            <hr id="line-separator" />

            <main id="content-section">
                <div id="photo-grid">
                    <div id="photo">
                        <img src="https://picsum.photos/2000" alt="Foto 1" />
                    </div>
                    <div id="photo">
                        <img src="https://picsum.photos/2001" alt="Foto 2" />
                    </div>
                    <div id="photo">
                        <img src="https://picsum.photos/2002" alt="Foto 3" />
                    </div>
                    <div id="photo">
                        <img src="https://picsum.photos/2003" alt="Foto 4" />
                    </div>
                    <div id="photo">
                        <img src="https://picsum.photos/2004" alt="Foto 5" />
                    </div>
                    <div id="photo">
                        <img src="https://picsum.photos/2005" alt="Foto 6" />
                    </div>
                    <div id="photo">
                        <img src="https://picsum.photos/2006" alt="Foto 7" />
                    </div>
                    <div id="photo">
                        <img src="https://picsum.photos/2007" alt="Foto 8" />
                    </div>
                    <div id="photo">
                        <img src="https://picsum.photos/2008" alt="Foto 9" />
                    </div>
                </div>
            </main >
        </div>

    )
}