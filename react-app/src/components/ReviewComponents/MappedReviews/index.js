import { getMonthandYear } from "../../../utils/helperFunctions"
export const MappedReviews = ({reviews}) => {
    return (
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
                                <span className="reviewDate">{getMonthandYear(review.startDate)}</span>
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
    )
}
