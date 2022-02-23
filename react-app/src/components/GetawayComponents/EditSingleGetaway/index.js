

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory, useParams} from 'react-router-dom';
import {editGetaway} from '../../../store/getaways'
import {loadGetaways} from '../../../store/getaways'
import {authenticate} from '../../../store/session'
import {checkURL, checkURLisReachable} from '../../../utils/helperFunctions'
import $ from 'jquery'
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
  const [img1, setImg1] = useState(JSON.stringify(allImgObjs[0]))
  const [img2, setImg2] = useState(JSON.stringify(allImgObjs[1]))
  const [img3, setImg3] = useState(JSON.stringify(allImgObjs[2]))
  const [img4, setImg4] = useState(JSON.stringify(allImgObjs[3]))
  const [img5, setImg5] = useState(JSON.stringify(allImgObjs[4]))


 const [img1Preview, setImg1Preview] = useState(allImgUrls[0])
  const [img2Preview, setImg2Preview] = useState(allImgUrls[1])
  const [img3Preview, setImg3Preview] = useState(allImgUrls[2])
  const [img4Preview, setImg4Preview] = useState(allImgUrls[3])
  const [img5Preview, setImg5Preview] = useState(allImgUrls[4])
  
  const [savedImg1File, setSavedImg1File] = useState('')
  const [savedImg2File, setSavedImg2File] = useState('')
  const [savedImg3File, setSavedImg3File] = useState('')
  const [savedImg4File, setSavedImg4File] = useState('')
  const [savedImg5File, setSavedImg5File] = useState('')
  const [savedImg1Preview, setSavedImg1Preview] = useState('')
  const [savedImg2Preview, setSavedImg2Preview] = useState('')
  const [savedImg3Preview, setSavedImg3Preview] = useState('')
  const [savedImg4Preview, setSavedImg4Preview] = useState('')
  const [savedImg5Preview, setSavedImg5Preview] = useState('')



  


