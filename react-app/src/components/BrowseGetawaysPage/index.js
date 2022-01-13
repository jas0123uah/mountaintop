import React from 'react';
import 'react-gallery-carousel/dist/index.css';
import { useSelector } from "react-redux";
import {SingleGetawaySearchOrBrowseResult} from '../SingleGetawaySearchOrBrowseResult'
const BrowseGetawaysPage = () => {
    const getawaysObject = useSelector(state => state.getaways);
    const getawaysArray = Object.values(getawaysObject)
  return (
    <div className="searchResultsContainer">
      {getawaysArray.map( getaway => {
        return <SingleGetawaySearchOrBrowseResult getaway={getaway} key={getaway.id}/>
      })}
    </div>
    
  );
};

export default BrowseGetawaysPage;
