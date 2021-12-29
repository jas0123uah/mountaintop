import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink, Link } from 'react-router-dom';
import {deleteReservation} from '../../store/session'

export const PreviousUserReservations = () => {
 const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const user = useSelector(state => state.session.user);
  const getaways = useSelector(state => state?.getaways);
  console.log(getaways, "LOL");
  const userId = user?.id
  const numUserGetaways = Object.values(user?.getaways).length - 1 ;
  const userGetaways = Object.values(user?.getaways)
  const userGetawaysAsObj = user?.getaways
  const currentDate = new Date()
  const userReservations = Object.values(user?.reservations)
  console.log(userReservations, "HELLO")
const pastUserReservations = userReservations.filter(reservation => new Date(reservation.startDate) < currentDate && new Date(reservation.endDate) < currentDate)
  console.log(pastUserReservations)
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
      <div className="pastReservations">
        {pastUserReservations.map((reservation) =><div key={reservation.id} className="singlepastReservation">
            {console.log(getaways, reservation, "DAGDAG", reservation.getawayId)}
            {console.log(getaways[reservation.getawayId], "LOOK")}
            {console.log(Object.values((getaways[reservation.getawayId].images))[0].url,"AGGGGGGGGGGGG" )}
            <h2 className="reservationsGetawayHeader">{getaways[reservation.getawayId]?.name}</h2>
            <img src={Object.values((getaways[reservation.getawayId].images))[0].url}></img>
            <br></br>
            <span classname="reservationDates">{`Check-in date: ${reservation.startDate.split("T")[0]}`}</span>
            <span classname="reservationDates">{`Check-out date: ${reservation.endDate.split("T")[0]}`}</span>
            <div id="deleteReservationForm">

            <form onSubmit={ (reservation) =>{handleDeleteReservation(reservation.currentTarget.dataset.id)}} data-id={reservation.id} id="deleteReservationFormChild">
                
                <NavLink to={`/getaways/${getaways[reservation.getawayId].id}`}><button className="viewGetawayButton">Leave A Review</button></NavLink>
              <button className="DeleteButton"type="submit">Cancel Reservation</button>
            </form>
            </div>
        </div>)}
      </div>
      </>
  )
}
