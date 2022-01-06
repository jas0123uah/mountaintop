import { NavLink } from "react-router-dom"
import {deleteReservation} from '../../store/session'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
export const SinglePreviousReservation = ({reservation, getaways}) =>{
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();
    const handleDeleteReservation =(reservationId) => {
      dispatch(deleteReservation(reservationId)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
    window.location.reload();
  }
    return (<div key={reservation?.id}>
            <h2 className="reservationsGetawayHeader">{getaways[reservation?.getawayId]?.name}</h2>
            <img className="upcomingGetawayImage" src={Object.values((getaways[reservation?.getawayId]?.images))[0].url}></img>
            <br></br>
            <span classname="reservationDates">{`Check-in date: ${[reservation.startDate.split(" ")[2]+ " "+ reservation?.startDate.split(" ")[1]+", "+ reservation?.startDate.split(" ")[3]]}`}</span>
            

            
            <span classname="reservationDates">{`Check-out date: ${[reservation.endDate.split(" ")[2]+ " "+ reservation.endDate.split(" ")[1]+", "+ reservation.endDate.split(" ")[3]]}`}</span>
            <div id="deleteReservationForm">

            <form onSubmit={ (reservation) =>{handleDeleteReservation(reservation.currentTarget.dataset.id)}} data-id={reservation.id} id="deleteReservationFormChild">
                
                <NavLink to={`/getaways/${getaways[reservation.getawayId].id}`}><button className="viewGetawayButton">View Getaway</button></NavLink>
            </form>
            </div>
        </div>)
}
