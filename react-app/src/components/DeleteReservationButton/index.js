import {deleteReservation} from '../../store/session'
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect , useHistory, useParams } from 'react-router-dom';
import {loadGetaways} from '../../store/getaways'
import {authenticate} from '../../store/session'
export const DeleteReservationButton = (item) =>{
  const user = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);
  const userId = user?.id
  const history = useHistory();
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
