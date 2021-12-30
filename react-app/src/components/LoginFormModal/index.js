import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginModalForm from './LoginModalForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    
      <i class="fa fa-sign-in fa-3x" onClick={() => {setShowModal(true);}}></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginModalForm />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
