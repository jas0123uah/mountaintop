import React, {useState} from 'react';
import 'react-gallery-carousel/dist/index.css';
import { useSelector } from "react-redux";
import { SearchResultsFilter } from '../../SearchComponents/SearchResultsFilter';
import {AmenitiesFilterNavBar} from '../../AmenityComponents/AmenitiesFilterNavBar'
const BrowseGetawaysPage = () => {
    const [isMobile, setisMobile] = useState(window.matchMedia('screen and (min-device-width : 320px) and (max-width : 768px) and (min-device-height : 480px) and (max-device-height : 1076px)'));
  // const mq = window.matchMedia('screen and (min-device-width : 320px) and (max-width : 768px) and (min-device-height : 480px) and (max-device-height : 1076px)')

  
  isMobile.addEventListener('change', (e) => {
    setisMobile((window.matchMedia('screen and (min-device-width : 320px) and (max-width : 768px) and (min-device-height : 480px) and (max-device-height : 1076px)')))
});
    const getawaysObject = useSelector(state => state.getaways);
    const getawaysArray = Object.values(getawaysObject)
  return (
    <div className="browse">
      
      {/* {isMobile.matches ? <AmenitiesFilterNavBar/> :null} */}
      <AmenitiesFilterNavBar/>
      <SearchResultsFilter searchResults={getawaysArray}/>
    </div>
    
  );
};
export default BrowseGetawaysPage;
