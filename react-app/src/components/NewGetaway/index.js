import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import formPageStyling from './formPageStyling.css'
import {createGetaway} from '../../store/getaways'
import {loadGetaways} from '../../store/getaways'
import {authenticate} from '../../store/session'
export const NewGetaway = () => {
  const [errors, setErrors] = useState([]);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('')
  const [state, setState] = useState('');
  const [latitude, setLatitude] = useState('1.0')
  const [longitude, setLongitude] = useState('2.0')
  const [name, setName] =useState('')
  const [price, setPrice] = useState(100)
  const [description, setDescription] = useState('Enter a description here')
  const [numGuests, setNumGuests] = useState(1)
  const [numBeds, setNumBeds] = useState(1)
  const [numBaths, setNumBaths] = useState(1)
  const [numBedrooms, setNumBedrooms] = useState(1)
  const [newImages, setNewImages] = useState([])
  const [img1, setImg1] = useState('')
  const [img2, setImg2] = useState('')
  const [img3, setImg3] = useState('')
  const [img4, setImg4] = useState('')
  const [img5, setImg5] = useState('')
  const [img6, setImg6] = useState('')
  const [img7, setImg7] = useState('')
  const [img8, setImg8] = useState('')
  const [img9, setImg9] = useState('')
  const [img10, setImg10] = useState('')
  const [hasHotTub, setHasHotTub] = useState(false)
  const [hasWifi, setHasWifi] = useState(false)
  const [hasPatio, setHasPatio] = useState(false)
  const [hasFireplace, setHasFireplace] = useState(false)
  const [hasKitchen, setHasKitchen] = useState(false)



  useEffect(()=> {
    const getaway = {name, address, city, state, name, price, description, numGuests, numBeds, numBaths, numBedrooms, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10}
    const errors = [];
    const allImages= [ img1 ? true : false, img2 ? true : false, img3 ? true : false, img4 ? true : false, img5 ? true : false, img6 ? true : false, img7 ? true : false, img8 ? true : false, img9 ? true : false, img10 ? true : false]
    const numImages = allImages.reduce(function(n, val) {
    return n + (val === true);
}, 0);

    if (!address) errors.push('Please enter an address.');

    if (!city.length) errors.push('Please enter a city.');

    if (!state.length) errors.push('Please enter a state.');
    
    if (!name.length) errors.push('Please enter a name for your getaway.');

    if (name.length < 10) errors.push('Getaway names should be at least 10 characters.');

    if (price < 100) errors.push('Getaway must cost at least $100 a night.');
    
    if (description == "Enter a description here")errors.push('Please enter a description for your getaway.');

    if (description.length < 10) errors.push('Getaway descriptons must be at least 100 characters.');

    if (numGuests < 1) errors.push('Getaway must house at least 1 guest.');

    if (numBeds < 1) errors.push('Getaway must have at least 1 bed.');

    if (numBaths < 1) errors.push('Getaway must have at least 1 bathroom.');

    if (numBedrooms < 1) errors.push('Getaway must have at least 1 bedroom.');

    if(numImages != 5){
      errors.push(`Please upload 5 images.`)
    }

    if(img1.length && /^(ftp|http|https):\/\/[^ "]+$/.test(img1) == false){
      errors.push(`Images must be URLs ${img1} is not a url.`)
    }
    
    if(img2.length && /^(ftp|http|https):\/\/[^ "]+$/.test(img2) == false){
      errors.push(`Images must be URLs ${img2} is not a url.`)
    }
    if(img3.length && /^(ftp|http|https):\/\/[^ "]+$/.test(img3) == false){
      errors.push(`Images must be URLs ${img3} is not a url.`)
    }
    if(img4.length && /^(ftp|http|https):\/\/[^ "]+$/.test(img4) == false){
      errors.push(`Images must be URLs ${img4} is not a url.`)
    }
    if(img5.length && /^(ftp|http|https):\/\/[^ "]+$/.test(img5) == false){
      errors.push(`Images must be URLs ${img5} is not a url.`)
    }
    if(img6.length && /^(ftp|http|https):\/\/[^ "]+$/.test(img6) == false){
      errors.push(`Images must be URLs ${img6} is not a url.`)
    }
    if(img7.length && /^(ftp|http|https):\/\/[^ "]+$/.test(img7) == false){
      errors.push(`Images must be URLs ${img7} is not a url.`)
    }
    if(img8.length && /^(ftp|http|https):\/\/[^ "]+$/.test(img8) == false){
      errors.push(`Images must be URLs ${img8} is not a url.`)
    }
    if(img9.length && /^(ftp|http|https):\/\/[^ "]+$/.test(img9) == false){
      errors.push(`Images must be URLs ${img9} is not a url.`)
    }
    if(img10.length && /^(ftp|http|https):\/\/[^ "]+$/.test(img10) == false){
      errors.push(`Images must be URLs ${img10} is not a url.`)
    }

    if(img1.length && (img1 == img2 || img1 == img3 ||img1 == img4 || img1 == img5 || img1 == img6 || img1 == img7 || img1 == img8 || img1 == img9 || img1 == img10)  ){
      errors.push(`You cannot upload the same image twice, ${img1} found twice.`)
    }
    if(img2.length && (img2 == img1 || img2 == img3 ||img2 == img4 || img2 == img5 || img2 == img6 || img2 == img7 || img2 == img8 || img2 == img9 || img2 == img10)  ){
      errors.push(`You cannot upload the same image twice, ${img2} found twice.`)
    }
    if(img3.length && (img3 == img1 || img3 == img2 ||img3 == img4 || img3 == img5 || img3 == img6 || img3 == img7 || img3 == img8 || img3 == img9 || img3 == img10)  ){
      errors.push(`You cannot upload the same image twice, ${img3} found twice.`)
    }
    if(img4.length && (img4 == img1 || img4 == img2 ||img4 == img3 || img4 == img5 || img4 == img6 || img4 == img7 || img4 == img8 || img4 == img9 || img4 == img10)  ){
      errors.push(`You cannot upload the same image twice, ${img4} found twice.`)
    }
    if(img5.length && (img5 == img1 || img5 == img2 ||img5 == img3 || img5 == img4 || img5 == img6 || img5 == img7 || img5 == img8 || img5 == img9 || img5 == img10)  ){
      errors.push(`You cannot upload the same image twice, ${img5} found twice.`)
    }
    if(img6.length && (img6 == img1 || img6 == img2 ||img6 == img3 || img6 == img4 || img6 == img5 || img6 == img7 || img6 == img8 || img6 == img9 || img6 == img10)  ){
      errors.push(`You cannot upload the same image twice, ${img6} found twice.`)
    }

    if(img7.length && (img7 == img1 || img7 == img2 ||img7 == img3 || img7 == img4 || img7 == img5 || img7 == img6 || img7 == img8 || img7 == img9 || img7 == img10)  ){
      errors.push(`You cannot upload the same image twice, ${img7} found twice.`)
    }

    if(img8.length && (img8 == img1 || img8 == img2 ||img8 == img3 || img8 == img4 || img8 == img5 || img8 == img6 || img8 == img7 || img8 == img9 || img8 == img10)  ){
      errors.push(`You cannot upload the same image twice, ${img8} found twice.`)
    }
    if(img9.length && (img9 == img1 || img9 == img2 ||img9 == img3 || img9 == img4 || img9 == img5 || img9 == img10 || img9 == img7 || img9 == img8 || img9 == img10)  ){
      errors.push(`You cannot upload the same image twice, ${img9} found twice.`)
    }

    if(img10.length && (img10 == img1 || img10 == img2 ||img10 == img3 || img10 == img4 || img10 == img5 || img10 == img6 || img10 == img7 || img10 == img8 || img9 == img10)  ){
      errors.push(`You cannot upload the same image twice, ${img10} found twice.`)
    }
    setErrors(errors);
  }, [name, address, city, state, name, price, description, numGuests, numBeds, numBaths, numBedrooms, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10])



  const user = useSelector(state => state.session.user);
  const userId = user?.id

  const dispatch = useDispatch();
  const history = useHistory();


  
  

  const handleSubmitGetaway = async (e) => {
    e.preventDefault();
    if(!errors.length){
      await dispatch(
        createGetaway({address, city, state, latitude, longitude, name, price, description, numGuests, numBeds, numBaths,  numBedrooms, userId, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, hasHotTub, hasWifi, hasPatio, hasKitchen, hasFireplace })
        ).catch(async (res) => {
          const data = await res.json();if (data && data.errors) setErrors(data.errors);
        });
        await dispatch(loadGetaways()).then((res) => dispatch (authenticate())).then((res) => history.push("/profile"))
        }
    }
  return (
    <div className='formWrapper'>
    <form onSubmit={ (e) => handleSubmitGetaway(e)}>
      <fieldset className='formflex'>
        <legend>New Getaway</legend>
      <div className="formErrors">
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
          min="100"
          type='number'
          value={price}
          onChange={(e) => {setPrice(e.target.value)}}
        />
      </div>

    <fieldset className="amenities-fieldset">              
    <legend>Amenities</legend>             
    <input type="checkbox" checked={hasHotTub} onChange={(e) => {setHasHotTub(!hasHotTub)}}/>Hot tub
    <input type="checkbox" checked={hasWifi} onChange={(e) => {setHasWifi(!hasWifi)}}/>WiFi  
    <input type="checkbox" checked={hasPatio} onChange={(e) => {setHasPatio(!hasPatio)}}/>Patio
    <input type="checkbox" checked={hasKitchen} onChange={(e) => {setHasKitchen(!hasKitchen)}}/> Kitchen
    <input type="checkbox" checked={hasFireplace} onChange={(e) => {setHasFireplace(!hasFireplace)}}/>Fireplace            
                    
  </fieldset> 

      <div className="getawayImgFields">
        <label htmlFor='imgUrl'>Image URL</label>
        <input type="url" className="IMGS" name="imgUrl"   onChange={(e)=>{setImg1(e.target.value)}} />

      </div>



       <div className="getawayImgFields">
        <label htmlFor='imgUrl'>Image URL</label>
        <input className="IMGS" type="url" name="imgUrl" id=""  onChange={(e)=>{setImg2(e.target.value)}} />

      </div>


      <div className="getawayImgFields">
        <label htmlFor='imgUrl'>Image URL</label>
        <input type="url" className="IMGS" name="imgUrl"   onChange={(e)=>{setImg3(e.target.value)}} />

      </div>


      <div className="getawayImgFields">
        <label htmlFor='imgUrl'>Image URL</label>
        <input type="url" className="IMGS" name="imgUrl"   onChange={(e)=>{setImg4(e.target.value)}} />

      </div>

      <div className="getawayImgFields">
        <label htmlFor='imgUrl'>Image URL</label>
        <input type="url" className="IMGS" name="imgUrl"   onChange={(e)=>{setImg5(e.target.value)}} />

      </div>

      
      <div className="submitImgFlexbox">
      <div className="maybe" id="containerForgetawayImgsSubmissions">
        
        <div className="maybe2" id="getawayImgsSubmissions">

        </div>
      </div>
      </div>
      


      <div>
        <button type="submit" disabled={errors.length ? true : false}className="createGetawaySubmitButton">Create Getaway</button>
      </div>

      </fieldset>


    </form>
    </div>
  );
};
