import React from 'react';
import 'react-gallery-carousel/dist/index.css';
import { useSelector } from "react-redux";
import { SearchResultsFilter } from '../../SearchComponents/SearchResultsFilter';
const BrowseGetawaysPage = () => {
    const getawaysObject = useSelector(state => state.getaways);
    const getawaysArray = Object.values(getawaysObject)
  return (
    <div className="browse">
      <SearchResultsFilter searchResults={getawaysArray}/>
    </div>
    
  );
};
export default BrowseGetawaysPage;
