import React from 'react';
import 'react-gallery-carousel/dist/index.css';
import { useSelector } from "react-redux";
import { SearchResultsFilter } from '../SearchResultsFilter';
export const SearchGetaways = () => {
    const getawaysObject = useSelector(state => state.search);
    const searchResults = Object.values(getawaysObject)
  return (
    <>
    <SearchResultsFilter searchResults={searchResults}/>
    </>
    
  );
};
