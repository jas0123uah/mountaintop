import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink} from 'react-router-dom';
import {deleteReservation} from '../../../store/session'
import {deleteGetaway } from '../../../store/getaways'
import {getImageByNumber} from '../../../utils/helperFunctions'
export const AllUserGetaways = () => {
 const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const user = useSelector(state => state.session.user);
  const handleDeleteGetaway = (getawayId) => {
    dispatch(deleteGetaway(getawayId)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) return setErrors(data.errors);
      }
    );
  
  }
  
  const userGetaways = Object.values(user?.getaways)

  const handleDeleteReservation =(reservationId) => {
      dispatch(deleteReservation(reservationId)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
    window.location.reload();
  }

  

  return(
      <>
      <div className="maybe2">
        {userGetaways?.map((getaway) =><div key={getaway?.id} className="singleGetawayHost">
            <h2 className="reservationsGetawayHeader">{getaway?.name}</h2>
            <NavLink to={`/getaways/${getaway?.id}`}>
            

            <img className="upcomingGetawayImage" id="host-getaway-images" alt="getaway" src={getImageByNumber(Object.values(getaway.images), 1)?.url}></img>

            </NavLink>
            <br></br>
            
            <div id="deleteReservationForm">

            <form onSubmit={ (getaway) =>{handleDeleteReservation(getaway.currentTarget.dataset.id)}} data-id={getaway.id} id="deleteReservationFormChild">
                
                <NavLink to={`/getaways/${getaway.id}/edit`}><button className="viewGetawayButton edit-getaway-button">Edit Getaway</button></NavLink>
                </form>
                <form id="deleteGetawayForm" className="in-line-delete" onSubmit={(item) =>{
                  handleDeleteGetaway(item.currentTarget.dataset.id);}} data-id={getaway.id}>
            <button className="DeleteButton delete-getaway-button"type="submit" id="deleteGetaway">Delete Getaway</button>
          </form>
            </div>
        </div>)}
      </div>
      </>
  )
}
