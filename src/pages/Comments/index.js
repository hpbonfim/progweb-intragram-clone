import React, { useState } from 'react';
import Modal from '../Modal_Content_Messages';

const Comentarios = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Renderizar o modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* Restante do conteúdo do componente */}
    </div>
  );
};

export default Comentarios;