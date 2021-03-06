import BalconyLogo from '../../assets/balcony-svgrepo-com.svg';
import FireplaceLogo from '../../assets/fireplace-svgrepo-com.svg'
import ChefHatLogo from '../../assets/chef-svgrepo-com.svg'
import {useContext} from 'react';
import {SearchContext} from '../../../context/SearchFilter'
export const AmenitiesFilterNavBar = () => {
    const {hasHotTub, setHasHotTub, hasWifi, setHasWifi, hasPatio, setHasPatio, hasFireplace, setHasFireplace, hasKitchen, setHasKitchen  } = useContext(SearchContext)
    return(
    <>
    <div className="breaker"></div>
    <div className="spacingDiv1"></div>
    <div className="amenitiesNav">
    <button id="hottub" className={`amenity-filter selected-amenity-filter-${hasHotTub}`} onClick={(e) => {setHasHotTub(!hasHotTub)}}> <i class="fas fa-hot-tub"></i> Hot tub</button>
    
    <button id="wifi" className={`amenity-filter selected-amenity-filter-${hasWifi}`} onClick={(e) => {setHasWifi(!hasWifi)}}> <i class="fas fa-wifi"></i> WiFi</button>
    
    <button id="patio" className={`amenity-filter selected-amenity-filter-${hasPatio}`} onClick={(e) => {setHasPatio(!hasPatio)}}> <img className="amenityListing" src={BalconyLogo}></img> Patio</button>

    <button id="kitchen" className={`amenity-filter selected-amenity-filter-${hasKitchen}`} onClick={(e) => {setHasKitchen(!hasKitchen)}}> <img className="amenityListing" src={ChefHatLogo}></img>Kitchen</button>

    <button id="fireplace" className={`amenity-filter selected-amenity-filter-${hasFireplace}`} onClick={(e) => {setHasFireplace(!hasFireplace)}}> <img className="amenityListing" src={FireplaceLogo}></img>Fireplace</button>       
    </div>
    <div className="spacingDiv2"></div>
    <div className="spacingDiv3"></div>
    </>)
}
