import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink, Link } from 'react-router-dom';
import {deleteReservation} from '../../store/session'


import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import {  useParams } from 'react-router-dom';

export const UpcomingUserReservationsCarousel = () => {
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


  const upcomingReservations = userReservations.filter(reservation => new Date(reservation.endDate) > currentDate)
  console.log(upcomingReservations)
  const handleDeleteReservation =(reservationId) => {
      dispatch(deleteReservation(reservationId)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
    window.location.reload();
  }
console.log(upcomingReservations, "Line 36 Upcoming reservations")
const goodImages = upcomingReservations.find((reservation) =>{Object.values((getaways[reservation.getawayId].images))[0].url.includes("w=720")})
console.log(goodImages, "LINE 37");

  return (
      <>
    <Carousel isAutoPlaying={true} images={goodImages} style={{ height: 620, width: 800 }} autoPlayInterval={3500} />
    </>)}
