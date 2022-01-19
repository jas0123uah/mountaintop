import { NavLink } from "react-router-dom"
export const ReviewButton = ({getaways, reservation}) => {
    const NewReview = <NavLink to={`/getaways/${getaways[reservation.getawayId].id}/reservations/${reservation.id}/reviews/new`}><button className="viewGetawayButton">Leave a review</button></NavLink>
    const EditReview = <NavLink to={`/getaways/${getaways[reservation.getawayId].id}/reservations/${reservation.id}/reviews/${reservation.reviewId}/edit`}><button className="viewGetawayButton">Edit Review</button></NavLink>
    return(
<>
{reservation.reviewId != null ? EditReview : NewReview} 
</>)
}
