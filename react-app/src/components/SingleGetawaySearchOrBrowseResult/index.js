import { NavLink} from 'react-router-dom';
export const SingleGetawaySearchOrBrowseResult = ({getaway}) => {
    return(
    <div className="singleResult">
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
