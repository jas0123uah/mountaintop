import React, { useState } from 'react';
import { Modal } from '../../context/Modal';

import {BookReservationModalForm} from './BookReservationModalForm'
function BookReservationModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    
      <button  onClick={() => {setShowModal(true);}}>Book a reservation</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <BookReservationModalForm />
        </Modal>
      )}
    </>
  );
}

export default BookReservationModal;
