import { useNavigate } from 'react-router-dom';
import { BiHomeAlt, BiCompass, BiMoviePlay } from 'react-icons/bi';
import { RiMessengerFill, RiInstagramLine } from 'react-icons/ri';
import './index.css';

export function Sidebar({ isMessagePage, openChat, isShrink }) {
    const navigate = useNavigate();

    const handleClickHome = () => navigate('/home', { replace: true });
    const handleClickExplore = () => navigate('/explore', { replace: true });
    const handleClickProfile = () => navigate('/perfil', { replace: true });

    const handleClickMessages = () => {
        if (isMessagePage) {
            openChat();
            return;
        }

        navigate('/messages', { replace: true });
    };

    return (
        <section id="sidebar">
            {isShrink ? (
                <nav>
                    <section id="instagram-logo" className="icon">
                        <RiInstagramLine />
                    </section>

                    <ul id="sidebar-list">
                        <li className="icon">
                            <BiHomeAlt onClick={handleClickHome} />
                        </li>
                        <li className="icon">
                            <BiCompass onClick={handleClickExplore} />
                        </li>
                        <li className="icon">
                            <BiMoviePlay />
                        </li>
                        <li className="icon">
                            <RiMessengerFill onClick={handleClickMessages} />
                        </li>
                        <li>
                            <img
                                className="icon profile-picture"
                                src="https://picsum.photos/seed/1/200"
                                alt="Profile"
                                onClick={handleClickProfile}
                            />
                        </li>
                    </ul>
                </nav>
            ) : (
                <nav>
                    <section id="instagram-logo" className="icon">
                        <RiInstagramLine />
                    </section>

                    <ul id="sidebar-list">
                        <li className="icon">
                            <BiHomeAlt onClick={handleClickHome} />
                        </li>
                        <li className="icon">
                            <BiCompass onClick={handleClickExplore} />
                        </li>
                        <li className="icon">
                            <BiMoviePlay />
                        </li>
                        <li className="icon">
                            <RiMessengerFill onClick={handleClickMessages} />
                        </li>
                        <li>
                            <img
                                className="icon profile-picture"
                                src="https://picsum.photos/seed/1/200"
                                alt="Profile"
                                onClick={handleClickProfile}
                            />
                        </li>
                    </ul>
                </nav>
            )}
        </section>
    );
}
