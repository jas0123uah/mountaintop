import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect , useHistory, useParams } from 'react-router-dom';
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";
import {createReservation} from '../../store/session'
import $ from "jquery";
//import $ from '../node_modules';
export const NewReservation = () => {
  const [errors, setErrors] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const user = useSelector(state => state.session.user);
  const userId = user?.id
  const { getawayId }  = useParams();
//   var $j = $.noConflict();

  const dispatch = useDispatch();
  const history = useHistory();
//   var array = ["2021-12-29","2013-03-15","2013-03-16"]
//   $( function() {
//   $j('#datepicker').datepicker({
//     beforeShowDay: function(date){
//         var string = $('#datepicker').datepicker.formatDate('yy-mm-dd', date);
//         return [ array.indexOf(string) == -1 ]
//     }
// })
// });

  

  const handleSubmitReservation = async (e) => {
    dispatch(createReservation({getawayId, startDate, endDate, userId})).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
   // history.push('/profile/')
    //window.location.reload()

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
      <div className="input-div">
          <label htmlFor="start_date">Start Date:</label>
          <input
            type="date"
            name="start-date"
            min="2021-12-09"
            max="2022-12-31"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          ></input>
        </div>
       <div className="input-div">
          <label htmlFor="end_date">End Date:</label>
          <input
            type="date"
            name="end-date"
            min={startDate}
            max="2022-12-31"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          ></input>
        </div>
        <p>Date:<input id="datepicker" type="text"></input></p>
      </fieldset>


    </form>
    </div>
  );
};
