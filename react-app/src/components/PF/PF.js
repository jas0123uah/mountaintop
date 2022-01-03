

import React, { useState } from 'react';
import NavBar from '../NavBar'
import SideBar from '../SideBar';
import Footer from '../Footer'
import ProfileMainContent from '../ProfileMainContent'
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink, Link } from 'react-router-dom';
import {createGetaway, deleteGetaway } from '../../store/getaways'
import './PF.css'
export const PF = () => {
  const [errors, setErrors] = useState([]);
  const user = useSelector(state => state.session.user);
  const userId = user?.id
  const numUserGetaways = Object.values(user?.getaways).length - 1 ;
  const userGetaways = Object.values(user?.getaways)
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
// return(
// <div class="parent">
// <div class="div1"> <NavBar/> </div>
// <div class="div2"><SideBar/></div>
// <div class="div3"> <Footer/> </div>
// <div class="div4"> <ProfileMainContent/> </div>
// </div>)
// return(
//     <div class="main-content">
// <div class="nav"> <NavBar/> </div>
// <div class="sidebar"><SideBar/></div>
// <div class="footer"> <Footer/> </div>
// <div class="main"> <ProfileMainContent/> </div>
// </div>
// )
return(
    <>
    <div className="containerForSidebarAndMainContent">
<div class="div1"><SideBar></SideBar> </div>
<div class="div2"><ProfileMainContent></ProfileMainContent> </div>
    </div>
</>)
}


{/* <>
    
<div class="div1"><SideBar></SideBar> </div>
<div class="parent">
<div class="div2"><ProfileMainContent></ProfileMainContent> </div>
</div>
</> */}
