import DatePicker from "react-datepicker";
import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createReservation, authenticate } from "../../store/session";
import {loadGetaways} from '../../store/getaways'
import {useHistory, useParams } from 'react-router-dom';
import SingleGetawayInfo from '../SingleGetawayInfo'

export const NewBookRes = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [errors, setErrors] = useState([])
  const user = useSelector(state => state.session.user);

  const getaways = useSelector(state => state.getaways);
 

  const userId = user?.id
  const { getawayId }  = useParams();

  const dispatch = useDispatch();
  const history = useHistory();

  const getBookedDays=() =>{
  const bookedDays = [];

  const reservations = Object.values(getaways[getawayId].reservations)
  reservations.forEach( reservation => {
    bookedDays.push(new Date(reservation.startDate).toString())
    bookedDays.push(...getDatesBetween(reservation.startDate, reservation.endDate))
  })
  return bookedDays

}


function getDatesBetween(startDate, stopDate) {
    const dateArray = new Array();
    let currentDate = new Date(startDate);
    let endDate = new Date(stopDate);


    while (currentDate <= endDate) {
        currentDate.setHours(0,0,0,0);
        
        dateArray.push(new Date (currentDate).toString());
        currentDate.setDate(currentDate.getDate()+1);
    }
    dateArray.push(endDate.toString())
    return dateArray;
}

const removeBookedDays = (date) => {
  let bookedDays = getBookedDays()
  let dateasString = date.toString()
  return !bookedDays.includes(dateasString) 


}

const removeInvalidDays = (date) => {
    let bookedDays = getBookedDays()
    let dateasString = date.toString()
    let nextBookedDay = getValidEndDate()
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + -1)
    
    if (startDate == null) {
        return (new Date(date) >= tomorrow  && !bookedDays.includes(dateasString) )
    }else{
        return (new Date(date) >= tomorrow  && !bookedDays.includes(dateasString) && date < nextBookedDay )

    }
    
}

const getValidEndDate = () => {
    //let bookedDays = getBookedDays()
    const reservations = Object.values(getaways[getawayId].reservations)
    let nextBookedDay = null;
    // Identify the "smallest" startDate that is also greater than the state variable startDate
    reservations.forEach( reservation => {
        if (new Date(reservation.startDate) > new Date(startDate)) {
            // a reservation after the selected start date exists.
            if (!nextBookedDay) {
                nextBookedDay = new Date(reservation.startDate);
                //This is for the first date you find that is after your reservation check in date
            }
            if (new Date(reservation.startDate) < nextBookedDay) {
                nextBookedDay = new Date(reservation.startDate)
                //This is if you find a reservation start date that is after your check-in, but before the current next booked date.
            }
        }
    })
    if (!nextBookedDay) {
        nextBookedDay = new Date('04 Dec 8995 00:12:00 GMT')
    }
    return nextBookedDay

}
  
  const handleSubmitReservation = async (e) => {
    e.preventDefault()
    setErrors([])
    const newReservation = await dispatch(createReservation({getawayId, startDate, endDate, userId}))
    if (newReservation.errors) {
      return setErrors(newReservation.errors)
    }
    await dispatch(loadGetaways())
    await dispatch(authenticate())
    history.push('/profile')

  }
  const onChange = (dates) => {
    const [start, end] = dates;
    if (startDate && endDate) {
        setStartDate(null);
        setEndDate(null);
        return
        
    }

  
    setStartDate(start);
    setEndDate(end);
  };
  const startDateString = startDate ? ((startDate.getMonth() > 8) ? (startDate.getMonth() + 1) : ('0' + (startDate.getMonth() + 1))) + '/' + ((startDate.getDate() > 9) ? startDate.getDate() : ('0' + startDate.getDate())) + '/' + startDate.getFullYear() : ''

  const endDateString = endDate ? ((endDate.getMonth() > 8) ? (endDate.getMonth() + 1) : ('0' + (endDate.getMonth() + 1))) + '/' + ((endDate.getDate() > 9) ? endDate.getDate() : ('0' + endDate.getDate())) + '/' + endDate.getFullYear() : ''

  return (
      <>
      <>
      
      <SingleGetawayInfo/>
      </>
      <div>
      <DatePicker
        selected={startDate}
        filterDate={removeInvalidDays}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
      />
      <h4>{`Check-in Date: ${startDateString}`}</h4>
      <h4>{`Check-out Date: ${endDateString}`}</h4>
      <button onClick={handleSubmitReservation}>Book Reservation</button>

      </div>
      
      
      
      </>
  );;
}
