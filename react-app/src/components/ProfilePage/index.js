import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, NavLink, Link } from 'react-router-dom';
import {createGetaway, deleteGetaway } from '../../store/getaways'
import './carousel.css'
import { UpcomingUserReservations } from '../UpcomingUserReservations';
import { PreviousUserReservations } from '../PreviousReservations';
import {UpcomingUserReservationsCarousel} from '../UpcomingReservationsCarousel'
export const ProfilePage = () => {
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


  const createGetawayDiv = (item, prevSlide , nextSlide) => {
      return (
        <>
        <li id={`carouselSlide${item.id}`} key={item.id} tabIndex="0" className="carouselSlide">
          <div className="carouselSnapper">
            <h1>{item.name}</h1>
            <img className="carouselImg" src={Object.values(item.images)[0]?.url}></img>
            <NavLink to={`/getaways/${item.id}/edit`}><button>Edit Getaway</button></NavLink>

          <form onSubmit={(item) =>{handleDeleteGetaway(item.currentTarget.dataset.id)}} data-id={item.id}>
            <button className="DeleteButton"type="submit">Delete Getaway</button>
          </form>

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
    <>
    <div className="profileContainer">
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
      {userGetaways.length? imageCarousel : null}
    </div>

    <div className="profileMainContent">
      <div className="UpcomingReservations">
      <h1> Upcoming Reservations</h1>
        <UpcomingUserReservations></UpcomingUserReservations>
      </div>
    </div>
    <div className="UpcomingReservations" id="previousReservations">
    <h1>Previous Reservations</h1>
    <PreviousUserReservations/>
    </div>
    </div>
    <UpcomingUserReservationsCarousel/>
    </>
  );
};
export default ProfilePage;
