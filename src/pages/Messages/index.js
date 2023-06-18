import { useState } from 'react';
import {
    BiX,
    BiHomeAlt,
    BiSearch,
    BiMoviePlay,
    BiChevronDown,
    BiEdit,
    BiPhone,
    BiVideo,
    BiMicrophone
} from 'react-icons/bi';
import {
    RiMessengerLine,
    RiInstagramLine,
    RiInformationLine,
    RiEmotionHappyLine,
    RiImageLine,
    RiHeartLine
} from 'react-icons/ri';

import "./messages.css"

export function Messages() {
    const [isNewMessageOpen, setIsNewMessageOpen] = useState(false);
    const [isChatActive, setIsChatActive] = useState(false);

    const handleClick = type => {
        if (type === 'newMessage') setIsNewMessageOpen(current => !current);
        if (type === 'chat') setIsChatActive(current => !current);
    };

    return (
        <section className="body-section">
            <section
                className="new-message-screen"
                style={{ display: isNewMessageOpen ? 'flex' : 'none' }}
            >
                <section className="new-message-window">
                    <section className="new-message-close">
                        <section className="aux" />

                        <section className="new-message-title">
                            <h1>New message</h1>
                        </section>

                        <section className="new-message-x-close">
                            <BiX onClick={() => handleClick('newMessage')} />
                        </section>
                    </section>

                    <section className="new-message-search-input">
                        <h4>For:</h4>

                        <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Search..."
                        />
                    </section>

                    <section className="new-message-results">
                        <ul>
                            <li>No accounts found.</li>
                        </ul>

                        <section className="new-message-chat-button">
                            Chat
                        </section>
                    </section>
                </section>
            </section>

            <aside id="sidebar">
                <nav>
                    <section id="instagram-logo" className="icon">
                        <RiInstagramLine />
                    </section>

                    <ul id="sidebar-list">
                        <li className="icon">
                            <BiHomeAlt />
                        </li>

                        <li className="icon">
                            <BiSearch />
                        </li>

                        <li className="icon">
                            <BiMoviePlay />
                        </li>

                        <li className="icon">
                            <RiMessengerLine
                                onClick={() => handleClick('chat')}
                            />
                        </li>

                        <li>
                            <img
                                className="icon profile-picture"
                                src="https://picsum.photos/seed/1/200"
                                alt="Profile"
                            />
                        </li>
                    </ul>
                </nav>
            </aside>

            <main id="content-section">
                <aside>
                    <section className="head">
                        <section>
                            <h1>user_name</h1>
                            <BiChevronDown fontSize={'1.5rem'} />
                        </section>

                        <BiEdit
                            className="icon"
                            onClick={() => handleClick('newMessage')}
                        />
                    </section>

                    <section className="title-request">
                        <h1>Messages</h1>
                        <h5>Requests</h5>
                    </section>

                    <nav className="messages">
                        <ul>
                            <li
                                className="message-chat"
                                onClick={() => handleClick('chat')}
                            >
                                <img
                                    className="profile-picture message-picture"
                                    src="https://picsum.photos/seed/4/200"
                                    alt="Profile picture"
                                />

                                <section className="name-status">
                                    <h4>Name</h4>
                                    <p>statuasdfasdfsdfs</p>
                                </section>
                            </li>
                        </ul>
                    </nav>
                </aside>

                <section className="new-chat-messages">
                    <section
                        className="new-chat"
                        style={{ display: isChatActive ? 'none' : 'flex' }}
                    >
                        <section className="messenger-border">
                            <RiMessengerLine className="messenger-chat-icon" />
                        </section>
                        <h3>Your messages</h3>
                        <p>
                            Send photos and private messages to a friend or
                            group
                        </p>
                        <section
                            className="send-message-button"
                            onClick={() => handleClick('newMessage')}
                        >
                            Send message
                        </section>
                    </section>

                    <section
                        className="chat"
                        style={{ display: isChatActive ? 'flex' : 'none' }}
                    >
                        <section className="chat-head">
                            <section className="chat-profile">
                                <img
                                    className="profile-picture message-picture"
                                    src="https://picsum.photos/seed/4/200"
                                    alt="Profile picture"
                                />

                                <section className="name-status">
                                    <h4>Name</h4>
                                    <p>statuasdfasdfsdfs</p>
                                </section>
                            </section>

                            <section className="chat-tools">
                                <BiPhone className="icon tool-icon" />
                                <BiVideo className="icon tool-icon" />
                                <RiInformationLine className="icon tool-icon" />
                            </section>
                        </section>

                        <section className="main-chat"></section>

                        <section className="chat-foot">
                            <section className="chat-message-box">
                                <section className="message-input">
                                    <RiEmotionHappyLine className="icon" />

                                    <input
                                        type="text"
                                        placeholder="Message..."
                                    />
                                </section>

                                <section className="message-tools">
                                    <BiMicrophone className="icon tool-icon" />
                                    <RiImageLine className="icon tool-icon" />
                                    <RiHeartLine className="icon tool-icon" />
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </main>
        </section>
    );
};
