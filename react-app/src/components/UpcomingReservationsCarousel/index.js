import React from 'react';
import { useSelector} from 'react-redux';


import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
export const UpcomingUserReservationsCarousel = () => {
  const user = useSelector(state => state.session.user);
  const getaways = useSelector(state => state?.getaways);
  const currentDate = new Date()
  const userReservations = Object.values(user?.reservations)
  const upcomingReservations = userReservations.filter(reservation => new Date(reservation.endDate) > currentDate)
const goodImages = upcomingReservations.find((reservation) =>{Object.values((getaways[reservation.getawayId].images))[0].url.includes("w=720")})

  return (
      <>
    <Carousel isAutoPlaying={true} images={goodImages} style={{ height: 620, width: 800 }} autoPlayInterval={3500} />
    </>)}
