import { NavLink } from "react-router-dom"
import React from 'react';
import NewReviewFormModal from "../../ReviewComponents/MappedReviews/NewReviewModal"
import EditReviewFormModal from "../../ReviewComponents/EditReviewModal"
import {DeleteReviewButton} from '../../ReviewComponents/DeleteReviewButton'
import { getImageByNumber } from "../../../utils/helperFunctions";
export const SinglePreviousReservation = ({reservation, getaways}) =>{
    return (<div  key={reservation?.id} className="previousReservation">
            <h2 className="reservationsGetawayHeader">{getaways[reservation?.getawayId]?.name}</h2>
            <NavLink to={`/getaways/${getaways[reservation.getawayId].id}`}>

                

            <img className="upcomingGetawayImage" src={getImageByNumber(Object.values((getaways[reservation?.getawayId]?.images)),1)?.url}></img>

            </NavLink>
            <br></br>
            <div className="reservationDatesContainer">
            <span classname="reservationDates">{`Check-in date: ${[reservation.startDate.split(" ")[2]+ " "+ reservation?.startDate.split(" ")[1]+", "+ reservation?.startDate.split(" ")[3]]}`}</span>
            <span classname="reservationDates">{`Check-out date: ${[reservation.endDate.split(" ")[2]+ " "+ reservation.endDate.split(" ")[1]+", "+ reservation.endDate.split(" ")[3]]}`}</span>




            </div>
            <div id="deleteReservationForm">
            {reservation.reviewId ? <EditReviewFormModal reservationId={reservation.id} getawayId={reservation.getawayId} reviewId={reservation.reviewId}/> : <NewReviewFormModal reservationId={reservation.id} getawayId={reservation.getawayId}/>}




            <DeleteReviewButton reservation={reservation}/>
    
            </div>
        </div>)
}
