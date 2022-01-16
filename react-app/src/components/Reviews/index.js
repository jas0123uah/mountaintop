import { NewReservation } from "../BookReservationForm"
import CarouselSingleGetaway from '../CarouselSingleGetaway'
import SingleGetawayInfo from '../SingleGetawayInfo'
import BookReservationModal from '../BookReservationModal'
import {NewBookRes} from '../NewBookRes'
import { useSelector } from "react-redux";
import {  useParams } from 'react-router-dom';
import {getGetawayImagesArray} from '../../utils/helperFunctions'
import { getAverageReviewRating, getReviewObjects } from "../../utils/helperFunctions"
export const Reviews = () => {

    const getawaysObject = useSelector(state => state.getaways);
    const user = useSelector(state => state.session.user);
    const userId = user?.id

    const { getawayId }  = useParams();
    const currentGetaway = getawaysObject[getawayId];
    const guestOrGuests = currentGetaway.numGuests>1 ? "guests":"guest"

    const imagesArray = getGetawayImagesArray(currentGetaway)
    const averageRatingAndReviews= getAverageReviewRating(currentGetaway)
    const [averageRating,numReviews,averageCleanliness, averageCommunication, averagecheckIn, averageAccuracy, averageLocation, averageValue] = averageRatingAndReviews
    const reviews = getReviewObjects(userId, currentGetaway)
    return (
        <div className="revContainer">
        <h2>
        <i class="fas fa-star"></i> {`${averageRating} | ${numReviews} reviews`}
        </h2>
        <div className="ratings-grid">
            <div className="rating-container">
                <span className="rating-category">Cleanliness</span>
                <div className="rating-meter-container">
                    <meter className="rating-meter" min="0" max="5" value={averageCleanliness}></meter>
                    <span className="rating-num">{averageCleanliness}</span>
                </div>
            </div>
            <div className="rating-container">
                <span className="rating-category">Accuracy</span>
                <div className="rating-meter-container">
                    <meter className="rating-meter" min="0" max="5" value={averageAccuracy}></meter>
                    <span className="rating-num">{averageAccuracy}</span>
                </div>
            </div>
            <div className="rating-container">
                <span className="rating-category">Communication</span>
                <div className="rating-meter-container">
                    <meter className="rating-meter" min="0" max="5" value={averageCommunication}></meter>
                    <span className="rating-num">{averageCommunication}</span>
                </div>
            </div>
            <div className="rating-container">
                <span className="rating-category">Location</span>
                <div className="rating-meter-container">
                    <meter className="rating-meter" min="0" max="5" value={averageLocation}></meter>
                    <span className="rating-num">{averageLocation}</span>
                </div>
            </div>
            <div className="rating-container">
                <span className="rating-category">Check-in</span>
                <div className="rating-meter-container">
                    <meter className="rating-meter" min="0" max="5" value={averagecheckIn}></meter>
                    <span className="rating-num">{averagecheckIn}</span>
                </div>
            </div>
            <div className="rating-container">
                <span className="rating-category">Value</span>
                <div className="rating-meter-container">
                    <meter className="rating-meter" min="0" max="5" value={averageValue}></meter>
                    <span className="rating-num">{averageValue}</span>
                </div>
            </div>
            


        </div>
        <div className="reviewTexts">
                
                {reviews.map((review, idx) => {
                    return(
                    <div className="single-review" index={idx}>
                        <div className="single-review-container">
                            <div className="details">

                            <div className="reviewer">
                                <img src={review.userProfilePicture} className="reviewPfp" alt="" />
                            </div>
                            <div className="reviewerNameAndDate">
                                <h5 className="reviewerName">{review.userFirstName}</h5>
                                <span className="reviewDate">{review.startDate}</span>
                            </div>
                            </div>
                            <div className="review-text">
                                <span className="revText">
                                    {review.reviewText}
                                </span>
                            </div>
                        </div>

                    </div>)})
                }

            </div>
        </div>
    )


}
