
import React, {useState, useEffect} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import LoginFormModal from './LoginFormModal';
import SignUpFormModal from './SignUpModal'
import * as sessionActions from "../store/session";
import { useDispatch, useSelector } from "react-redux";
import {searchGetaways} from "../store/search"
const NavBar = () => {
  const [searchTerm, setSearchTerm] = React.useState("Find your next getaway...");
  const[scrolled, setScrolled] = React.useState(false);
  

   const changeLogo = () => {
    console.log(window)
    if (window.scrollY >= 10) {
      setScrolled(true);
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    changeLogo()
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeLogo)
  })
  
  
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const demoLogin = async () =>{
    await dispatch(
      sessionActions.login("demo@aa.io" , "password")
    );
    
    history.push("/profile");

  
  };
  const onSearch = async (e) => {
    e.preventDefault();
    await dispatch(searchGetaways(searchTerm))
    history.push(`/search/${searchTerm}`);

  }
  return (
    <div className="navContainer">

    <nav className={`navBar scrolledNavbar-${scrolled}`}>
      <ul className="navBar-list" id="nav-list">
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            <i class="fas fa-mountain fa-3x"></i>
          </NavLink>
        </li>
        <li>
          <div className="search-container">

          <input type="search" name="" id="" className="searchBar" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
         <i class="fa fa-search search-icon" onClick={onSearch}></i>
          </div>
        </li>
        <div className="signuploginicons">
        <li>
            {user ?  <NavLink to="/profile" className="submitButton"> <i class="fas fa-home fa-3x"></i></NavLink> : <SignUpFormModal/>}          
        </li>
        <li>
          {user ? null :<button id="demo-button" onClick={demoLogin}> Demo user</button>}
          {/* {user ?  <LogoutButton/> :  <LoginFormModal/> } */}
         


        </li>
        <li>
          {user ?  <LogoutButton/> :  <LoginFormModal/> }

        </li>
        </div>
      </ul>
    </nav>
    </div>
  );
}

export default NavBar;
