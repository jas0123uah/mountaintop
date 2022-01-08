import { NavLink} from 'react-router-dom';
import {getAmenitiesObjectForGetaway} from '../../utils/helperFunctions'
export const SingleGetawaySearchOrBrowseResult = ({getaway}) => {
  const amenitiesObject = getAmenitiesObjectForGetaway(getaway)
    return(
    <div className="singleResult" data-patio={amenitiesObject.Patio} data-kitchen={amenitiesObject.Kitchen} data-fireplace={amenitiesObject.Fireplace} data-hottub={amenitiesObject.HotTub} data-wifi={amenitiesObject.Wifi}>
          <img className="singleResultImage" src={`${Object.values(getaway.images)[0].url}`} alt="" />
          <div className="singleResultInfo">
          <NavLink to={`/getaways/${getaway.id}`} exact={true} activeClassName='active'>
          <h1>{getaway.name}</h1>
          </NavLink>
          <h3>{`${getaway.numGuests} guests | ${getaway.numBedrooms} bedrooms | ${getaway.numBeds} beds | ${getaway.numBaths} baths`}</h3>
          <h4> {`$${getaway.price}/night`}</h4>
          </div>
        </div>)

}
