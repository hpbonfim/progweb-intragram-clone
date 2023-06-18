import React, { useState } from 'react';

const CommentForm = ({ addComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== '') {
      addComment(comment);
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite um comentário"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Adicionar Comentário</button>
    </form>
  );
};

export default CommentForm;
