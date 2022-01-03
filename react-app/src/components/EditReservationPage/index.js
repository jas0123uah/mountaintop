import { NewReservation } from "../BookReservationForm"
import CarouselSingleGetaway from '../CarouselSingleGetaway'
import SingleGetawayInfo from '../SingleGetawayInfo'
import EditReservationModal from '../EditReservationModal'
export const EditReservationPage = () => {
    
    
     return(<div>
         <CarouselSingleGetaway/>
         <div id="interestedDiv">
         <EditReservationModal/>
         </div>
         <SingleGetawayInfo/>
     </div>)
}
