import React, { useState, useEffect } from 'react';
import CommentForm from '../CommentForm/index.js';

const Modal = ({ isOpen }) => {
  const [comments, setComments] = useState([]);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  useEffect(() => {
    if (isOpen) {
      const storedComments = localStorage.getItem('comments');
      if (storedComments) {
        setComments(JSON.parse(storedComments));
      }
    }
  }, [isOpen]);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
        <CommentForm addComment={addComment} />
      </div>
    </div>
  );
};

export default Modal;
