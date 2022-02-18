import React, { useState } from 'react';
import { Modal } from '../../../../context/Modal';
import {NewReviewForm} from './NewReviewForm';

function NewReviewFormModal({reservationId, getawayId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="viewGetawayButton leave-a-review-button" onClick={() => {setShowModal(true);}}>Leave a review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)} modalClass="revModal">
          <NewReviewForm reservationId={reservationId} getawayId={getawayId} />
        </Modal>
      )}
    </>
  );
}
export default NewReviewFormModal;
