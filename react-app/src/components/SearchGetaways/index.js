import React from 'react';
import 'react-gallery-carousel/dist/index.css';
import { useSelector } from "react-redux";
import { SearchResultsFilter } from '../SearchResultsFilter';
import {SingleGetawaySearchOrBrowseResult} from '../SingleGetawaySearchOrBrowseResult'
export const SearchGetaways = () => {
    const getawaysObject = useSelector(state => state.search);
    console.log(getawaysObject, "getawaysObject");
    const searchResults = Object.values(getawaysObject)
  return (
    <>
    <SearchResultsFilter searchResults={searchResults}/>
    {/* <div>
      {searchResults.map( getaway => {
        return <SingleGetawaySearchOrBrowseResult getaway={getaway} key={getaway.id}/>
      })}
    </div> */}
    </>
    
  );
};
