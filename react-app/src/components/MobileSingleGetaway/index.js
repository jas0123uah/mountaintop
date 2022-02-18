import { NavLink} from 'react-router-dom';
import {getAmenitiesObjectForGetaway, getAverageReviewRating, getGetawayImagesArray} from '../../utils/helperFunctions'
import Carousel from 'react-gallery-carousel';
//import { AmenityListing } from 
export const MobileSingleGetawaySearchOrBrowseResult = ({getaway}) => {
  const images = getGetawayImagesArray(getaway)
  const averageRatingAndReviews= getAverageReviewRating(getaway)
  const amenitiesObject = getAmenitiesObjectForGetaway(getaway)
  const guestOrGuests = getaway.numGuests>1 ? "guests":"guest"
  const bedroomOrBedrooms = getaway.numBedrooms>1 ? "bedrooms":"bedroom"
  const bedOrBeds = getaway.numBeds>1 ? "beds":"bed"
  const bathOrBaths = getaway.numBaths>1 ? "baths":"bath"
    return(
    <div className="singleResult" data-patio={amenitiesObject.Patio} data-kitchen={amenitiesObject.Kitchen} data-fireplace={amenitiesObject.Fireplace} data-hottub={amenitiesObject.HotTub} data-wifi={amenitiesObject.Wifi}>
          <Carousel images={images} hasSizeButton={false} hasMediaButton={false} style={{ height: 360 }} />
          <div className="singleResultInfo">
          <NavLink to={`/getaways/${getaway.id}`} exact={true} activeClassName='active'>
          <span>{getaway.name}</span>
          </NavLink>
          <span> {`$${getaway.price}/night`} </span>
          </div>
        </div>)

}
