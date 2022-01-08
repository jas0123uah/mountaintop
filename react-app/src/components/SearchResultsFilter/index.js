import React, { useState, useEffect, useRef } from 'react';
import BalconyLogo from '../assets/balcony-svgrepo-com.svg';
import FireplaceLogo from '../assets/fireplace-svgrepo-com.svg'
import ChefHatLogo from '../assets/chef-svgrepo-com.svg'
import { ReactSVG } from 'react-svg'
import {getDesiredAmenities, compareDesiredAmenitiesToCurrentGetawaysAmenities} from '../../utils/helperFunctions'
import {SingleGetawaySearchOrBrowseResult} from '../SingleGetawaySearchOrBrowseResult'


export const SearchResultsFilter = ({searchResults}) => {
    const [hasHotTub, setHasHotTub] = useState(false)
    const [hasWifi, setHasWifi] = useState(false)
    const [hasPatio, setHasPatio] = useState(false)
    const [hasFireplace, setHasFireplace] = useState(false)
    const [hasKitchen, setHasKitchen] = useState(false)
    let filteredLocations;
    const desiredAmenities = getDesiredAmenities(hasHotTub, hasWifi, hasPatio, hasFireplace, hasKitchen)
    

    filteredLocations = searchResults.filter(result =>  compareDesiredAmenitiesToCurrentGetawaysAmenities (desiredAmenities, result))
    return(
    <>
    <fieldset>              
    <legend>Amenities</legend>
    <button className={`selected-amenity-filter-${hasHotTub}`} onClick={(e) => {setHasHotTub(!hasHotTub)}}> <i class="fas fa-hot-tub"></i> Hot tub</button>
    <button className={`selected-amenity-filter-${hasWifi}`} onClick={(e) => {setHasWifi(!hasWifi)}}> <i class="fas fa-wifi"></i> WiFi</button>
    
    <button className={`selected-amenity-filter-${hasPatio}`} onClick={(e) => {setHasPatio(!hasPatio)}}> <ReactSVG src={BalconyLogo} /> Patio</button>

    <button className={`selected-amenity-filter-${hasKitchen}`} onClick={(e) => {setHasKitchen(!hasKitchen)}}> <ReactSVG src={ChefHatLogo} />Kitchen</button>

    <button className={`selected-amenity-filter-${hasFireplace}`} onClick={(e) => {setHasFireplace(!hasFireplace)}}> <ReactSVG src={FireplaceLogo} />Fireplace</button>       
    </fieldset>
    <div>
      {filteredLocations.length ? filteredLocations.map( getaway => {
        return <SingleGetawaySearchOrBrowseResult getaway={getaway} key={getaway.id}/>
      }): <h1>No getaways found</h1>}
    </div>
    
    </>
    )
}
