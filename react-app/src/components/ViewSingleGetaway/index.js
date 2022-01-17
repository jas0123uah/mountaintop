import {NewBookRes} from '../NewBookRes'
import {EditRes} from '../EditRes'
import {Reviews} from '../Reviews'
import { useSelector } from "react-redux";
import {  useParams, useLocation } from 'react-router-dom';
import {getGetawayImagesArray} from '../../utils/helperFunctions'
import { getAverageReviewRating } from "../../utils/helperFunctions"
export const ViewSingleGetaway = () => {

    const getawaysObject = useSelector(state => state.getaways);
    const { getawayId }  = useParams();
    const currentGetaway = getawaysObject[getawayId];
    const guestOrGuests = currentGetaway.numGuests>1 ? "guests":"guest"

    const imagesArray = getGetawayImagesArray(currentGetaway)
    const averageRatingAndReviews= getAverageReviewRating(currentGetaway)

    const location = useLocation();
    console.log(location, "Location");
    
    
     return(<div className="viewGetawayContainer">
         <div className="listingContainer">
        <h2 className="listingName">{currentGetaway.name}</h2>
        <h4 className="listingSnapshot"> <i class="fas fa-star"></i> {`${averageRatingAndReviews[0]} (${averageRatingAndReviews[1]} reviews)`} <i class="fas fa-map-marker-alt"></i> {`${currentGetaway.city}, ${currentGetaway.state}`} <i class="fas fa-home"></i> {`${currentGetaway.numGuests} ${guestOrGuests}`} </h4>
         </div>
        <div className="containerForPhotosContainer">

        <div className="photosContainer">
            <div >
                <img className="bigPic" src={imagesArray[0].src}></img>
            </div>
            <div className="smallerPics">
                <div className="smallerPicsTop">
                    <img className="smallerPic" src={imagesArray[1].src}></img>
                    <img className="smallerPic" src={imagesArray[2].src}></img>
                </div>
                <div className="smallerPicsBottom">
                    <img className="smallerPic" src={imagesArray[3].src}></img>
                    <img className="smallerPic" src={imagesArray[4].src}></img>
                </div>
            </div>
        </div>

        </div>
         <div className="getaway-info-reservationForm-flex">
        <div className="bookingContainer">
            {location.pathname.includes("/edit")? <EditRes/> :<NewBookRes/>
            }

        </div>
        <>
        <Reviews/>
        </>
         </div>
     </div>)
}
