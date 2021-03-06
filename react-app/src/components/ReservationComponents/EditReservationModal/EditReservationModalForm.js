import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory, useParams } from 'react-router-dom';
import {loadGetaways} from '../../../store/getaways'
import {authenticate} from '../../../store/session'
import {editReservation} from '../../../store/session'
import "jquery-ui";
import 'jquery-ui/ui/widgets/datepicker'
import 'jquery-ui/themes/base/core.css'
import 'jquery-ui/themes/base/datepicker.css'
import 'jquery-ui/themes/base/theme.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const EditReservationModalForm = () => {
  const user = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);
  const { reservationId }  = useParams();
  const reservationToEdit = user.reservations[reservationId]
  const { getawayId }  = useParams();
  const [startDate, setStartDate] = useState(new Date(reservationToEdit.startDate));
  const [endDate, setEndDate] = useState(new Date(reservationToEdit.endDate));
  const getaways = useSelector(state => state.getaways);
  const userId = user?.id
  const dispatch = useDispatch();
  const history = useHistory();
  const [isOpenStart, setIsOpenStart] = useState(false);
  const [isOpenEnd, setIsOpenEnd] = useState(false);
  const handleStartChange = (e) => {
    setIsOpenStart(!isOpenStart);
    setStartDate(e);
  };
  const handleStartClick = (e) => {
    e.preventDefault();
    setIsOpenEnd(false);
    setIsOpenStart(!isOpenStart);
  };
  const handleEndChange = (e) => {
    setIsOpenStart(false);
    setIsOpenEnd(!isOpenEnd);
    setEndDate(e);
  };
  const handleEndClick = (e) => {
    e.preventDefault();
    setIsOpenEnd(!isOpenEnd);
  };

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
  const getBookedDays=() =>{
  const bookedDays = [];
  const reservations = Object.values(getaways[getawayId].reservations)
  reservations.forEach( reservation => {
    bookedDays.push(new Date(reservation.startDate).toString())
    bookedDays.push(...getDatesBetween(reservation.startDate, reservation.endDate))
  })
  return bookedDays

}
const removeBookedDays = (date) => {
  let bookedDays = getBookedDays()
  let dateasString = date.toString()
  return !bookedDays.includes(dateasString)
}

  

  const handleEditReservation = async (e) => {
    e.preventDefault()
    setErrors([])
    const editedReservation = await dispatch(editReservation({getawayId, startDate, endDate, userId, reservationId}))
    if (editedReservation.errors) {
      return setErrors(editedReservation.errors)

    }
    await dispatch(loadGetaways())
    await dispatch(authenticate())
    history.push('/profile/upcomingreservations/')
  }
  return (
    <div className='formWrapper' id="bookResModal"onSubmit={  handleEditReservation}>
    <form>
      <fieldset className='formflex' id="formflex-bookRes">
        <legend>Edit your reservation</legend>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
        <button className="example-custom-input" onClick={handleStartClick}>
        Check-in Date
      </button>
      {isOpenStart && (
        <DatePicker selected={startDate} onChange={handleStartChange} onCalendarOpen={ () => setIsOpenEnd(false)}
        format="yyyy-MM-dd"
        minDate={new Date()} filterDate={removeBookedDays}  
          inline/>
      )}
      <button className="example-custom-input" onClick={handleEndClick}>
        Check-out Date
      </button>
      {isOpenEnd && (
        <DatePicker selected={endDate} onChange={handleEndChange}
        format="yyyy-MM-dd"
        onCalendarOpen={() => setIsOpenStart(false)}
        minDate={new Date(startDate)} filterDate={removeBookedDays}  
         inline />
      )}
    
        <button type="submit" className="createGetawaySubmitButton" id="bookReservationSubmitButton">Edit Reservation</button>
      </fieldset>


    </form>
    </div>
  );
};
