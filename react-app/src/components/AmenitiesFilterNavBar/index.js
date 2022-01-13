import BalconyLogo from '../assets/balcony-svgrepo-com.svg';
import FireplaceLogo from '../assets/fireplace-svgrepo-com.svg'
import ChefHatLogo from '../assets/chef-svgrepo-com.svg'
import {useContext} from 'react';
import {SearchContext} from '../../context/SearchFilter'
export const AmenitiesFilterNavBar = () => {
    const {hasHotTub, setHasHotTub, hasWifi, setHasWifi, hasPatio, setHasPatio, hasFireplace, setHasFireplace, hasKitchen, setHasKitchen  } = useContext(SearchContext)
    return(
    <>
    <div className="breaker"></div>
    <div className="amenitiesNav">
    <button className={`selected-amenity-filter-${hasHotTub} amenity-filter`} onClick={(e) => {setHasHotTub(!hasHotTub)}}> <i class="fas fa-hot-tub"></i> Hot tub</button>
    
    <button className={`selected-amenity-filter-${hasWifi} amenity-filter`} onClick={(e) => {setHasWifi(!hasWifi)}}> <i class="fas fa-wifi"></i> WiFi</button>
    
    <button className={`selected-amenity-filter-${hasPatio} amenity-filter`} onClick={(e) => {setHasPatio(!hasPatio)}}> <img className="amenityListing" src={BalconyLogo}></img> Patio</button>

    <button className={`selected-amenity-filter-${hasKitchen} amenity-filter`} onClick={(e) => {setHasKitchen(!hasKitchen)}}> <img className="amenityListing" src={ChefHatLogo}></img>Kitchen</button>

    <button className={`selected-amenity-filter-${hasFireplace} amenity-filter`} onClick={(e) => {setHasFireplace(!hasFireplace)}}> <img className="amenityListing" src={FireplaceLogo}></img>Fireplace</button>       
    </div>
    </>)
}
