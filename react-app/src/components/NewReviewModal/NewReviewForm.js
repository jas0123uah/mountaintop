import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import {createGetaway, createReview, loadGetaways} from '../../store/getaways'
import {authenticate} from '../../store/session'
import { useParams } from 'react-router-dom';
//import './reviewPage.css'
import {RatingStar} from '../RatingStar'
export const NewReviewForm = ({reservationId, getawayId}) => {
  const reservationsId = reservationId
  const [errors, setErrors] = useState([]);
  const [reviewText, setReviewText] = useState('Review your stay');
  const [cleanlinessRating, setCleanlinessRating] = useState(1)
  const [communicationRating, setCommunicationRating] = useState(1)
  const [checkinRating, setCheckinRating] = useState(1)
  const [accuracyRating, setAccuracyRating] = useState(1)
  const [locationRating, setLocationRating] = useState(1)
  const [valueRating, setValueRating] = useState(1)
  const numStars = [1,2,3,4,5]


useEffect(() => {

    const errors = [];
    const review = {reviewText}
    
    if (reviewText.length < 100) errors.push('Review must be at least 100 characters.')
    setErrors(errors);

}, [reviewText])




  const user = useSelector(state => state.session.user);
  const userId = user?.id

  //const {reservationId} = useParams()
  //const reservationsId = reservationId

  const dispatch = useDispatch();
  const history = useHistory();


  
  

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if(!errors.length){
    await dispatch(
    createReview({accuracyRating, checkinRating, cleanlinessRating, communicationRating, getawayId, locationRating, reviewText, valueRating, userId, reservationsId })
    ).catch(async (res) => {
    const data = await res.json();if (data && data.errors) setErrors(data.errors);
        });
     await dispatch(loadGetaways()).then((res) => dispatch (authenticate())).then((res) => history.push(`/getaways/${getawayId}`))
        }
    }
  return (
    <div className='formWrapper'>
    <form onSubmit={ (e) => handleSubmitReview(e)}>
      <fieldset className='formflex'>
        <legend>New Review</legend>
      <div className="formErrors">
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>

<div class="parentRev">
<div class="div1"> Cleanliness rating </div>
<div class="div2"> {numStars.map(num => {return <RatingStar key={num} ratingSetter={setCleanlinessRating} desiredRating={num} currentRating={cleanlinessRating}/> })}
</div>
<div class="div3"> Communication rating </div>
<div class="div4"> {numStars.map(num => {return <RatingStar key={num} ratingSetter={setCommunicationRating} desiredRating={num} currentRating={communicationRating}/> })} </div>
<div class="div5"> Check-in rating </div>
<div class="div6"> {numStars.map(num => {return <RatingStar key={num} ratingSetter={setCheckinRating} desiredRating={num} currentRating={checkinRating}/> })} </div>
<div class="div7"> Accuracy rating </div>
<div class="div8"> {numStars.map(num => {return <RatingStar key={num} ratingSetter={setAccuracyRating} desiredRating={num} currentRating={accuracyRating}/> })} </div>
<div class="div9"> Location rating</div>
<div class="div10"> {numStars.map(num => {return <RatingStar key={num} ratingSetter={setLocationRating} desiredRating={num} currentRating={locationRating}/> })} </div>
<div class="div11"> Value rating </div>
<div class="div12"> {numStars.map(num => {return <RatingStar key={num} ratingSetter={setValueRating} desiredRating={num} currentRating={valueRating}/> })} </div>
</div>
<div>
    <textarea name="" value={reviewText} onChange={(e) => setReviewText(e.target.value)} id="" cols="30" rows="10"></textarea>
</div>
      <div>
        <button type="submit" disabled={errors.length ? true : false}className="reviewSubmitButton">Submit Review</button>
      </div>
</fieldset>
    </form>
    </div>
  );
};
