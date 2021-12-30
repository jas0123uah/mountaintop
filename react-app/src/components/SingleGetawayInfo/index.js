import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { useSelector } from "react-redux";
import {  useParams } from 'react-router-dom';
const SingleGetawayInfo = () => {
    const getawaysObject = useSelector(state => state.getaways);
    const { getawayId }  = useParams();
    const currentGetaway = getawaysObject[getawayId];
    
    

  return (
    //   <div className="container">
    //     <div class="numGuests">{`${currentGetaway.numGuests} guests |`}</div>
    //     <div class="numBedrooms">{`${currentGetaway.numBedrooms} bedrooms |`}</div>
    //     <div class="numBeds">{`${currentGetaway.numBeds} beds |`}</div>
    //     <div class="numBaths">{`${currentGetaway.numBaths} baths |`}</div>
    //     <div class="hostedBy">{`Hosted by ${currentGetaway.hostFirstName}`}</div>
    //     <div class="profilePicture"><img className="singleGetawayPageProfilePicture" src={`${currentGetaway.hostProfilePicture}`} alt="Getaway Host" /></div>
    //     <div class="getawayDescription">{`${currentGetaway.description}`}</div>
    //   </div>
    <div>
        <h2>{currentGetaway.name}</h2>
        <h3>{`${currentGetaway.numGuests} guests |${currentGetaway.numBeds} beds |${currentGetaway.numBaths} baths |`}</h3>
        <div class="getawayDescription">{`${currentGetaway.description}`}</div>
        <div>
        <span>{`Hosted by ${currentGetaway.hostFirstName}`}</span>
        <img className="singleGetawayPageProfilePicture" src={`${currentGetaway.hostProfilePicture}`} alt="Getaway Host" />
        </div>

    </div>
  );
};

export default SingleGetawayInfo;
