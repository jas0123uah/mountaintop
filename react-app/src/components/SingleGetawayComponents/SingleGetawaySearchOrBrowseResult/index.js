import { NavLink} from 'react-router-dom';
import {getAmenitiesObjectForGetaway, getAverageReviewRating, getGetawayImagesArray} from '../../../utils/helperFunctions'
import Carousel from 'react-gallery-carousel';
import { AmenityListing } from '../../AmenityListing';
export const SingleGetawaySearchOrBrowseResult = ({getaway}) => {
  const images = getGetawayImagesArray(getaway)
  const averageRatingAndReviews= getAverageReviewRating(getaway)
  const amenitiesObject = getAmenitiesObjectForGetaway(getaway)
  const guestOrGuests = getaway.numGuests>1 ? "guests":"guest"
  const bedroomOrBedrooms = getaway.numBedrooms>1 ? "bedrooms":"bedroom"
  const bedOrBeds = getaway.numBeds>1 ? "beds":"bed"
  const bathOrBaths = getaway.numBaths>1 ? "baths":"bath"
    return(
    <div className="singleResult" data-patio={amenitiesObject.Patio} data-kitchen={amenitiesObject.Kitchen} data-fireplace={amenitiesObject.Fireplace} data-hottub={amenitiesObject.HotTub} data-wifi={amenitiesObject.Wifi}>
          <Carousel images={images} hasSizeButton={false} hasMediaButton={false} style={{ height: 360, width: 540 }} />
          <div className="singleResultInfo">
          <NavLink to={`/getaways/${getaway.id}`} exact={true} activeClassName='active'>
          <h1>{getaway.name}</h1>
          </NavLink>
          <h3>{`${getaway.numGuests} ${guestOrGuests} | ${getaway.numBedrooms} ${bedroomOrBedrooms} | ${getaway.numBeds} ${bedOrBeds} | ${getaway.numBaths} ${bathOrBaths}`}</h3>
          <h3>{Object.entries(amenitiesObject).map( amenity => {
            return(<AmenityListing amenity={amenity}/>)
          })}</h3>
          <h4> <i class="fas fa-star"></i> {`${averageRatingAndReviews[0]} (${averageRatingAndReviews[1]} reviews) |`} <i class="fas fa-map-marker-alt"></i> {`${getaway.city}, ${getaway.state} | $${getaway.price}/night`} </h4>
          </div>
        </div>)

}
