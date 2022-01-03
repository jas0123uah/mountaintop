import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch, useSelector } from "react-redux";
import LoginFormModal from '../LoginFormModal';

import {BookReservationModalForm} from './BookReservationModalForm'
import { useEffect } from 'react';
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
