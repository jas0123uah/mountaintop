import React from 'react';
import 'react-gallery-carousel/dist/index.css';
import { useSelector } from "react-redux";
import {  useParams } from 'react-router-dom';
import {AmenityListing} from '../AmenityListing'
import {getAverageReviewRating, getAmenitiesObjectForGetaway } from '../../utils/helperFunctions'
const SingleGetawayInfo = () => {
    const getawaysObject = useSelector(state => state.getaways);
    const { getawayId }  = useParams();
    
    const currentGetaway = getawaysObject[getawayId];

  const averageRatingAndReviews= getAverageReviewRating(currentGetaway)
  const amenitiesObject = getAmenitiesObjectForGetaway(currentGetaway)
  const guestOrGuests = currentGetaway.numGuests>1 ? "guests":"guest"
  const bedroomOrBedrooms = currentGetaway.numBedrooms>1 ? "bedrooms":"bedroom"
  const bedOrBeds = currentGetaway.numBeds>1 ? "beds":"bed"
  const bathOrBaths = currentGetaway.numBaths>1 ? "baths":"bath"
    
    

  return (
    <div className="info">
        <h2>{currentGetaway.name}</h2>

        <h3>{`${currentGetaway.numGuests} ${guestOrGuests} | ${currentGetaway.numBedrooms} ${bedroomOrBedrooms} | ${currentGetaway.numBeds} ${bedOrBeds} | ${currentGetaway.numBaths} ${bathOrBaths}`}</h3>
        {/* <div>
        <span>{`Hosted by ${currentGetaway.hostFirstName}`}</span>
        <img className="singleGetawayPageProfilePicture" src={`${currentGetaway.hostProfilePicture}`} alt="Getaway Host" />

        </div> */}
        <h3>{Object.entries(amenitiesObject).map( amenity => {
            return(<AmenityListing amenity={amenity}/>)
          })}</h3>
          <h4> <i class="fas fa-star"></i> {`${averageRatingAndReviews[0]} (${averageRatingAndReviews[1]} reviews) |`} <i class="fas fa-map-marker-alt"></i> {`${currentGetaway.city}, ${currentGetaway.state} | $${currentGetaway.price}/night`} </h4>
        <div class="getawayDescription">{`${currentGetaway.description}`}</div>
        <div>
        <span>{`Hosted by ${currentGetaway.hostFirstName}`}</span>
        <img className="singleGetawayPageProfilePicture" src={`${currentGetaway.hostProfilePicture}`} alt="Getaway Host" />
        </div>

    </div>
  );
};

export default SingleGetawayInfo;
