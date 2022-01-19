import React from 'react';
import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';
import 'react-gallery-carousel/dist/index.css';
import {AllUserGetaways} from '../UserGetawaysSideBar'
export const SideBar = () => {  
  const user = useSelector(state => state.session.user);
  return (
    <div className='profileSidebar'>
      <div className="userInfo">

      <h1>{`Hello ${user.firstName}!`}</h1>
      <img className='profilePicture' alt={`${user.firstName}'s profile image`} src={user.profilePictureUrl} ></img>
      <br></br>
      <NavLink to="/getaways/new/">
        <button className='addNewGetaway'>
          <i className="fas fa-plus"></i> Add New Getaway
        </button>
      </NavLink>
      </div>
      <h2>My Getaways:</h2>
      <AllUserGetaways/>
    </div>
  );
};
export default SideBar;
