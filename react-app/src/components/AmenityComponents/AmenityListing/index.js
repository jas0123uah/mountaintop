import BalconyLogo from '../../assets/balcony-svgrepo-com.svg';
import FireplaceLogo from '../../assets/fireplace-svgrepo-com.svg'
import ChefHatLogo from '../../assets/chef-svgrepo-com.svg'
export const AmenityListing = ({amenity})=>{
let amenityToReturn = null;
if (amenity[1] == true) {
    if (amenity[0]== "HotTub"){
        amenityToReturn = <> <i class="fas fa-hot-tub"></i><span> Hot tub</span></>
    }
    if (amenity[0]== "Kitchen"){
        amenityToReturn = <> <img className="amenityListing" src={ChefHatLogo}></img> <span>Kitchen</span></>
    }
    if (amenity[0]== "Patio"){
        amenityToReturn = <> <img className="amenityListing" src={BalconyLogo}></img> <span>Patio</span></>
    }
    if (amenity[0]== "Wifi"){
        amenityToReturn = <> <i class="fas fa-wifi"></i><span> WiFi</span></>
    }
    if (amenity[0]== "Fireplace"){
        amenityToReturn =<> <img className="amenityListing" src={FireplaceLogo}></img> <span>Fireplace</span></>
    }
    
}
return(amenityToReturn)
}
