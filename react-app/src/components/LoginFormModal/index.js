import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginModalForm from './LoginModalForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className="SignInButton" onClick={() => {setShowModal(true);}} >Sign in</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginModalForm />
        </Modal>
      )}
    </>
  );
}
export default LoginFormModal;
