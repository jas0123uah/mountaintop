import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { useSelector } from "react-redux";
import {  useParams } from 'react-router-dom';
import { NavLink, useHistory } from 'react-router-dom';
const BrowseGetawaysPage = () => {
    const getawaysObject = useSelector(state => state.getaways);
    const getawaysArray = Object.values(getawaysObject)
    console.log(getawaysArray);

    const { getawayId }  = useParams();
    console.log();
    const currentGetaway = getawaysObject[getawayId];

    
    

  return (
    <div>
      {getawaysArray.map( getaway => {
        return <div className="singleResult">
          <img className="singleResultImage" src={`${Object.values(getaway.images)[0].url}`} alt="" />
          <div className="singleResultInfo">
          <NavLink to={`/getaways/${getaway.id}`} exact={true} activeClassName='active'>
          <h1>{getaway.name}</h1>
          </NavLink>
          <h3>{`${getaway.numGuests} guests | ${getaway.numBedrooms} bedrooms | ${getaway.numBeds} beds | ${getaway.numBaths} baths`}</h3>
          <h4> {`$${getaway.price}/night`}</h4>
          </div>

        </div>
      })}
  
    </div>
    
  );
};

export default BrowseGetawaysPage;
