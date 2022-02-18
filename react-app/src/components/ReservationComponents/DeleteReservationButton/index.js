import {deleteReservation} from '../../../store/session'
import React, { useState } from 'react';
import {useDispatch } from 'react-redux';
import {loadGetaways} from '../../../store/getaways'
import {authenticate} from '../../../store/session'
export const DeleteReservationButton = (item) =>{
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const handleDeleteReservation = async (id) => {
    await dispatch(deleteReservation(id)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
    await dispatch(loadGetaways()).then((res) => dispatch (authenticate()))
      }

  return (
      <form onSubmit={(item) =>handleDeleteReservation(item.currentTarget.dataset.id)} data-id={item.id}>
          Cancel reservation
      </form>
  )

}
