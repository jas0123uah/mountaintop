import { get } from 'jquery';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink, Link } from 'react-router-dom';
import {deleteReservation} from '../../store/session'

export const UpcomingUserReservations = () => {
 const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const user = useSelector(state => state.session.user);
  const getaways = useSelector(state => state?.getaways);
  //console.log(getaways, "LOL");
  const userId = user?.id
  const numUserGetaways = Object.values(user?.getaways).length - 1 ;
  const userGetaways = Object.values(user?.getaways)
  const userGetawaysAsObj = user?.getaways
  console.log(userGetawaysAsObj)
  const currentDate = new Date()
  const userReservations = Object.values(user?.reservations)
  // console.log(userGetaways, "YYYYYYYYYYYYYYYYYYYYYY")

  //let newuserGetaways = userGetaways.map(getaway => {getaway.upladed})
//   const pastUserReservations = userReservations.filter(reservation => new Date(reservation.startDate) < currentDate && new Date(reservation.endDate) < currentDate)
//console.log(userReservations, "ALL USER RESERVATIONS")
let upcomingReservations = userReservations?.filter(reservation => new Date(reservation.endDate) > currentDate)
  //console.log(upcomingReservations, "UPCOMING")
  //console.log(upcomingReservations, "UP COMINGGGGGGGGGGGGGGGGGGGGGG")
  //upcomingReservations = Object.values(upcomingReservations)
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
      {console.log(upcomingReservations, "UPCOMING LINE 43")}
        {upcomingReservations?.map((reservation) =><div key={reservation?.id}>
            

            

            <h2 className="reservationsGetawayHeader">{getaways[reservation.getawayId]?.name}</h2>
            <img className="upcomingGetawayImage" src={Object.values((getaways[reservation?.getawayId]?.images))[0].url}></img>
            <br></br>
            <span classname="reservationDates">{`Check-in date: ${[reservation?.startDate?.split(" ")[2]+ " "+ reservation?.startDate.split(" ")[1]+", "+ reservation?.startDate.split(" ")[3]]}`}</span>
            <span classname="reservationDates">{`Check-out date: ${[reservation.endDate.split(" ")[2]+ " "+ reservation.endDate.split(" ")[1]+", "+ reservation.endDate.split(" ")[3]]}`}</span>
            <div id="deleteReservationForm">

            <form onSubmit={ (reservation) =>{handleDeleteReservation(reservation.currentTarget.dataset.id)}} data-id={reservation.id} id="deleteReservationFormChild">
           
                <NavLink to={`/getaways/${getaways[reservation.getawayId].id}/reservations/${reservation.id}/edit`}><button className="viewGetawayButton">Edit Reservation</button></NavLink>
              <button className="DeleteButton"type="submit">Cancel Reservation</button>
            </form>




            

            


            
            </div>
        </div>)}
      </>
  )
}
