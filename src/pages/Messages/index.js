import { RiMessengerLine, RiEmotionHappyLine } from 'react-icons/ri';
import { Sidebar } from '../../components/sidebar/index.js';
import { useState, useEffect } from 'react';
import { userMessages } from './mock/index';
import './messages.css';

export function Messages() {
    const [activeChat, setActiveChat] = useState();
    const [newMessage, setNewMessage] = useState('');
    const [messagesInfo, setMessagesInfo] = useState([]);

    const handleUserClick = user => setActiveChat(user);

    const handleSendMessageClick = () => {
        if (!activeChat || !newMessage) return;

        activeChat.messages.push({
            isUser: false,
            message: newMessage
        });

        setNewMessage('');

        localStorage.setItem('@messagesInfo', JSON.stringify(messagesInfo));
    };

    const handleSidebarMessagesClick = () => setActiveChat();

    useEffect(() => {
        const loadedMessages = localStorage.getItem('@messagesInfo');

        if (loadedMessages) {
            setMessagesInfo(JSON.parse(loadedMessages));
            return;
        }

        setMessagesInfo(userMessages);

        localStorage.setItem('@messagesInfo', JSON.stringify(userMessages));
    }, []);

    return (
        <section className="body-section">
            <Sidebar
                isMessagePage={true}
                openChat={handleSidebarMessagesClick}
                isShrink={true}
            />

            <main id="content-section">
                <aside>
                    <section className="head">
                        <h1>fulano_de_tal</h1>
                    </section>

                    <section className="title-request">
                        <h1>Messages</h1>
                    </section>

                    <nav className="messages">
                        <ul>
                            {messagesInfo.map(userMessage => (
                                <li
                                    className="message-chat"
                                    onClick={() => handleUserClick(userMessage)}
                                    key={`user-${userMessage.id}`}
                                >
                                    <img
                                        className="profile-picture message-picture"
                                        src={`https://picsum.photos/seed/${userMessage.id}/200`}
                                        alt="Profile picture"
                                    />

                                    <section className="name-status">
                                        <h4>{userMessage.name}</h4>
                                        <p>
                                            {
                                                userMessage.messages.at(-1)
                                                    .message
                                            }
                                        </p>
                                    </section>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>

                <section className="new-chat-messages">
                    {!activeChat && (
                        <section className="new-chat">
                            <section className="messenger-border">
                                <RiMessengerLine className="messenger-chat-icon" />
                            </section>

                            <h3>Your messages</h3>
                            <p>Send private messages to a friend</p>
                        </section>
                    )}

                    {activeChat && (
                        <section className="chat">
                            <section className="chat-head">
                                <section className="chat-profile">
                                    <img
                                        className="profile-picture message-picture"
                                        src={`https://picsum.photos/seed/${activeChat.id}/200`}
                                        alt="Profile picture"
                                    />

                                    <section className="name-status">
                                        <h4>{activeChat.name}</h4>
                                        <p>
                                            Online {activeChat.lastOnline} ago
                                        </p>
                                    </section>
                                </section>
                            </section>

                            <section className="main-chat-father">
                                <section className="main-chat">
                                    {activeChat.messages.map(
                                        ({ isUser, message }, i) => (
                                            <section
                                                key={`user-message-${activeChat.id}-${i}`}
                                                className={`chat-message ${
                                                    isUser ? 'friend' : 'you'
                                                }`}
                                            >
                                                {message}
                                            </section>
                                        )
                                    )}
                                </section>
                            </section>

                            <section className="chat-foot">
                                <section className="chat-message-box">
                                    <input
                                        className="message-input"
                                        type="text"
                                        value={newMessage}
                                        placeholder="Message..."
                                        onChange={event =>
                                            setNewMessage(event.target.value)
                                        }
                                        onKeyDown={event =>
                                            event.key === 'Enter' &&
                                            handleSendMessageClick()
                                        }
                                    />

                                    <button
                                        className="send-button"
                                        onClick={handleSendMessageClick}
                                    >
                                        Send
                                    </button>
                                </section>
                            </section>
                        </section>
                    )}
                </section>
            </main>
        </section>
    );
}
