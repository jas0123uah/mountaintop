

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect , useHistory, useParams} from 'react-router-dom';
import {editGetaway} from '../../store/getaways'
import {loadGetaways} from '../../store/getaways'
import {authenticate} from '../../store/session'
import $ from "jquery";
console.log("LINE 6");
export const EditSingleGetaway = () => {

  const user = useSelector(state => state.session.user);
  const userId = user?.id
  const { getawayId }  = useParams();
  const getawayBeforeEdits = useSelector(state => state.getaways[getawayId]);
  //console.log(getawayBeforeEdits, "LOOK")
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
  //console.log(allImgObjs, 'ALL IMG OBJS')


  console.log(allImgUrls, "ALL IMG URLS")
  // for (let index = 0; index < allImgUrls.length; index++) {
  //   const image = allImgUrls[index]
  //   console.log(image, "IMAGEEEEEE")
  //   const imgNum = index + 1 
  //   if (imgNum == 1) {
  //     setImg1(image)
  //   }else if (imgNum ==2){
  //     setImg2(image)
  //   }else if (imgNum ==3){
  //     setImg3(image)
  //   }else if (imgNum ==4){
  //     setImg4(image)
  //   }else if (imgNum ==5){
  //     setImg5(image)
  //   }else if (imgNum ==6){
  //     setImg6(image)
  //   }else if (imgNum==7){
  //     setImg7(image)
  //   }else if (imgNum==8){
  //     setImg8(image)
  //   }else if (imgNum==9){
  //     setImg9(image)
  //   }else if (imgNum==10){
  //     setImg10(image)
  //   }
    
  
    
  // }

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

    if(numImages < 2){
      errors.push(`Please upload at least 2 images.`)
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

    if(img10.length && (img10 == img1 || img10 == img2 ||img10 == img3 || img10 == img4 || img10 == img5 || img10 == img6 || img10 == img7 || img10 == img8 || img10 == img9)  ){
      errors.push(`You cannot upload the same image twice, ${img10} found twice.`)
    }
    console.log(errors, "ERRORS")
    console.log(errors.length)
    setErrors(errors);
  }, [name, address, city, state, name, price, description, numGuests, numBeds, numBaths, numBedrooms, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10])

  
  //let images = []


  

  const chckErrorsLength = () =>{ 
    console.log(errors.length, "LENGTHHHHHHHHHHHHHHHHH")
    console.log(errors.length !== 0, "BOOLEAN")
    return errors.length !== 0
  }



  const dispatch = useDispatch();
  const history = useHistory();


  
  

  const handleEditGetaway = async (e) => {
    e.preventDefault();
    if(!errors.length){
      await dispatch(
        editGetaway({address, city, state, latitude, longitude, name, price, description, numGuests, numBeds, numBaths,  numBedrooms, userId, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, getawayId })
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

      <div className="getawayImgFields">
        <label htmlFor='imgUrl'>Image URL</label>
        <input type="url" className="IMGS" name="imgUrl" value={img6}    onChange={(e)=>{setImg6(e.target.value)}} />

      </div>

      <div className="getawayImgFields">
        <label htmlFor='imgUrl'>Image URL</label>
        <input type="url" className="IMGS" name="imgUrl" value={img7}   onChange={(e)=>{setImg7(e.target.value)}} />

      </div>

      <div className="getawayImgFields">
        <label htmlFor='imgUrl'>Image URL</label>
        <input type="url" className="IMGS" name="imgUrl" value={img8}   onChange={(e)=>{setImg8(e.target.value)}} />

      </div>

      <div className="getawayImgFields">
        <label htmlFor='imgUrl'>Image URL</label>
        <input type="url" className="IMGS" name="imgUrl"  value={img9}  onChange={(e)=>{setImg9(e.target.value)}} />

      </div>

      <div className="getawayImgFields">
        <label htmlFor='imgUrl'>Image URL</label>
        <input type="url" className="IMGS" name="imgUrl"  value={img10}  onChange={(e)=>{setImg10(e.target.value)}} />

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

      </fieldset>


    </form>
    </div>
  );
};














// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Redirect , useHistory} from 'react-router-dom';
// import {createGetaway} from '../../store/getaways'
// import {createImage} from '../../store/images'
// import { useParams } from 'react-router-dom';
// import $ from "jquery";
// import {editGetaway} from '../../store/getaways'
// console.log("LINE 6");
// export const EditSingleGetaway = () => {
//   const user = useSelector(state => state.session.user);
//   const { getawayId }  = useParams();
//   const getawayBeforeEdits = useSelector(state => state.getaways[getawayId]);
//   const [errors, setErrors] = useState([]);
//   const [address, setAddress] = useState(getawayBeforeEdits.address);
//   const [city, setCity] = useState(getawayBeforeEdits.city)
//   const [state, setState] = useState(getawayBeforeEdits.state);
//   const [latitude, setLatitude] = useState('1.0')
//   const [longitude, setLongitude] = useState('2.0')
//   const [name, setName] =useState(getawayBeforeEdits.name)
//   const [price, setPrice] = useState(getawayBeforeEdits.price)
//   const [description, setDescription] = useState(getawayBeforeEdits.description)
//   const [numGuests, setNumGuests] = useState(getawayBeforeEdits.numGuests)
//   const [numBeds, setNumBeds] = useState(getawayBeforeEdits.numBeds)
//   const [numBaths, setNumBaths] = useState(getawayBeforeEdits.numBaths)
//   const [numBedrooms, setNumBedrooms] = useState(getawayBeforeEdits.numBedrooms)
//   const [newImages, setNewImages] = useState(getawayBeforeEdits.uploadedImages)
//   //let images = []
//   console.log(newImages, "HOOOOOOOOO", typeof newImages)
//   //setNewImages(JSON.parse(newImages))

//   const newImagesHandler = (idx, imgEvent) => {
//     console.log(idx);
//     console.log(imgEvent);
//     const newImgsAsArray = JSON.parse(newImages)
//     newImgsAsArray[idx] =imgEvent.target.value
//     let imgsAstrings = JSON.stringify(newImgsAsArray)
//     setNewImages(imgsAstrings) 

//   }


//   const [numImages, setNumImages] = useState(0)
//   const [prevNumImages, setPrevNumImages] = useState(-1)

//   //const user = useSelector(state => state.session.user);
//   const userId = user?.id

//   const dispatch = useDispatch();
//   const history = useHistory();


//   const evaluateUrlInput = (urlInput, arrayToCheck) =>{
//     let url = urlInput.target.value
//     console.log(url, "PPPPPPPPPPPPPPPPPPPP")
//     if (!isValidImageUrl(url) || arrayToCheck.includes(url)){
//       console.log("XXXXXXXXXXXXXXXXXXXX")
//       console.log("XXXXXXXXXXXXXXXXXXXX")
//       return false
//     }
//     return true

//   }

//   const editNewGetawayAndCollectImages = async () => {
//     const arrayToCheck =[]
//     const submittedImgFields = document.getElementsByClassName('IMGS');
//     console.log(submittedImgFields, "SUBMITTED")
//     for (let index = 0; index < submittedImgFields.length; index++) {
//       const element = submittedImgFields[index];
//       console.log(element.innerText);
//       console.log(element.innerHTML);
//       console.log(element)
//       console.log("LOOK")
//       //const check = evaluateUrlInput(element.innerText, arrayToCheck)
//       //console.log(check);
//       //console.log(check);
//       // if (check) {
//       //   arrayToCheck.push(element)
//       //   console.log(element, "LOOK JAY, THIS IS IN INPUT")
//       // }else{
//       //   console.log(element)
//       // }
//     }
//     console.log(arrayToCheck, "ARRAY TO CHECK")
//     console.log(arrayToCheck)

//     //setNewImages(arrayToCheck)
//     handleEditGetaway()

//   }

//   const handleEditGetaway = async (e) => {
//     //e.preventDefault()
//     console.log(newImages)
//     console.log("LOOOOOOOOK")
//     console.log(newImages.length)
//   dispatch(editGetaway({ address, city, state, latitude, longitude, name, price, description, numGuests, numBeds, numBaths,  numBedrooms, userId, getawayId, newImages})).catch(
//       async (res) => {
//         const data = await res.json();
//         if (data && data.errors){
//           setErrors(data.errors)
//         }
//       }
//     );
//     history.push(`/`)

//   }
//   const isValidImageUrl = (url) => {
//   if (typeof url !== 'string') {
//     return false;
//   }
//   return (url.match(/^http[^\?]*.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/gmi) !== null);
// }

//   const addImage = async  (newImageUrlInput) =>{ 
//     console.log(newImageUrlInput, "<-------- OVER HEREEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
//     console.log(newImageUrlInput.target.value, "Image url?");
//     const newImageUrl = newImageUrlInput.target.value
//     //console.log(images, "BBBBBBBBBBBBBBBBB")
//     if (isValidImageUrl(newImageUrl)) {
//       //await setImages([...images, newImageUrlInput.target.value])
//       //await setImages(newImageUrlInput.target.value, "IIIIIIIIIIIIIIIIIIIIIIIIIIII")
//       //images.push(newImageUrl)
//       //console.log(images, "LOOK ITS IMAGESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS");
//       console.log(newImageUrlInput.target.value, "TTTTTTTTTTTTTTTTTTTTTTTTTTT");
//       //await setNumImages(images.length)
//       await setPrevNumImages(prevNumImages+1)
//       await addImagesToDOM(newImageUrl)
//     }
//   }
//   const addImagesToDOM = (newImageUrl) =>{
//     console.log(numImages, prevNumImages, "PPPPPPPPPPPPPPPPPPPOOUOIPHPIHPIH");
//     if (numImages > prevNumImages) {
//       const imgFields = document.querySelector(".getawayImgFields")
//       let imgInputFieldContainer=document.createElement("div")
//       imgInputFieldContainer.setAttribute(`data-imageurl`,newImageUrl)
//       let imgInputField= document.createElement('input')
      
      
      
//       let label = document.createElement('label')
//       label.innerText="Image URL"
      
//       label.setAttribute('for', "imgUrl" )
      
      
      
//       imgInputField.type="url"
//       imgInputField.setAttribute('name',"imgUrl")
//       imgInputField.addEventListener('blur', async(newImg) =>{await addImage(newImg)})
//       //imgInputField should be the child of a imgInputFieldContainer and that imgInputFieldContainer should be a child of imgFields
  
  
  
//       imgInputFieldContainer.appendChild(label)
//       imgInputFieldContainer.appendChild(imgInputField)
//       //
//       //imgFields.appendChild(label)


//       imgFields.appendChild(imgInputFieldContainer)

//       //
//       const uploadedImages = document.querySelector('.maybe2')
//       const newImg = document.createElement('img')
//       const newImgDeleteIcon = document.createElement('i')
//       newImgDeleteIcon.classList.add('fas')
//       newImgDeleteIcon.classList.add('fa-times')
//       newImgDeleteIcon.addEventListener('click', (img) => {deleteImg(img)})
//       newImgDeleteIcon.setAttribute(`data-imageurl`,newImageUrl)
//       newImg.src = newImageUrl
//       newImg.classList.add("newGetawayImg")
//       newImg.setAttribute(`data-imageurl`,newImageUrl)
//       uploadedImages.appendChild(newImg)
//       uploadedImages.appendChild(newImgDeleteIcon)
      
//     }

//     const deleteImg = (img) => {
//       //let url = img."data-im"
//       console.log(img, "HEREERETETETE")
//       //let query = document.querySelectorAll(`[data-imageurl]=${img.target.dataset.imageurl}`)
//       let query = document.querySelectorAll("[data-imageurl]")
//       //let elsToRemove = query.filter(result =>  img.target.dataset.imageurl == result.target.dataset.imageurl)
//       console.log(query, "^^^^^^^^^^^^^^^^^^^^^###########");
//       for (let index = 0; index < query.length; index++) {
//         const element = query[index];
//         console.log(element, "YYYYYYYYYYYYYY");
//         console.log(element.getAttribute("class"));
//         let currentImgUrl = element.getAttribute("data-imageurl");
//         if (currentImgUrl == img.target.dataset.imageurl) {
//           element.remove()
//            //images = images.filter(image => 
//           //    image == img.target.dataset.imageurl
//           // )
//           // console.log(images, "AFTER DELLETE")

//         }
          
//         //element.remove()
//         //console.log(element.target.dataset, '@@@');
//       }
//       //let elsToRemove = Array.prototype.slice.call(query).filter(result =>  img.target.dataset.imageurl == result.target.dataset.imageurl)
//       //console.log(elsToRemove);

//     }

//   }
 

//   return (
//     <div className='formWrapper'onSubmit={editNewGetawayAndCollectImages}>
//     <form>
//       <fieldset className='formflex'>
//         <legend>New Getaway</legend>
//       <div>
//         {errors.map((error, ind) => (
//           <div key={ind}>{error}</div>
//         ))}
//       </div>
//       <div>
//         <label htmlFor='address'>Address</label>
//         <input
//           name='address'
//           type='text'
//           value={address}
//           onChange={(e) => {setAddress(e.target.value)}}
//         />
//       </div>

//       <div>
//         <label htmlFor='city'>City</label>
//         <input
//           name='city'
//           type='text'
//           value={city}
//           onChange={(e) => {setCity(e.target.value)}}
//         />
//       </div>

//       <div>
//         <label htmlFor='state'>State</label>
//         <input
//           name='state'
//           type='text'
//           value={state}
//           onChange={(e) => {setState(e.target.value)}}
//         />
//       </div>


//       <div>
//         <label htmlFor='bedrooms'>Number of bedrooms</label>
//         <input
//           name='bedrooms'
//           min="1"
//           type='number'
//           value={numBedrooms}
//           onChange={(e) => {setNumBedrooms(e.target.value)}}
//         />
//       </div>
//       <div>
//         <label htmlFor='beds'>Number of beds</label>
//         <input
//           name='beds'
//           min="1"
//           type='number'
//           value = {numBeds}
//           onChange={(e) => {setNumBeds(e.target.value)}}
//         />
//       </div>

//       <div>
//         <label htmlFor='bathrooms'>Number of bathrooms</label>
//         <input
//           name='bathrooms'
//           type='number'
//           min="1"
//           value={numBaths}
//           onChange={(e) => {setNumBaths(e.target.value)}}
//         />
//       </div>
//       <div>
//         <label htmlFor='guests'> Maximum number of guests</label>
//         <input
//           name='guests'
//           min="1"
//           type='number'
//           value={numGuests}
//           onChange={(e) => {setNumGuests(e.target.value)}}
//         />
//       </div>



//       <div>
//         <label htmlFor='name'>Getaway name</label>
//         <input
//           name='name'
//           type='text'
//           value={name}
//           onChange={(e) => {setName(e.target.value)}}
//         />
//       </div>




//       <div className="textareaFormField">
//         <label htmlFor='description'>Getaway description </label>
//         <textarea
//           name='description'
//           type='text'
//           value={description}
//           onChange={(e) => {setDescription(e.target.value)}}
//         />
//       </div>

//       <div>
//         <label htmlFor='price'>Cost per night</label>
//         <input
//           name='price'
//           min="1"
//           type='number'
//           value={price}
//           onChange={(e) => {setPrice(e.target.value)}}
//         />
//       </div>

//       {JSON.parse(newImages).map((img, idx) => <div className="getawayImgFields">
//         <label htmlFor='imgUrl'>Image URL</label>
//         <input type="url" data-idpos={idx} className="IMGS" name="imgUrl" value={img}   onChange={(newImg) => {newImagesHandler(newImg.target.dataset.idpos, newImg)}} />

//       </div>)}

      
      


//       <div>
//         <button type="submit" className="createGetawaySubmitButton">Create Getaway</button>
//       </div>

//       </fieldset>


//     </form>
//     </div>
//   );
// };
