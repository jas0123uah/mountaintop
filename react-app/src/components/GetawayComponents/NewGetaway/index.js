import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import {createGetaway} from '../../../store/getaways'
import {loadGetaways} from '../../../store/getaways'
import {authenticate} from '../../../store/session'
import {checkURL} from '../../../utils/helperFunctions'
import $ from 'jquery'
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
  const [img1, setImg1] = useState('')
  const [img2, setImg2] = useState('')
  const [img3, setImg3] = useState('')
  const [img4, setImg4] = useState('')
  const [img5, setImg5] = useState('')
  const [img1Preview, setImg1Preview] = useState('')
  const [img2Preview, setImg2Preview] = useState('')
  const [img3Preview, setImg3Preview] = useState('')
  const [img4Preview, setImg4Preview] = useState('')
  const [img5Preview, setImg5Preview] = useState('')
  
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
  
  
  const [validImg1, setValidImg1] = useState(true)
  const [validImg2, setValidImg2] = useState(true)
  const [validImg3, setValidImg3] = useState(true)
  const [validImg4, setValidImg4] = useState(true)
  const [validImg5, setValidImg5] = useState(true)
  const [hasHotTub, setHasHotTub] = useState(false)
  const [hasWifi, setHasWifi] = useState(false)
  const [hasPatio, setHasPatio] = useState(false)
  const [hasFireplace, setHasFireplace] = useState(false)
  const [hasKitchen, setHasKitchen] = useState(false)

  const handleImg1Click = () => {
    $('#img1Upload').trigger('click')

  }

  // const img1IsValid = (img) => {
  //   if(!img.length){
  //     setValidImg1(true)
  //     return
  //   }
  //   if (img.length && checkURL(img) && /^(ftp|http|https):\/\/[^ "]+$/.test(img) == true ) {
  //     setValidImg1(true)
  //     return 
  //   }
  //   setValidImg1(false)
  // }
  // const img2IsValid = (img) => {
  //   if(!img.length){
  //     setValidImg2(true)
  //     return
  //   }
  //   if (img.length && checkURL(img) && /^(ftp|http|https):\/\/[^ "]+$/.test(img) == true ) {
  //     setValidImg2(true)
  //     return 
  //   }
  //   setValidImg2(false)
  // }
  // const img3IsValid = (img) => {
  //   if(!img.length){
  //     setValidImg3(true)
  //     return
  //   }
  //   if (img.length && checkURL(img) && /^(ftp|http|https):\/\/[^ "]+$/.test(img) == true) {
  //     setValidImg3(true)
  //     return 
  //   }
  //   setValidImg3(false)
  // }

  // const img4IsValid = (img) => {
  //   if(!img.length){
  //     setValidImg4(true)
  //     return
  //   }
  //   if (img.length && checkURL(img) && /^(ftp|http|https):\/\/[^ "]+$/.test(img) == true) {
  //     setValidImg4(true)
  //     return 
  //   }
  //   setValidImg4(false)
  // }

  // const img5IsValid = (img) => {
  //   if(!img.length){
  //     setValidImg5(true)
  //     return
  //   }
  //   if (img.length && checkURL(img) && /^(ftp|http|https):\/\/[^ "]+$/.test(img) == true) {
  //     setValidImg5(true)
  //     return 
  //   }
  //   setValidImg5(false)
  // }

  // useEffect(() => {
  //   img1IsValid(img1)
  //   img2IsValid(img2)
  //   img3IsValid(img3)
  //   img4IsValid(img4)
  //   img5IsValid(img5)

  // }, [img1, img2, img3, img4, img5])
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
    const getaway = {name, address, city, state, name, price, description, numGuests, numBeds, numBaths, numBedrooms, img1, img2, img3, img4, img5}
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



  const user = useSelector(state => state.session.user);
  const userId = user?.id

  const dispatch = useDispatch();
  const history = useHistory();


  
  

  const handleSubmitGetaway = async (e) => {
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
      formData.append("country", "United States")

      formData.append("hasHotTub", hasHotTub)
      formData.append("hasWifi", hasWifi)
      formData.append("hasPatio", hasPatio)
      formData.append("hasFireplace", hasFireplace)
      formData.append("hasKitchen", hasKitchen)
      await dispatch(


        


        createGetaway(formData)
        ).catch(async (res) => {
          const data = await res.json();if (data && data.errors) setErrors(data.errors);
        });
        await dispatch(loadGetaways()).then((res) => dispatch (authenticate())).then((res) => history.push("/profile"))
        }
    // if(!errors.length){
    //   await dispatch(
    //     createGetaway({address, city, state, latitude, longitude, name, price, description, numGuests, numBeds, numBaths,  numBedrooms, userId, img1, img2, img3, img4, img5,  hasHotTub, hasWifi, hasPatio, hasKitchen, hasFireplace })
    //     ).catch(async (res) => {
    //       const data = await res.json();if (data && data.errors) setErrors(data.errors);
    //     });
    //     await dispatch(loadGetaways()).then((res) => dispatch (authenticate())).then((res) => history.push("/profile"))
    //     }
    }
  return (
    <div className='formWrapper'>
    <form onSubmit={ (e) => handleSubmitGetaway(e)} className='getawayForm'>
      <fieldset className='formflex'>
        <legend>New Getaway</legend>
        <div className="form-fields-flex">



      <div className="formErrors">
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor='address'>Address</label>
        <input
          id='address'
          name='address'
          type='text'
          value={address}
          onChange={(e) => {setAddress(e.target.value)}}
        />
      </div>

      <div>
        <label htmlFor='city'>City</label>
        <input
          id='city'
          name='city'
          type='text'
          value={city}
          onChange={(e) => {setCity(e.target.value)}}
        />
      </div>

      <div>
        <label htmlFor='state'>State</label>
        <input
          id='state'
          name='state'
          type='text'
          value={state}
          onChange={(e) => {setState(e.target.value)}}
        />
      </div>


      <div>
        <label htmlFor='bedrooms'>Number of bedrooms</label>
        <input
          id='bedrooms'
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
          id='beds'
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
          id='bathrooms'
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
          id='guests'
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
          id='name'
          name='name'
          type='text'
          value={name}
          onChange={(e) => {setName(e.target.value)}}
        />
      </div>




      <div className="textareaFormField">
        <label htmlFor='description'>Getaway description </label>
        <textarea
          id='description'
          name='description'
          type='text'
          value={description}
          onChange={(e) => {setDescription(e.target.value)}}
        />
      </div>
      

      <div>
        <label htmlFor='price'>Cost per night</label>
        <input
          id='price'
          name='price'
          min="100"
          type='number'
          value={price}
          onChange={(e) => {setPrice(e.target.value)}}
        />
      </div>

    <fieldset className="amenities-fieldset" id="amenities-fieldset">              
    <legend>Amenities</legend>             
    <input id='hottub' type="checkbox" checked={hasHotTub} onChange={(e) => {setHasHotTub(!hasHotTub)}}/>Hot tub
    <input id='wifi' type="checkbox" checked={hasWifi} onChange={(e) => {setHasWifi(!hasWifi)}}/>WiFi  
    <input id='patio' type="checkbox" checked={hasPatio} onChange={(e) => {setHasPatio(!hasPatio)}}/>Patio
    <input id='kitchen' type="checkbox" checked={hasKitchen} onChange={(e) => {setHasKitchen(!hasKitchen)}}/> Kitchen
    <input id='fireplace' type="checkbox" checked={hasFireplace} onChange={(e) => {setHasFireplace(!hasFireplace)}}/>Fireplace            
                    
  </fieldset> 



      <div className="getawayImgFields">
        
        <i class="fa fa-camera" onClick={handleImg1Click}></i>
        <input type="file" id="img1Upload" className="fas fa-file-upload" name="imgUrl" accept=".jpg, .png, .jpeg"  onChange={(e)=>{handleSetImg1(e)}} />
        {img1 ? <img src={img1Preview} className="getawayImageUpload" alt="" /> : <span>Upload an image</span>}

      </div>

      <div className="getawayImgFields">
        
        <i class="fa fa-camera" onClick={handleImg2Click}></i>
        <input type="file" id="img2Upload" className="fas fa-file-upload" name="imgUrl" accept=".jpg, .png, .jpeg"  onChange={(e)=>{handleSetImg2(e)}} />
        {img2 ? <img src={img2Preview} className="getawayImageUpload" alt="" /> : <span>Upload an image</span>}

      </div>

      <div className="getawayImgFields">
        
        <i class="fa fa-camera" onClick={handleImg3Click}></i>
        <input type="file" id="img3Upload" className="fas fa-file-upload" name="imgUrl" accept=".jpg, .png, .jpeg"  onChange={(e)=>{handleSetImg3(e)}} />
        {img3 ? <img className="getawayImageUpload" src={img3Preview} alt="" /> : <span>Upload an image</span>}

      </div>

      <div className="getawayImgFields">
        
        <i class="fa fa-camera" onClick={handleImg4Click}></i>
        <input type="file" id="img4Upload" className="fas fa-file-upload" name="imgUrl" accept=".jpg, .png, .jpeg"  onChange={(e)=>{handleSetImg4(e)}} />
        {img4 ? <img src={img4Preview} alt="" className="getawayImageUpload" /> : <span>Upload an image</span>}

      </div>

      <div className="getawayImgFields">
        
        <i class="fa fa-camera" onClick={handleImg5Click}></i>
        <input type="file" id="img5Upload" className="fas fa-file-upload" name="imgUrl" accept=".jpg, .png, .jpeg"  onChange={(e)=>{handleSetImg5(e)}} />
        {img5 ? <img src={img5Preview} className="getawayImageUpload" alt="" /> : <span>Upload an image</span>}

      </div>







      



       {/* 
       <div className="getawayImgFields">
        <label htmlFor='imgUrl' className={`is-red-${validImg1}`}>Image URL</label>
        <input id='img1' type="url" className={`IMGS`} name="imgUrl"   onBlur={(e)=>{setImg1(e.target.value)}} />

      </div>
       
       
       <div className="getawayImgFields">
        <label htmlFor='imgUrl' className={`is-red-${validImg2}`}>Image URL</label>
        <input id='img2' className="IMGS" type="url" name="imgUrl"  onBlur={(e)=>{setImg2(e.target.value)}} />

      </div>


      <div className="getawayImgFields">
        <label htmlFor='imgUrl' className={`is-red-${validImg3}`}>Image URL</label>
        <input id='img3' type="url" className="IMGS" name="imgUrl"   onBlur={(e)=>{setImg3(e.target.value)}} />

      </div>


      <div className="getawayImgFields">
        <label htmlFor='imgUrl' className={`is-red-${validImg4}`}>Image URL</label>
        <input id='img4' type="url" className="IMGS" name="imgUrl"   onBlur={(e)=>{setImg4(e.target.value)}} />

      </div>

      <div className="getawayImgFields">
        <label htmlFor='imgUrl' className={`is-red-${validImg5}`}>Image URL</label>
        <input id='img5'type="url" className="IMGS" name="imgUrl"   onBlur={(e)=>{setImg5(e.target.value)}} />

      </div> */}

      
      <div className="submitImgFlexbox">
      <div className="maybe" id="containerForgetawayImgsSubmissions">
        
        <div className="maybe2" id="getawayImgsSubmissions">

        </div>
      </div>
      </div>
      


      <div>
        <button type="submit" id='create-getaway-submit-button' disabled={errors.length ? true : false}className="createGetawaySubmitButton">Create Getaway</button>
      </div>
        </div>

      </fieldset>


    </form>
    </div>
  );
};
