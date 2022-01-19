import React from 'react';
import 'react-gallery-carousel/dist/index.css';
import { useSelector } from "react-redux";
import {  useParams } from 'react-router-dom';
import {SingleGetawayRoomInfo} from '../SingleGetawayRoomInfo'
import { SingleGetawayName } from '../SingleGetawayName';
import {SingleGetawayAvgRevLocAndPrice} from '../SingleGetawayAvgRevLocAndPrice'
import {SingleGetawayAmenitiesHeading} from '../SingleGetawayAmenitiesHeading'
import {SingleGetawayHostInfo} from '../SingleGetawayHostInfo'
import { SingleGetawayDescription } from '../SingleGetawayDescription';
const SingleGetawayInfo = () => {
  const getawaysObject = useSelector(state => state.getaways);
  const { getawayId }  = useParams();
  const currentGetaway = getawaysObject[getawayId];
  return (
    <div className="info">
        <SingleGetawayName currentGetaway={currentGetaway}/>
        <SingleGetawayRoomInfo currentGetaway={currentGetaway}/>
        <SingleGetawayAmenitiesHeading currentGetaway={currentGetaway}/>
        <SingleGetawayAvgRevLocAndPrice currentGetaway={currentGetaway}/>
        <SingleGetawayDescription currentGetaway={currentGetaway}/>
        <SingleGetawayHostInfo currentGetaway={currentGetaway}/>
    </div>
  );
};

export default SingleGetawayInfo;
