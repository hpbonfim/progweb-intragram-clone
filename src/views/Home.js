import React from 'react';
import '../css/home.css';
import { useState } from 'react';
import {HiHome} from 'react-icons/hi';
import {MdExplore} from 'react-icons/md';
import {BsFilePlay} from 'react-icons/bs';
import {BiMessageSquareDetail, BiComment} from 'react-icons/bi';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import {useNavigate} from 'react-router-dom';



const icon_styling = {margin: "10px",}
export function Home() {
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
    const [likeBtn, setLikeBtn] = useState(false);
    return (
        <div id="root-div">
            <nav id="sidebar">
                <div id="logo-container">
                    <img id="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"
                        alt="Instagram" />
                </div>
                <ul id="sidebar-list">
                    <li id="homePage" onClick={handleClickHome}><HiHome size="28" style={icon_styling}/><strong> Página Inicial</strong></li>
                    <li id="explorePage" onClick={handleClickExplore}><MdExplore size="28" style={icon_styling}/> Explorar</li>
                    <li><BsFilePlay size="28" style={icon_styling}/> Reels</li>
                    <li><BiMessageSquareDetail size="28" style={icon_styling}/> Mensagens</li>
                    <li id="profilePage" onClick={handleClickProfile}><img id="img-list-profile" src="https://picsum.photos/2008" style={icon_styling}/> Perfil</li>
                </ul>
            </nav>

            <hr id="line-separator"/>

                <main id="content-section">
                    <section id="feed-section">
                        <ul id="feed">
                            <li id="feed-post">
                                <p id="post-header"><img id="profile-pic" src="https://picsum.photos/2000" /> maria.antonieta </p>
                                <div id="feed-image-container">
                                    <img src="https://picsum.photos/2001" />
                                </div>
                                <div id="post-interaction-icons">
                                    {!likeBtn ? <AiOutlineHeart size="18" style={icon_styling}/> : <AiFillHeart/>} <BiComment size="18" style={icon_styling}/>
                                </div>
                                <div id="description">
                                    <div id="like-description">
                                        <p id="like-counter">0</p>
                                        <p id="like-label">curtidas</p>
                                    </div>

                                    <div id="comment-description">
                                        <p id="comment-profile">antonio.carlos</p>: <p id="comment-content"> Gostei!</p>
                                    </div>
                                </div>
                            </li>
                            <li id="feed-post">
                                <p id="post-header">
                                    <img id="profile-pic" src="https://picsum.photos/2003" /> angela.carla
                                </p>
                                <div id="feed-image-container">
                                    <img src="https://picsum.photos/2004" />
                                </div>
                                <div id="post-interaction-icons">
                                    {!likeBtn ? <AiOutlineHeart size="18" style={icon_styling}/> : <AiFillHeart/>} <BiComment size="18" style={icon_styling}/>
                                </div>

                                <div id="description">
                                    <div id="like-description">
                                        <p id="like-counter">0</p>
                                        <p id="like-label">curtidas</p>
                                    </div>

                                    <div id="comment-description">
                                        <p id="comment-profile">adalberto_campos</p>: <p id="comment-content"> Olosco! Me leva tambem!</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </section>
                </main>
        </div>
    )
}