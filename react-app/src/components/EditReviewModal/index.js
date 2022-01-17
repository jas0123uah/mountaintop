import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import {EditReviewForm} from './EditReviewForm';

function EditReviewFormModal({reservationId, getawayId, reviewId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    
      <button className="viewGetawayButton" onClick={() => {setShowModal(true);}}>Edit Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} modalClass="revModal">
          <EditReviewForm reservationId={reservationId} getawayId={getawayId} reviewId={reviewId} />
        </Modal>
      )}
    </>
  );
}

export default EditReviewFormModal;
