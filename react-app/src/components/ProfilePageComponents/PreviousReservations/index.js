import React from 'react';
import { useSelector } from 'react-redux';
import {SinglePreviousReservation} from '../SinglePreviousReservation'
export const PreviousUserReservations = () => {
  const user = useSelector(state => state.session.user);
  const getaways = useSelector(state => state?.getaways);
  const currentDate = new Date()
  const userReservations = Object.values(user?.reservations)
let pastUserReservations = userReservations.filter(reservation => new Date(reservation.startDate) < currentDate && new Date(reservation.endDate) < currentDate)
pastUserReservations = Object.values(pastUserReservations)
  return(
      <>
      <h1 id="previousReservation">Previous Reservation</h1>
      <div className="maybe2" id="previousReservationsBox">
        {pastUserReservations?.map((reservation) =>
        <SinglePreviousReservation reservation={reservation} getaways={getaways} key ={reservation.id}/>
        )}
      </div>
      </>
  )
}
