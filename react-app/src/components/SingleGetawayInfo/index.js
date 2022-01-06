import React from 'react';
import 'react-gallery-carousel/dist/index.css';
import { useSelector } from "react-redux";
import {  useParams } from 'react-router-dom';
const SingleGetawayInfo = () => {
    const getawaysObject = useSelector(state => state.getaways);
    const { getawayId }  = useParams();
    const currentGetaway = getawaysObject[getawayId];
    
    

  return (
    <div>
        <h2>{currentGetaway.name}</h2>
        <h3>{`${currentGetaway.numGuests} guests | ${currentGetaway.numBedrooms} bedrooms | ${currentGetaway.numBeds} beds | ${currentGetaway.numBaths} baths`}</h3>
        <h4> {`$${currentGetaway.price}/night`}</h4>
        <div class="getawayDescription">{`${currentGetaway.description}`}</div>
        <div>
        <span>{`Hosted by ${currentGetaway.hostFirstName}`}</span>
        <img className="singleGetawayPageProfilePicture" src={`${currentGetaway.hostProfilePicture}`} alt="Getaway Host" />
        </div>

    </div>
  );
};

export default SingleGetawayInfo;
