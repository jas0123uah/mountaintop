import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginModalForm from './LoginModalForm';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setisMobile] = useState(window.matchMedia('screen and (min-device-width : 320px) and (max-width : 768px) and (min-device-height : 480px) and (max-device-height : 1076px)'));

  isMobile.addEventListener('change', (e) => {
    setisMobile((window.matchMedia('screen and (min-device-width : 320px) and (max-width : 768px) and (min-device-height : 480px) and (max-device-height : 1076px)')))
  });
  
  const isMobileSignin = <span onClick={() => {setShowModal(true);}} className="mobileSignin" id="mobileSignin">Sign in</span>
  return (
    <>
      {isMobileSignin}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginModalForm />
        </Modal>
      )}
    </>
  );
}
export default LoginFormModal;
