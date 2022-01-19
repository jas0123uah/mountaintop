import { AmenityListing } from "../../AmenityComponents/AmenityListing"
import {getAmenitiesObjectForGetaway} from '../../../utils/helperFunctions'
export const SingleGetawayAmenitiesHeading = ({currentGetaway}) => {
    const amenitiesObject = getAmenitiesObjectForGetaway(currentGetaway)
    return (
        <h3>{Object.entries(amenitiesObject).map( amenity => {
            return(<AmenityListing amenity={amenity}/>)
          })}</h3>
    )
}
