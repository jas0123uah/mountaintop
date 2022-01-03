import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink, Link } from 'react-router-dom';
import {createGetaway, deleteGetaway } from '../../store/getaways'
import 'react-gallery-carousel/dist/index.css';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import {useHistory } from 'react-router-dom';
import $ from 'jquery';
import ProfileMainContent from '../ProfileMainContent'
export const SideBar = () => {
    let hostGetawayLoadedinCarousel;
    let HostGetawayTitle
    let hostGetawayH1
    let getawayId
    //this.setState(this.state)
    //const [getawayState, setGetawayState] = useState('');

//     useEffect(() => {
//   const interval = setInterval(() => {
//     if (!window.location.href.includes("profile")) {
//       return () => clearInterval(interval);
      
      
//   }
//     console.log('This will run every second!');
//     hostGetawayLoadedinCarousel=document?.querySelector('[aria-live="polite"] img')
//                HostGetawayTitle = hostGetawayLoadedinCarousel?.getAttribute('HostGetawayTitle')
//                console.log(HostGetawayTitle);
//                getawayId = hostGetawayLoadedinCarousel?.getAttribute('getawayid')
//                console.log(getawayId, "PAGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG");
//                if (!getawayId) {
//                    return
//                }

//                 console.log(hostGetawayLoadedinCarousel)
//                 console.log(hostGetawayLoadedinCarousel?.getAttribute('data-getawayid'))
//                 //let x = hostGetawayLoadedinCarousel.getAttribute('data-getawayid')
//                 //console.log(x)
            
//                 hostGetawayH1 = document.querySelector('.HostGetawayTitle')
//                 hostGetawayH1.innerHTML=HostGetawayTitle

//                 let deleteGetawayBtn = document.querySelector('#deleteGetaway')
            
//                 //console.log(deleteGetawayBtn, "BUTTON");
//                 //console.log(getawayId)
//                 deleteGetawayBtn.setAttribute('data-getawayId', getawayId)
//                 let deleteGetawayForm = document.querySelector('#deleteGetawayForm')
//                 deleteGetawayForm.setAttribute('data-getawayId', getawayId)


//                 let editGetawayBtn = document.querySelector('#editBTN')
//                 let newEdit = <NavLink to={`/getaways/${getawayId}}/edit`}>YAY</NavLink>
//                console.log(getawayId, "JAYYYYYYYYYYYYYYYYYYYY")
//                editGetawayBtn.className = 'visible'



//                console.log(getawayId, "QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ")
//                console.log(`.editbtn${getawayId}`)
//                const activebtn = document.getElementsByClassName(`HostGetawayTitle`)
//                //const x = <NavLink>hello</NavLink>
    


//                //console.log(newEdit, "&&&&&")
//                //setGetawayState(getawayId)
//                 //editGetawayBtn.replaceWith(newEdit)
//                 //console.log(deleteGetawayBtn, "BUTTON");
//                 //console.log(getawayId)
                
//                 //editGetawayBtn.setAttribute('data-getawayId', getawayId)
//                 //editGetawayBtn.setAttribute('href', `/getaways/${getawayId}/edit`)




//   }, 1000);
//   if (!window.location.href.includes("profile")) {
//       return () => clearInterval(interval);
      
      
//   }
// }, []);

    
    if (window.location.href.includes("profile")) {
        //window.location.reload()
        const interval = setInterval(function() {
            //    hostGetawayLoadedinCarousel=document.querySelector('[aria-live="polite"] img')
            //    HostGetawayTitle = hostGetawayLoadedinCarousel.getAttribute('HostGetawayTitle')
            //    getawayId = hostGetawayLoadedinCarousel.getAttribute('getawayid')

            //     console.log(hostGetawayLoadedinCarousel)
            //     console.log(hostGetawayLoadedinCarousel.getAttribute('data-getawayid'))
            //     //let x = hostGetawayLoadedinCarousel.getAttribute('data-getawayid')
            //     //console.log(x)
            
            //     hostGetawayH1 = document.querySelector('.HostGetawayTitle')
            //     hostGetawayH1.innerHTML=HostGetawayTitle

            //     let deleteGetawayBtn = document.querySelector('#deleteGetaway')
            //     //console.log(deleteGetawayBtn, "BUTTON");
            //     //console.log(getawayId)
            //     deleteGetawayBtn.setAttribute('data-getawayId', getawayId)
            //     let deleteGetawayForm = document.querySelector('#deleteGetawayForm')
            //     deleteGetawayForm.setAttribute('data-getawayId', getawayId)


            
            }, 900);
        
    }
    //
    //const [forcereload, setForcereload]=useState(false)
    //setForcereload(!forcereload)
    hostGetawayLoadedinCarousel=document.querySelector('[aria-live="polite"] img')
    console.log("DDDDDDDDDDDDDDDDDDDDDDDD");
    console.log(hostGetawayLoadedinCarousel)
    //if (hostGetawayLoadedinCarousel) {
        //console.log(hostGetawayLoadedinCarousel, "WHATTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT")
       //HostGetawayTitle = hostGetawayLoadedinCarousel.getAttribute('HostGetawayTitle')
       //console.log(HostGetawayTitle, "PPPPPPPPPPP")
    //    if (hostGetawayLoadedinCarousel) {
    //        //getawayId = hostGetawayLoadedinCarousel.dataset.getawayId
    //        //console.log(getawayId, "JAYYYYYY");
    //        const interval = setInterval(function() {
    //            hostGetawayLoadedinCarousel=document.querySelector('[aria-live="polite"] img')
    //            HostGetawayTitle = hostGetawayLoadedinCarousel.getAttribute('HostGetawayTitle')
    //            getawayId = hostGetawayLoadedinCarousel.getAttribute('getawayid')

    //             console.log(hostGetawayLoadedinCarousel)
    //             console.log(hostGetawayLoadedinCarousel.getAttribute('data-getawayid'))
    //             //let x = hostGetawayLoadedinCarousel.getAttribute('data-getawayid')
    //             //console.log(x)
            
    //             hostGetawayH1 = document.querySelector('.HostGetawayTitle')
    //             hostGetawayH1.innerHTML=HostGetawayTitle

    //             let deleteGetawayBtn = document.querySelector('#deleteGetaway')
    //             //console.log(deleteGetawayBtn, "BUTTON");
    //             //console.log(getawayId)
    //             deleteGetawayBtn.setAttribute('data-getawayId', getawayId)
    //             let deleteGetawayForm = document.querySelector('#deleteGetawayForm')
    //             deleteGetawayForm.setAttribute('data-getawayId', getawayId)


            
    //         }, 200);
    //         }
   //}
   
  const [errors, setErrors] = useState([]);
  const [getAwayObj, setGetAwayObj] =useState('')
  const user = useSelector(state => state.session.user);
  const userId = user?.id
  const numUserGetaways = Object.values(user?.getaways).length - 1 ;
  const userGetaways = Object.values(user?.getaways)
  const goodImages= [];
   const history = useHistory()
  for (let index = 0; index < userGetaways.length; index++) {
        const getAwayObj = userGetaways[index];
        console.log(Object.values(getAwayObj.images), "BAHHHHHHHHHHHHHHHH");
        let arrayOfImageObjs = Object.values(getAwayObj.images)
        for (let index = 0; index < arrayOfImageObjs.length; index++) {
            const imageObj = arrayOfImageObjs[index];
            if (imageObj.url.includes("w=720")) {
                goodImages.push({url:imageObj.url, name:getAwayObj.name, getawayId:getAwayObj.id  });
                break;
            }
            
        }
        // const randomImageUrlFromCurrentGetaway= Object.values(getAwayObj.images).find(image=>{image.url.includes("w=720")})
        //goodImages.push(randomImageUrlFromCurrentGetaway)
    }
    console.log(goodImages, "LOOGAGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGK");
    const images = goodImages.map((goodImgAndGetawayName) => ({
    src: `${goodImgAndGetawayName.url}`,
    GO: "POOOOO",
    HostGetawayTitle: `${goodImgAndGetawayName.name}`,
    getawayId:`${goodImgAndGetawayName.getawayId}`,
    
onScroll: () =>{console.log("SLid")},
onAnimationStart: () =>{console.log("SLid")},
onLoad: () =>{console.log("SLid")},
onClick: () =>{console.log("SLid")},
onTransitionEnd: () =>{console.log("SLid")}
  }));
  const children = goodImages.map((url) => (
    `${url}`,
    "<button>LOOOOOOOO</button>"
)) 
  const getPrevandNextIdx = (userGetaways, currentIdx, numUserGetaways)=>{
    let prevSlide;
    let nextSlide;
    if (currentIdx == 0) {
      prevSlide = userGetaways[numUserGetaways]?.id
      nextSlide = userGetaways[currentIdx + 1 ]?.id
    } else if(currentIdx == numUserGetaways){
      prevSlide = userGetaways[currentIdx - 1]?.id
      nextSlide = userGetaways[0].id
    }else{
      prevSlide = userGetaways[currentIdx - 1]?.id
      nextSlide = userGetaways[currentIdx + 1]?.id
    }
    return [prevSlide, nextSlide]
  }

  const dispatch = useDispatch();

  const handleDeleteGetaway = (getawayId) => {
    console.log(getawayId);
    console.log("LOOK");
    dispatch(deleteGetaway(getawayId)).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
    window.location.reload();
  
  }


  const createGetawayDiv = (item, prevSlide , nextSlide) => {
      return (
        <>
        <li id={`carouselSlide${item.id}`} key={item.id} tabIndex="0" className="carouselSlide">
          <div className="carouselSnapper">
            <h1>{item.name}</h1>
            <img className="carouselImg" src={Object.values(item.images)[0]?.url}></img>
            <NavLink to={`/getaways/${item.id}/edit`}><button>Edit Getaway</button></NavLink>

          <form id="deleteGetawayForm" onSubmit={(item) =>{handleDeleteGetaway(item.currentTarget.dataset.id)}} data-id={item.id}>
            <button className="DeleteButton"type="submit" id="deleteGetaway">Delete Getaway</button>
          </form>
          <NavLink to={`/getaways/${item.id}/edit`}><button>Edit Getaway</button></NavLink>

            <a href={`#carouselSlide${prevSlide}`} className="carouselPrev">
            </a>
            <a href={`#carouselSlide${nextSlide}`} className="carouselNext">
            </a>
            
          </div> 
        </li>
      </>)

  }
  const imageCarousel = 
    <section className='carousel'>
      <ol className='carouselViewport'>
        {userGetaways.map((value, idx) => {let [prevSlide, nextSlide] = getPrevandNextIdx(userGetaways, idx, numUserGetaways);return createGetawayDiv(value, prevSlide, nextSlide)})}
      </ol>

    </section>
  return (
    <div className='profileSidebar'>
      <h1>{`Hello ${user.firstName}!`}</h1>
      <img className='profilePicture' src={user.profilePictureUrl} ></img>
      <br></br>
      <NavLink to="/getaways/new/">
        <button className='addNewGetaway'>
          <i className="fas fa-plus"></i> Add New Getaway
        </button>
      </NavLink>
      <h2>My Getaways:</h2>
      <Carousel isAutoPlaying={true} images={images} style={{ height: 320, width: 400 }} autoPlayInterval={3500} />
      <h1 className="HostGetawayTitle">{hostGetawayH1}</h1>

      

    {userGetaways.map(getawayObj => <NavLink to={`/getaways/${getawayObj.id}/edit`} id={`editbtn${getawayObj.id}`} >{`Edit ${getawayObj.id}`}</NavLink>)}

    {userGetaways.map(getawayObj => <form id="deleteGetawayForm" onSubmit={(item) =>{handleDeleteGetaway(item.currentTarget.dataset.id)}} data-id={getawayObj.id}>
            <button className="DeleteButton"type="submit" id="deleteGetaway">Delete Getaway</button>
          </form>)}
    
      
    </div>
  );
};




































export default SideBar;
