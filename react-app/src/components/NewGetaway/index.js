import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect , useHistory} from 'react-router-dom';
import formPageStyling from './formPageStyling.css'
import {createGetaway} from '../../store/getaways'
console.log("LINE 6");

export const NewGetaway = () => {
  const [errors, setErrors] = useState([]);
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('')
  const [state, setState] = useState('');
  const [latitude, setLatitude] = useState('1.0')
  const [longitude, setLongitude] = useState('2.0')
  const [name, setName] =useState('')
  const [price, setPrice] = useState(1)
  const [description, setDescription] = useState('Enter a description here')
  const [numGuests, setNumGuests] = useState(1)
  const [numBeds, setNumBeds] = useState(1)
  const [numBaths, setNumBaths] = useState(1)
  const [numBedrooms, setNumBedrooms] = useState(1)

  const user = useSelector(state => state.session.user);
  const userId = user?.id

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmitGetaway = async (e) => {
    dispatch(createGetaway({address, city, state, latitude, longitude, name, price, description, numGuests, numBeds, numBaths,  numBedrooms, userId})).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
    history.push('/profile/')
    window.location.reload()

  }

  return (
    <div className='formWrapper'onSubmit={handleSubmitGetaway}>
    <form>
      <fieldset className='formflex'>
        <legend>New Getaway</legend>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor='address'>Address</label>
        <input
          name='address'
          type='text'
          value={address}
          onChange={(e) => {setAddress(e.target.value)}}
        />
      </div>

      <div>
        <label htmlFor='city'>City</label>
        <input
          name='city'
          type='text'
          value={city}
          onChange={(e) => {setCity(e.target.value)}}
        />
      </div>

      <div>
        <label htmlFor='state'>State</label>
        <input
          name='state'
          type='text'
          value={state}
          onChange={(e) => {setState(e.target.value)}}
        />
      </div>


      <div>
        <label htmlFor='bedrooms'>Number of bedrooms</label>
        <input
          name='bedrooms'
          min="1"
          type='number'
          value={numBedrooms}
          onChange={(e) => {setNumBedrooms(e.target.value)}}
        />
      </div>
      <div>
        <label htmlFor='beds'>Number of beds</label>
        <input
          name='beds'
          min="1"
          type='number'
          value = {numBeds}
          onChange={(e) => {setNumBeds(e.target.value)}}
        />
      </div>

      <div>
        <label htmlFor='bathrooms'>Number of bathrooms</label>
        <input
          name='bathrooms'
          type='number'
          min="1"
          value={numBaths}
          onChange={(e) => {setNumBaths(e.target.value)}}
        />
      </div>
      <div>
        <label htmlFor='guests'> Maximum number of guests</label>
        <input
          name='guests'
          min="1"
          type='number'
          value={numGuests}
          onChange={(e) => {setNumGuests(e.target.value)}}
        />
      </div>



      <div>
        <label htmlFor='name'>Getaway name</label>
        <input
          name='name'
          type='text'
          value={name}
          onChange={(e) => {setName(e.target.value)}}
        />
      </div>




      <div className="textareaFormField">
        <label htmlFor='description'>Getaway description </label>
        <textarea
          name='description'
          type='text'
          value={description}
          onChange={(e) => {setDescription(e.target.value)}}
        />
      </div>

      <div>
        <label htmlFor='price'>Cost per night</label>
        <input
          name='price'
          min="1"
          type='number'
          value={price}
          onChange={(e) => {setPrice(e.target.value)}}
        />
      </div>



      <div>
        <button type="submit" className="createGetawaySubmitButton">Create Getaway</button>
      </div>

      </fieldset>


    </form>
    </div>
  );
};
