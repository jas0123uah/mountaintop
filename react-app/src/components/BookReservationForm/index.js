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
  const userId = user?.id
  const { getawayId }  = useParams();
  console.log(startDate)

  const dispatch = useDispatch();
  const history = useHistory();
  var array = ["2021-12-29","2013-03-15","2013-03-16"]
  $( function() {
    $( "#datepicker" ).datepicker();
  } );



const isWeekday = (date) => {
    const day = new Date(date);
    console.log(day, "AGG")
    day.getDay()
    return day.getDay() !== 0 && day.getDay() !== 6;
  };


  

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
    
        <DatePicker selected={startDate} format="yyyy-MM-dd" filterDate={isWeekday}  onChange={(date) => setStartDate(date)} minDate={new Date()} maxDate={new Date(endDate)} />

        <DatePicker selected={endDate} format="yyyy-MM-dd"
        minDate={new Date(startDate)} filterDate={isWeekday}  onChange={(date) => setEndDate(date)} />
        <button type="submit" className="createGetawaySubmitButton">Book Reservation</button>
      </fieldset>


    </form>
    </div>
  );
};
