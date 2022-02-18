
import { useSelector } from "react-redux";
import {  useParams } from 'react-router-dom';
import { getAverageReviewRating, getReviewObjects } from "../../../utils/helperFunctions"
import {AverageReviewsBox} from '../AverageReviewsBox'
import { MappedReviews } from "../MappedReviews";
export const Reviews = () => {
    const getawaysObject = useSelector(state => state.getaways);
    const user = useSelector(state => state.session.user);
    const userId = user?.id
    const { getawayId }  = useParams();
    const currentGetaway = getawaysObject[getawayId];
    const averageRatingAndReviews= getAverageReviewRating(currentGetaway)
    let [averageRating,numReviews,averageCleanliness, averageCommunication, averagecheckIn, averageAccuracy, averageLocation, averageValue] = averageRatingAndReviews
    const reviews = getReviewObjects(userId, currentGetaway)
    
    return (
        <div className="revContainer">
        <h2>
        <i class="fas fa-star"></i> {`${averageRating} | ${numReviews} reviews`}
        </h2>
        
        <AverageReviewsBox averageCleanliness={averageCleanliness} averageAccuracy={averageAccuracy} averageCommunication={averageCommunication} averageLocation={averageLocation} averagecheckIn={averagecheckIn} averageValue={averageValue} average/>

        <MappedReviews reviews={reviews}/>

        </div>
    )


}
