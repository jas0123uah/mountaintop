import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useParams, useHistory} from "react-router-dom";
import {editGetaway} from '../../store/getaway'

export const EditGetaway = () => {
  const {getawayId} = useParams();
  const history = useHistory();


  const user = useSelector(state => state.session.user);
  const userId = user?.id
  const getawayToEdit = useSelector(user => user.getaways[getawayId])
  const [errors, setErrors] = useState([]);
  const [address, setAddress] = useState(getawayToEdit.address);
  const [city, setCity] = useState(getawayToEdit.city)
  const [state, setState] = useState(getawayToEdit.state);
  const [latitude, setLatitude] = useState(getawayToEdit.latitude)
  const [longitude, setLongitude] = useState(getawayToEdit.longitude)
  const [name, setName] =useState(getawayToEdit.name)
  const [price, setPrice] = useState(getawayToEdit.price)
  const [description, setDescription] = useState(getawayToEdit.description)
  const [numGuests, setNumGuests] = useState(getawayToEdit.numGuests)
  const [numBeds, setNumBeds] = useState(getawayToEdit.numBeds)
  const [numBaths, setNumBaths] = useState(getawayToEdit.numBaths)
  const [numBedrooms, setNumBedrooms] = useState(getawayToEdit.numBedrooms)


  const dispatch = useDispatch();

  const handleSubmitGetaway = async (e) => {
    return dispatch(editGetaway({ address, city, state, latitude, longitude, name, price, description, numGuests, numBeds, numBaths,  numBedrooms, userId})).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors); else{
            history.push(`/getaways/${getawayId}`)
        }
      }
    );

  }


  return (
    <div className='formWrapper'onSubmit={handleSubmitGetaway}>
    <form>
      <fieldset className='formflex'>
        <legend>Edit Getaway</legend>
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
        <button type="submit" className="createGetawaySubmitButton">Edit Getaway</button>
      </div>

      </fieldset>


    </form>
    </div>
  );
};
