import { NewReservation } from "../BookReservationForm"
import CarouselSingleGetaway from '../CarouselSingleGetaway'
import SingleGetawayInfo from '../SingleGetawayInfo'
import BookReservationModal from '../BookReservationModal'
export const ViewSingleGetaway = () => {
    
    
     return(<div>
         <CarouselSingleGetaway/>
         <div id="interestedDiv">
         <h1>Interested?</h1>
         <BookReservationModal/>
         </div>
         <SingleGetawayInfo/>
     </div>)
}
