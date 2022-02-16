import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpForm from './SignUpForm';

function SignUpFormModal() {
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setisMobile] = useState(window.matchMedia('screen and (min-device-width : 320px) and (max-width : 768px) and (min-device-height : 480px) and (max-device-height : 1076px)'));

  isMobile.addEventListener('change', (e) => {
    setisMobile((window.matchMedia('screen and (min-device-width : 320px) and (max-width : 768px) and (min-device-height : 480px) and (max-device-height : 1076px)')))
  });
  
  const isMobileSignup = isMobile.matches ?<span onClick={() => {setShowModal(true);}} className="mobileSignup" id="mobileSignup">Sign up</span>: <i class="fas fa-user-plus fa-3x" id="sign-up-button" onClick={() => {setShowModal(true);}}></i>

  return (
    <>
      {isMobileSignup}
    
      {/* <i class="fas fa-user-plus fa-3x" id="sign-up-button" onClick={() => {setShowModal(true);}}></i> */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm />
        </Modal>
      )}
    </>
  );
}

export default SignUpFormModal;
