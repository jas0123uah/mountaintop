import React, {useContext } from 'react';
import {SearchContext} from '../../context/SearchFilter'
import {getDesiredAmenities, compareDesiredAmenitiesToCurrentGetawaysAmenities} from '../../utils/helperFunctions'
import {SingleGetawaySearchOrBrowseResult} from '../SingleGetawaySearchOrBrowseResult'


export const SearchResultsFilter = ({searchResults}) => {
    const {hasHotTub,  hasWifi,  hasPatio,  hasFireplace, hasKitchen } = useContext(SearchContext)
    const desiredAmenities = getDesiredAmenities(hasHotTub, hasWifi, hasPatio, hasFireplace, hasKitchen)

    const filteredLocations = searchResults.filter(result =>  compareDesiredAmenitiesToCurrentGetawaysAmenities (desiredAmenities, result))
    return(
    <>
    <div className="searchResultsContainer">
      {filteredLocations.length ? filteredLocations.map( getaway => {
        return <SingleGetawaySearchOrBrowseResult getaway={getaway} key={getaway.id}/>
      }): <h1>No getaways found</h1>}
    </div>
    
    </>
    )
}
