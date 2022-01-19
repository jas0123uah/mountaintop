import {getAverageReviewRating} from "../../../utils/helperFunctions"
export const SingleGetawayAvgRevLocAndPrice = ({currentGetaway}) => {
    const averageRatingAndReviews= getAverageReviewRating(currentGetaway)
    return(
        <h4> <i class="fas fa-star"></i> {`${averageRatingAndReviews[0]} (${averageRatingAndReviews[1]} reviews) |`} <i class="fas fa-map-marker-alt"></i> {`${currentGetaway.city}, ${currentGetaway.state} | $${currentGetaway.price}/night`} </h4>
    )

}
