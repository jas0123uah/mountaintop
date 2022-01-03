import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink, Link } from 'react-router-dom';
import {deleteReservation} from '../../store/session'
import {createGetaway, deleteGetaway } from '../../store/getaways'
export const AllUserGetaways = () => {
 const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const user = useSelector(state => state.session.user);
  const getaways = useSelector(state => state?.getaways);
  const userId = user?.id
  const numUserGetaways = Object.values(user?.getaways).length - 1 ;

  const handleDeleteGetaway = (getawayId) => {
    console.log(getawayId);
    console.log("LOOK");
    dispatch(deleteGetaway(getawayId)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) return setErrors(data.errors);
      }
    );
    //window.location.reload();
  
  }

  


  const userGetaways = Object.values(user?.getaways)
  //console.log(userGetaways, "Look AT RGW ");
  const userGetawaysAsObj = user?.getaways
  const currentDate = new Date()
  const userReservations = Object.values(user?.reservations)
let pastUserReservations = userReservations.filter(reservation => new Date(reservation.startDate) < currentDate && new Date(reservation.endDate) < currentDate)
pastUserReservations = Object.values(pastUserReservations)
  //console.log(pastUserReservations)
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
        {userGetaways?.map((getaway) =><div key={getaway?.id}>
            <h2 className="reservationsGetawayHeader">{getaway?.name}</h2>
            <img className="upcomingGetawayImage" id="host-getaway-images" src={Object.values(getaway.images)[0].url}></img>
            <br></br>
            
            <div id="deleteReservationForm">

            <form onSubmit={ (getaway) =>{handleDeleteReservation(getaway.currentTarget.dataset.id)}} data-id={getaway.id} id="deleteReservationFormChild">
            
                
                <NavLink to={`/getaways/${getaway.id}/edit`}><button className="viewGetawayButton">Edit Getaway</button></NavLink>
                </form>


                <form id="deleteGetawayForm" className="in-line-delete" onSubmit={(item) =>{
                  console.log("HI")
                  console.log(item.currentTarget.dataset.id)
                  handleDeleteGetaway(item.currentTarget.dataset.id);}} data-id={getaway.id}>
            <button className="DeleteButton"type="submit" id="deleteGetaway">Delete Getaway</button>
          </form>
                





                {/* {userGetaways.map(getaway => <form id="deleteGetawayForm" className="in-line-delete" onSubmit={(item) =>{handleDeleteGetaway(item.currentTarget.dataset.id)}} data-id={getaway.id}>
            <button className="DeleteButton"type="submit" id="deleteGetaway">Delete Getaway</button>
          </form>)} */}
            </div>
        </div>)}
      </div>
      </>
  )
}
