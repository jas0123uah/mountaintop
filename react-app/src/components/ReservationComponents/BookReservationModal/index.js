import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import {useSelector } from "react-redux";
import LoginFormModal from '../../LoginFormModal';

import {BookReservationModalForm} from './BookReservationModalForm'
function BookReservationModal() {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector(state => state.session.user);
  const bookingButton= <BookReservationModalForm/>
  const buttonToDisplay = user ? bookingButton: <LoginFormModal/>

  return (
    <>
    {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <BookReservationModalForm />
        </Modal>
      )}
    {buttonToDisplay}
    
      
    </>
  );
}

export default BookReservationModal;
