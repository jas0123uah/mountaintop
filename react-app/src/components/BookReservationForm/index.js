import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect , useHistory, useParams } from 'react-router-dom';
import moment from "moment"
import {createReservation} from '../../store/session'
import $ from "jquery";
import "jquery-ui";
import 'jquery-ui/ui/widgets/datepicker'
import 'jquery-ui/themes/base/core.css'
import 'jquery-ui/themes/base/datepicker.css'
import 'jquery-ui/themes/base/theme.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
// import 'jquery-ui/themes/base/core.css';
// import 'jquery-ui/themes/base/theme.css';
// import 'jquery-ui/themes/base/selectable.css';
// import 'jquery-ui/ui/core';
// import 'jquery-ui/ui/widgets/selectable';
//import $ from '../node_modules';
export const NewReservation = () => {
  const [errors, setErrors] = useState([]);
  // const [startDate, setStartDate] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState('');
  const user = useSelector(state => state.session.user);
  const getaways = useSelector(state => state.getaways);
  const userId = user?.id
  const { getawayId }  = useParams();

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
    setIsOpenStart(!isOpenStart);
  };
  const handleEndChange = (e) => {
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

  

  const handleSubmitReservation = async (e) => {
    dispatch(createReservation({getawayId, startDate, endDate, userId}))
    history.push('/profile')

  }


  return (
    <div className='formWrapper'onSubmit={handleSubmitReservation}>
    <form>
      <fieldset className='formflex'>
        <legend>Book a reservation</legend>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
        {/* <label>Check-in Date</label>
        <DatePicker selected={startDate} format="yyyy-MM-dd" filterDate={removeBookedDays}  onChange={(date) => setStartDate(date)} minDate={new Date()} maxDate={new Date(endDate)} />
        <label>Check-out Date</label> */}


        <>
      <button className="example-custom-input" onClick={handleStartClick}>
        Check-In Date
      </button>
      {isOpenStart && (
        <DatePicker selected={startDate} onChange={handleStartChange}
        format="yyyy-MM-dd"
        minDate={new Date(startDate)} filterDate={removeBookedDays}  
         inline />
      )}
    </>

        
        {/* <button>
          AHHHHHHHHHH
        </button>
        <DatePicker selected={endDate} format="yyyy-MM-dd"
        minDate={new Date(startDate)} filterDate={removeBookedDays}  onChange={(date) => setEndDate(date)}  inline/> */}


        <>
      <button className="example-custom-input" onClick={handleEndClick}>
        Check-out Date
      </button>
      {isOpenEnd && (
        <DatePicker selected={endDate} onChange={handleEndChange}
        format="yyyy-MM-dd"
        minDate={new Date(startDate)} filterDate={removeBookedDays}  
         inline />
      )}
    </>




        <button type="submit" className="createGetawaySubmitButton">Book Reservation</button>
      </fieldset>


    </form>
    </div>
  );
};
