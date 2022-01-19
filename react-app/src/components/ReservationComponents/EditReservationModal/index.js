import React, { useState } from 'react';
import { Modal } from '../../../context/Modal';
import {useSelector } from "react-redux";
import LoginFormModal from '../../LoginFormModal';
import {EditReservationModalForm} from './EditReservationModalForm'
function EditReservationModal() {
  const [showModal, setShowModal] = useState(false);
  const user = useSelector(state => state.session.user);
  const bookingButton= <EditReservationModalForm/>
  const buttonToDisplay = user ? bookingButton: <LoginFormModal/>

  return (
    <>
    {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditReservationModalForm />
        </Modal>
      )}
    {buttonToDisplay}
    
      
    </>
  );
}

export default EditReservationModal;
