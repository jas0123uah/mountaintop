import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {NavLink} from 'react-router-dom';
import {deleteReservation} from '../../../store/session'
import {getImageByNumber} from '../../../utils/helperFunctions'
export const UpcomingUserReservations = () => {
 const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const user = useSelector(state => state.session.user);
  const getaways = useSelector(state => state?.getaways);
  const currentDate = new Date()
  const userReservations = Object.values(user?.reservations)
let upcomingReservations = userReservations?.filter(reservation => new Date(reservation.endDate) > currentDate)
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
    <h1>Upcoming Reservations</h1>
    
      <div className="maybe2">
        { upcomingReservations.length ? upcomingReservations?.map((reservation) =><div className="singleRes" key={reservation?.id}>
            <h2 className="reservationsGetawayHeader">{getaways[reservation.getawayId]?.name}</h2>
            <NavLink to={`/getaways/${getaways[reservation.getawayId].id}`}>
            <img className="upcomingGetawayImage" src={getImageByNumber(Object.values((getaways[reservation?.getawayId]?.images)),1).url}></img>
            </NavLink>
            <br></br>
            <div className="reservationDatesContainer">


            <span classname="reservationDates">{`Check-in date: ${[reservation?.startDate?.split(" ")[2]+ " "+ reservation?.startDate.split(" ")[1]+", "+ reservation?.startDate.split(" ")[3]]}`}</span>
            <span classname="reservationDates">{`Check-out date: ${[reservation.endDate.split(" ")[2]+ " "+ reservation.endDate.split(" ")[1]+", "+ reservation.endDate.split(" ")[3]]}`}</span>

            </div>

            <form onSubmit={ (reservation) =>{handleDeleteReservation(reservation.currentTarget.dataset.id)}} data-id={reservation.id} id="deleteReservationForm">
           
                <NavLink to={`/getaways/${getaways[reservation.getawayId].id}/reservations/${reservation.id}/edit`}><button className="viewGetawayButton edit-reservation-button">Edit Reservation</button></NavLink>
              <button className="DeleteButton cancel-reservation-button"type="submit">Cancel Reservation</button>
            </form>
            
        </div>) : <h1 className="NoReservations">No upcoming reservations</h1>}
      </div>
    
    
    
    </>
  )
}
