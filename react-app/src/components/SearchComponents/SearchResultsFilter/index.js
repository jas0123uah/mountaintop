import React, {useContext, useState } from 'react';
import {SearchContext} from '../../../context/SearchFilter'
import {getDesiredAmenities, compareDesiredAmenitiesToCurrentGetawaysAmenities} from '../../../utils/helperFunctions'
import {SingleGetawaySearchOrBrowseResult} from '../SingleGetawaySearchOrBrowseResult'
import {MobileSingleGetawaySearchOrBrowseResult} from '../../MobileSingleGetaway'


export const SearchResultsFilter = ({searchResults}) => {
    const {hasHotTub,  hasWifi,  hasPatio,  hasFireplace, hasKitchen } = useContext(SearchContext)
    const [isMobile, setisMobile] = useState(window.matchMedia('screen and (min-device-width : 320px) and (max-width : 768px) and (min-device-height : 480px) and (max-device-height : 1076px)'));

    isMobile.addEventListener('change', (e) => {
    setisMobile((window.matchMedia('screen and (min-device-width : 320px) and (max-width : 768px) and (min-device-height : 480px) and (max-device-height : 1076px)')))
  });

    const desiredAmenities = getDesiredAmenities(hasHotTub, hasWifi, hasPatio, hasFireplace, hasKitchen)

    const filteredLocations = searchResults.filter(result =>  compareDesiredAmenitiesToCurrentGetawaysAmenities (desiredAmenities, result))
    return(
    <>
    <div className="searchResultsContainer" id="searchResultsContainer">
      {filteredLocations.length ? filteredLocations.map( getaway => { 
        if(getaway && isMobile.matches){return <MobileSingleGetawaySearchOrBrowseResult getaway={getaway} key={getaway.id}/>}else if(getaway && !isMobile.matches){return <SingleGetawaySearchOrBrowseResult getaway={getaway} key={getaway.id}/>}
        // return <SingleGetawaySearchOrBrowseResult getaway={getaway} key={getaway.id}/>
      }): <h1>No getaways found</h1>}
    </div>
    
    </>
    )
}
