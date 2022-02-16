//import '../../../node_modules/mdbootstrap/css/bootstrap.css'
// import ProfileButton from '../ProfileHamburger'
import {searchGetaways} from '../../store/search'
import { useDispatch} from "react-redux";
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import React, {useState} from 'react';
import './j.css'


// function myFunction() {
//   var x = document.getElementById("myLinks");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }


export const MobileNavBar = () => {
    const dispatch = useDispatch();
  const history = useHistory();
    const [disp, setDisp] = useState("none");
    const [searchTerm, setSearchTerm] = useState("");
    const onSearch = async (e) => {
    e.preventDefault();
    await dispatch(searchGetaways(searchTerm))
    history.push(`/search/${searchTerm}`);

  }

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
    <NavLink id="logo" to='/' exact={true} activeClassName='active'>
            Home
    </NavLink>
    <NavLink id="logo" to='/profile' exact={true} activeClassName='active'>
            Profile
    </NavLink>

    {/* <a href="#news">Home</a> */}
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
  <a href="javascript:void(0);" class="icon" style={{ fontSize:29}} onClick={adjustHamburger}>
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
