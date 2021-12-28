import {deleteReservation} from '../../store/session'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect , useHistory, useParams } from 'react-router-dom';
export const DeleteReservationButton = (item) =>{
  const user = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);
  const userId = user?.id
  const history = useHistory();
  const dispatch = useDispatch();
  const handleDeleteReservation = async (id) => {
    dispatch(deleteReservation(id)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
    history.push('/profile/')
    window.location.reload()

  }
  return (
      <form onSubmit={(item) =>handleDeleteReservation(item.currentTarget.dataset.id)} data-id={item.id}>
          Cancel reservation
      </form>
  )

}
