//import '../../../node_modules/mdbootstrap/css/bootstrap.css'
// import ProfileButton from '../ProfileHamburger'
import {searchGetaways} from '../../store/search'
import { useDispatch, useSelector} from "react-redux";

import { NavLink, useHistory, useLocation } from 'react-router-dom';
import React, {useState} from 'react';
import LogoutButton from '../auth/LogoutButton';
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpModal'
import * as sessionActions from "../../store/session";

import './j.css'



export const MobileNavBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user);
    const [disp, setDisp] = useState("none");
    const [searchTerm, setSearchTerm] = useState("");
    const onSearch = async (e) => {
    e.preventDefault();
    await dispatch(searchGetaways(searchTerm))
    history.push(`/search/${searchTerm}`);

  }
  const demoLogin = async () =>{
    await dispatch(
      sessionActions.login("demo@aa.io" , "password")
    );
    
    history.push("/profile/getaways/");

  
  };

  const handleEnter = async (e) => {
    if (e.charCode == 13) {
      await dispatch(searchGetaways(searchTerm))
    history.push(`/search/${searchTerm}`);
    }
  };
    const adjustHamburger =() =>{
        const newdisp = disp == 'none'? 'block' : 'none'
        console.log(newdisp)
        setDisp(newdisp);
    }
    return(
<div class="topnav">
    <NavLink id="logo" to='/' exact={true} activeClassName='active'>
            <i  class="fas fa-mountain fa-2x"></i>
            
    </NavLink>

    {/* <div className="search-container">

          <input type="search" name="" id="" className="searchBar" placeholder="Find your next getaway..." value={searchTerm} onKeyPress={handleEnter}  onChange={event => setSearchTerm(event.target.value)}  />
         <i class="fa fa-search search-icon" onClick={onSearch} ></i>
          </div> */}
  
  <div id="myLinks" style={{ display:disp}} >
    <NavLink  to='/' exact={true} activeClassName='active'>
            Home
    </NavLink>
    {/* <NavLink id="logo" to='/profile' exact={true} activeClassName='active'>
            Profile
    </NavLink> */}
    {user ?  <NavLink to="/profile/getaways/" className="submitButton" id="home-button">My Getaways</NavLink> : null} 
    {user ?  <NavLink to="/profile/reservations/" className="submitButton" id="home-button">My Reservations</NavLink> : <SignUpFormModal/>}   
    {user ?  <LogoutButton/> :  <LoginFormModal/> }
    {user ? null :<span id="demo-button-mobile" onClick={demoLogin}> Demo user</span>}  
  </div>
  <a href="javascript:void(0);" class="icon" id="burger" style={{ fontSize:29}} onClick={adjustHamburger}>
    <i class="fa fa-bars"></i>
  </a>
</div>

    )
    
//     const [searchTerm, setSearchTerm] = useState("");
//     const dispatch = useDispatch();
//     const history = useHistory();
//     const onSearch = async (e) => {
//     e.preventDefault();
//     await dispatch(searchGetaways(searchTerm))
//     history.push(`/search/${searchTerm}`);}

//     const handleEnter = async (e) => {
//     if (e.charCode == 13) {
//       await dispatch(searchGetaways(searchTerm))
//     history.push(`/search/${searchTerm}`);
//     }
//   };
//     return(
    
// <nav>
//   <div className="search-container">

//           <input type="search" name="" id="" className="searchBar" placeholder="Find your next getaway..." value={searchTerm} onKeyPress={handleEnter}  onChange={event => setSearchTerm(event.target.value)}  />
//          <i class="fa fa-search search-icon" onClick={onSearch} ></i>
//           </div>
// <ProfileButton/>
// </nav>)
}