const handleSetImg1 = (e) => {
        let file = e.target.files[0];

        setImg1(e.target.files[0]);
        if (file) {
            setSavedImg1File(file);

            file = URL.createObjectURL(file);
            setImg1Preview(file);
            setSavedImg1Preview(file)
        } else {
            setImg1(savedImg1File);
            setImg1Preview(savedImg1Preview);
        }
    }
  const handleSetImg2 = (e) => {
        let file = e.target.files[0];

        setImg2(e.target.files[0]);
        if (file) {
            setSavedImg2File(file);

            file = URL.createObjectURL(file);
            setImg2Preview(file);
            setSavedImg2Preview(file)
        } else {
            setImg2(savedImg2File);
            setImg2Preview(savedImg2Preview);
        }
    }
  const handleSetImg3 = (e) => {
        let file = e.target.files[0];

        setImg3(e.target.files[0]);
        if (file) {
            setSavedImg3File(file);

            file = URL.createObjectURL(file);
            setImg3Preview(file);
            setSavedImg3Preview(file)
        } else {
            setImg3(savedImg3File);
            setImg3Preview(savedImg3Preview);
        }
    }
  const handleSetImg4 = (e) => {
        let file = e.target.files[0];

        setImg4(e.target.files[0]);
        if (file) {
            setSavedImg4File(file);

            file = URL.createObjectURL(file);
            setImg4Preview(file);
            setSavedImg4Preview(file)
        } else {
            setImg4(savedImg4File);
            setImg4Preview(savedImg4Preview);
        }
    }
  const handleSetImg5 = (e) => {
        let file = e.target.files[0];

        setImg5(e.target.files[0]);
        if (file) {
            setSavedImg5File(file);

            file = URL.createObjectURL(file);
            setImg5Preview(file);
            setSavedImg5Preview(file)
        } else {
            setImg5(savedImg5File);
            setImg5Preview(savedImg5Preview);
        }
    }
  const handleImg1Click = () => {
    $('#img1Upload').trigger('click')

  }
  const handleImg2Click = () => {
    $('#img2Upload').trigger('click')

  }
  const handleImg3Click = () => {
    $('#img3Upload').trigger('click')

  }
  const handleImg4Click = () => {
    $('#img4Upload').trigger('click')

  }
  const handleImg5Click = () => {
    $('#img5Upload').trigger('click')

  }

  useEffect(()=> {
    const getaway = {name, address, city, state, price, description, numGuests, numBeds, numBaths, numBedrooms, img1, img2, img3, img4, img5}
    const errors = [];
    const allImages= [ img1 ? true : false, img2 ? true : false, img3 ? true : false, img4 ? true : false, img5 ? true : false]
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

    // if ((img1.length && !checkURL(img1)) || (img2.length && !checkURL(img2)) || (img3.length && !checkURL(img3)) || (img4.length && !checkURL(img4)) || (img5.length && !checkURL(img5)) || (img1.length && /^(ftp|http|https):\/\/[^ "]+$/.test(img1) == false) || (img2.length && /^(ftp|http|https):\/\/[^ "]+$/.test(img2) == false) ||(img3.length && /^(ftp|http|https):\/\/[^ "]+$/.test(img3) == false) || (img4.length && /^(ftp|http|https):\/\/[^ "]+$/.test(img4) == false) || (img5.length && /^(ftp|http|https):\/\/[^ "]+$/.test(img5) == false)) {
    //   errors.push(`Fields in red are invalid image urls.`)
      
    // }
    setErrors(errors);
  }, [name, address, city, state, name, price, description, numGuests, numBeds, numBaths, numBedrooms, img1, img2, img3, img4, img5])

  
  //let images = []


  


  const dispatch = useDispatch();
  const history = useHistory();


  
  const handleEditGetaway = async (e) => {
    e.preventDefault();
    if(!errors.length){
      const formData = new FormData()
      formData.append("img1", img1)
      formData.append("img2", img2)
      formData.append("address", address)
      formData.append("city", city)
      formData.append("state", state)
      formData.append("latitude", latitude)
      formData.append("longitude", longitude)
      formData.append("name", name)
      formData.append("price", price)
      formData.append("description", description)
      formData.append("numGuests", numGuests)
      formData.append("numBeds", numBeds)
      formData.append("numBaths", numBaths)
      formData.append("numBedrooms", numBedrooms)
      formData.append("userId", userId)
      formData.append("img3", img3)
      formData.append("img4", img4)
      formData.append("img5", img5)
      formData.append("getawayId", getawayId)
      formData.append("country", "United States")
      formData.append("hasHotTub", hasHotTub)
      formData.append("hasWifi", hasWifi)
      formData.append("hasPatio", hasPatio)
      formData.append("hasFireplace", hasFireplace)
      formData.append("hasKitchen", hasKitchen)
      await dispatch(


        


        editGetaway(formData)
        ).catch(async (res) => {
          // const data = await res.json();if (data && data.errors) setErrors(data.errors);
        });
        await dispatch(loadGetaways()).then((res) => dispatch (authenticate())).then((res) => history.push("/profile"))
    }}
    // if(!errors.length){
    //   await dispatch(
    //     editGetaway({address, city, state, latitude, longitude, name, price, description, numGuests, numBeds, numBaths,  numBedrooms, userId, img1, img2, img3, img4, img5, getawayId, hasHotTub, hasWifi, hasPatio, hasKitchen, hasFireplace })
    //     ).catch(async (res) => {
    //       const data = await res.json();if (data && data.errors) setErrors(data.errors);
    //     });
    //     await dispatch(loadGetaways()).then((res) => dispatch (authenticate())).then((res) => history.push("/profile"))
    //     }
    // }
  return (
    <div className='formWrapper'>
    <form className="getawayForm" onSubmit={ (e) => handleEditGetaway(e)}>
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
          id='address'
          value={address}
          onChange={(e) => {setAddress(e.target.value)}}
        />
      </div>

      <div>
        <label htmlFor='city'>City</label>
        <input
          name='city'
          id='city'
          type='text'
          value={city}
          onChange={(e) => {setCity(e.target.value)}}
        />
      </div>

      <div>
        <label htmlFor='state'>State</label>
        <input
          name='state'
          id='state'
          type='text'
          value={state}
          onChange={(e) => {setState(e.target.value)}}
        />
      </div>


      <div>
        <label htmlFor='bedrooms'>Number of bedrooms</label>
        <input
          name='bedrooms'
          id='bedrooms'
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
          id='beds'
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
          id='bathrooms'
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
          id='guests'
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
          id='name'
          type='text'
          value={name}
          onChange={(e) => {setName(e.target.value)}}
        />
      </div>




      <div className="textareaFormField">
        <label htmlFor='description'>Getaway description </label>
        <textarea
          name='description'
          id='description'
          type='text'
          value={description}
          onChange={(e) => {setDescription(e.target.value)}}
        />
      </div>

      <div>
        <label htmlFor='price'>Cost per night</label>
        <input
          name='price'
          id='price'
          min="1"
          type='number'
          value={price}
          onChange={(e) => {setPrice(e.target.value)}}
        />
      </div>

      <fieldset className="amenities-fieldset" id = "amenities-fieldset">              
    <legend className="amenities-fieldset">Amenities</legend>             
    <input type="checkbox" id='hottub' checked={hasHotTub} onChange={(e) => {setHasHotTub(!hasHotTub)}}/>Hot tub
    <input type="checkbox" id='wifi' checked={hasWifi} onChange={(e) => {setHasWifi(!hasWifi)}}/>WiFi  
    <input type="checkbox" id='patio' checked={hasPatio} onChange={(e) => {setHasPatio(!hasPatio)}}/>Patio
    <input type="checkbox" id='kitchen' checked={hasKitchen} onChange={(e) => {setHasKitchen(!hasKitchen)}}/> Kitchen
    <input type="checkbox" id='fireplace' checked={hasFireplace} onChange={(e) => {setHasFireplace(!hasFireplace)}}/>Fireplace            
                    
  </fieldset> 

      {/* <div className="getawayImgFields">
        <label htmlFor='imgUrl' className={`is-red-${validImg1}`}>Image URL</label>
        <input id='img1' type="url" className="IMGS" name="imgUrl" value={img1}  onBlur={img1IsValid} onChange={(e)=>{setImg1(e.target.value)}} />

      </div>



       <div className="getawayImgFields">
        <label htmlFor='imgUrl' className={`is-red-${validImg2}`}>Image URL</label>
        <input id='img2' value={img2} className="IMGS" type="url" name="imgUrl" onBlur={img2IsValid} onChange={(e)=>{setImg2(e.target.value)}} />

      </div>


      <div className="getawayImgFields">
        <label htmlFor='imgUrl' className={`is-red-${validImg3}`}>Image URL</label>
        <input type="url" id='img3' value={img3}  className="IMGS" name="imgUrl" onBlur={img3IsValid}   onChange={(e)=>{setImg3(e.target.value)}} />

      </div>


      <div className="getawayImgFields">
        <label htmlFor='imgUrl' className={`is-red-${validImg4}`}>Image URL</label>
        <input type="url" id='img4' value={img4}  className="IMGS" name="imgUrl" onBlur={img4IsValid}   onChange={(e)=>{setImg4(e.target.value)}} />

      </div>

      <div className="getawayImgFields">
        <label htmlFor='imgUrl' className={`is-red-${validImg5}`}>Image URL</label>
        <input type="url" id='img5' className="IMGS" name="imgUrl" value={img5}    onBlur={img5IsValid} onChange={(e)=>{setImg5(e.target.value)}} />

      </div> */}



      <div className="getawayImgFields">
        
        <i class="fa fa-camera" onClick={handleImg1Click}></i>
        <input type="file" id="img1Upload" className="fas fa-file-upload" name="imgUrl" accept=".jpg, .png, .jpeg"  onChange={(e)=>{handleSetImg1(e)}} />
        {img1Preview ? <img src={img1Preview} className="getawayImageUpload" alt="" /> : <span>Upload an image</span>}

      </div>

      <div className="getawayImgFields">
        
        <i class="fa fa-camera" onClick={handleImg2Click}></i>
        <input type="file" id="img2Upload" className="fas fa-file-upload" name="imgUrl" accept=".jpg, .png, .jpeg"  onChange={(e)=>{handleSetImg2(e)}} />
        {img2Preview ? <img src={img2Preview} className="getawayImageUpload" alt="" /> : <span>Upload an image</span>}

      </div>

      <div className="getawayImgFields">
        
        <i class="fa fa-camera" onClick={handleImg3Click}></i>
        <input type="file" id="img3Upload" className="fas fa-file-upload" name="imgUrl" accept=".jpg, .png, .jpeg"  onChange={(e)=>{handleSetImg3(e)}} />
        {img3Preview ? <img className="getawayImageUpload" src={img3Preview} alt="" /> : <span>Upload an image</span>}

      </div>

      <div className="getawayImgFields">
        
        <i class="fa fa-camera" onClick={handleImg4Click}></i>
        <input type="file" id="img4Upload" className="fas fa-file-upload" name="imgUrl" accept=".jpg, .png, .jpeg"  onChange={(e)=>{handleSetImg4(e)}} />
        {img4Preview ? <img src={img4Preview} alt="" className="getawayImageUpload" /> : <span>Upload an image</span>}

      </div>

      <div className="getawayImgFields">
        
        <i class="fa fa-camera" onClick={handleImg5Click}></i>
        <input type="file" id="img5Upload" className="fas fa-file-upload" name="imgUrl" accept=".jpg, .png, .jpeg"  onChange={(e)=>{handleSetImg5(e)}} />
        {img5Preview ? <img src={img5Preview} className="getawayImageUpload" alt="" /> : <span>Upload an image</span>}

      </div>

      <div className="submitImgFlexbox">
      <div className="maybe" id="containerForgetawayImgsSubmissions">
        
        <div className="maybe2" id="getawayImgsSubmissions">

        </div>
      </div>
      </div>
      


      <div>
        <button type="submit" id='edit-getaway-submit-button' disabled={errors.length ? true : false}className="createGetawaySubmitButton">Edit Getaway</button>
      </div>
      </div>

      </fieldset>


    </form>
    </div>
  );
};
