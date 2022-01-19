

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import {editGetaway} from '../../../store/getaways'
import {loadGetaways} from '../../../store/getaways'
import {authenticate} from '../../../store/session'

export const EditSingleGetaway = () => {

  const user = useSelector(state => state.session.user);
  const userId = user?.id
  const { getawayId }  = useParams();
  const getawayBeforeEdits = useSelector(state => state.getaways[getawayId]);
  const arrayOfAmenityObjects = Object.values(getawayBeforeEdits.amenities)
  const amenitiesObject ={'HotTub': false, 'Wifi': false, 'Fireplace': false, 'Kitchen': false, 'Patio' : false}
  arrayOfAmenityObjects.forEach(amenityObj => {
    if (amenityObj.amenity =="Hot Tub") {
      amenitiesObject['HotTub'] = true;
    }
    if (amenityObj.amenity =="Wifi") {
      amenitiesObject['Wifi'] = true;
    }
    if (amenityObj.amenity =="Fireplace") {
      amenitiesObject['Fireplace'] = true;
    }
    if (amenityObj.amenity =="Kitchen") {
      amenitiesObject['Kitchen'] = true;
    }
    if (amenityObj.amenity =="Patio") {
      amenitiesObject['Patio'] = true;
    }
  })
  const [errors, setErrors] = useState([]);
  const [address, setAddress] = useState(getawayBeforeEdits.address);
  const [city, setCity] = useState(getawayBeforeEdits.city)
  const [state, setState] = useState(getawayBeforeEdits.state);
  const [latitude, setLatitude] = useState('1.0')
  const [longitude, setLongitude] = useState('2.0')
  const [name, setName] =useState(getawayBeforeEdits.name)
  const [price, setPrice] = useState(getawayBeforeEdits.price)
  const [description, setDescription] = useState(getawayBeforeEdits.description)
  const [numGuests, setNumGuests] = useState(getawayBeforeEdits.numGuests)
  const [numBeds, setNumBeds] = useState(getawayBeforeEdits.numBeds)
  const [numBaths, setNumBaths] = useState(getawayBeforeEdits.numBaths)
  const [numBedrooms, setNumBedrooms] = useState(getawayBeforeEdits.numBedrooms)
  const allImgObjs = Object.values(getawayBeforeEdits.images)
  const allImgUrls = [];
  const [hasHotTub, setHasHotTub] = useState(amenitiesObject.HotTub)
  const [hasWifi, setHasWifi] = useState(amenitiesObject.Wifi)
  const [hasPatio, setHasPatio] = useState(amenitiesObject.Patio)
  const [hasFireplace, setHasFireplace] = useState(amenitiesObject.Fireplace)
  const [hasKitchen, setHasKitchen] = useState(amenitiesObject.Kitchen)
  allImgObjs.forEach(image => {
  allImgUrls.push(image.url)
  });
  allImgUrls.sort().reverse()
  const [img1, setImg1] = useState(allImgUrls[0])
  const [img2, setImg2] = useState(allImgUrls[1])
  const [img3, setImg3] = useState(allImgUrls[2])
  const [img4, setImg4] = useState(allImgUrls[3])
  const [img5, setImg5] = useState(allImgUrls[4])
  const [img6, setImg6] = useState(allImgUrls[5])
  const [img7, setImg7] = useState(allImgUrls[6])
  const [img8, setImg8] = useState(allImgUrls[7])
  const [img9, setImg9] = useState(allImgUrls[8])
  const [img10, setImg10] = useState(allImgUrls[9])


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
    if(img3.length && /^(ftp|http|https):\/\/[^ "]+$/.test(img2) == false){
      errors.push(`Images must be URLs ${img2} is not a url.`)
    }
    if(img4.length && /^(ftp|http|https):\/\/[^ "]+$/.test(img2) == false){
      errors.push(`Images must be URLs ${img2} is not a url.`)
    }
    if(img5.length && /^(ftp|http|https):\/\/[^ "]+$/.test(img2) == false){
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
    
    setErrors(errors);
  }, [name, address, city, state, name, price, description, numGuests, numBeds, numBaths, numBedrooms, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10])

  
  //let images = []


  


  const dispatch = useDispatch();
  const history = useHistory();


  
  

  const handleEditGetaway = async (e) => {
    e.preventDefault();
    if(!errors.length){
      await dispatch(
        editGetaway({address, city, state, latitude, longitude, name, price, description, numGuests, numBeds, numBaths,  numBedrooms, userId, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, getawayId, hasHotTub, hasWifi, hasPatio, hasKitchen, hasFireplace })
        ).catch(async (res) => {
          const data = await res.json();if (data && data.errors) setErrors(data.errors);
        });
        await dispatch(loadGetaways()).then((res) => dispatch (authenticate())).then((res) => history.push("/profile"))
        }
    }
  return (
    <div className='formWrapper'>
    <form onSubmit={ (e) => handleEditGetaway(e)}>
      <fieldset className='formflex'>
        <legend>Edit Getaway</legend>
      <div className='form-fields-flex'>
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
          min="1"
          type='number'
          value={price}
          onChange={(e) => {setPrice(e.target.value)}}
        />
      </div>

      <fieldset className="amenities-fieldset">              
    <legend className="amenities-fieldset">Amenities</legend>             
    <input type="checkbox" checked={hasHotTub} onChange={(e) => {setHasHotTub(!hasHotTub)}}/>Hot tub
    <input type="checkbox" checked={hasWifi} onChange={(e) => {setHasWifi(!hasWifi)}}/>WiFi  
    <input type="checkbox" checked={hasPatio} onChange={(e) => {setHasPatio(!hasPatio)}}/>Patio
    <input type="checkbox" checked={hasKitchen} onChange={(e) => {setHasKitchen(!hasKitchen)}}/> Kitchen
    <input type="checkbox" checked={hasFireplace} onChange={(e) => {setHasFireplace(!hasFireplace)}}/>Fireplace            
                    
  </fieldset> 

      <div className="getawayImgFields">
        <label htmlFor='imgUrl'>Image URL</label>
        <input type="url" className="IMGS" name="imgUrl" value={img1}   onChange={(e)=>{setImg1(e.target.value)}} />

      </div>



       <div className="getawayImgFields">
        <label htmlFor='imgUrl'>Image URL</label>
        <input value={img2} className="IMGS" type="url" name="imgUrl" id=""  onChange={(e)=>{setImg2(e.target.value)}} />

      </div>


      <div className="getawayImgFields">
        <label htmlFor='imgUrl'>Image URL</label>
        <input type="url" value={img3}  className="IMGS" name="imgUrl"   onChange={(e)=>{setImg3(e.target.value)}} />

      </div>


      <div className="getawayImgFields">
        <label htmlFor='imgUrl'>Image URL</label>
        <input type="url" value={img4}  className="IMGS" name="imgUrl"   onChange={(e)=>{setImg4(e.target.value)}} />

      </div>

      <div className="getawayImgFields">
        <label htmlFor='imgUrl'>Image URL</label>
        <input type="url" className="IMGS" name="imgUrl" value={img5}    onChange={(e)=>{setImg5(e.target.value)}} />

      </div>

      <div className="submitImgFlexbox">
      <div className="maybe" id="containerForgetawayImgsSubmissions">
        
        <div className="maybe2" id="getawayImgsSubmissions">

        </div>
      </div>
      </div>
      


      <div>
        <button type="submit" disabled={errors.length ? true : false}className="createGetawaySubmitButton">Edit Getaway</button>
      </div>
      </div>

      </fieldset>


    </form>
    </div>
  );
};
