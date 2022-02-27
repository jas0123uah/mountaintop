
import React, {useState, useEffect} from 'react';
import {AmenitiesFilterNavBar} from '../components/AmenityComponents/AmenitiesFilterNavBar'
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import LoginFormModal from './LoginFormModal';
import SignUpFormModal from './SignUpModal'
import * as sessionActions from "../store/session";
import useDebounce from '../utils/useDebounce'
import { useDispatch, useSelector } from "react-redux";
import {searchGetaways} from "../store/search"
const NavBar = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const[scrolled, setScrolled] = useState(false);

  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(
    () => {
      // Make sure we have a value (user has entered something in input)
      if (debouncedSearchTerm) {
        // Set isSearching state
        setIsSearching(true);
        // Fire off our API call

        dispatch(searchGetaways(searchTerm)).then(result => {
          setIsSearching(false);
          history.push()
        })

        history.push(`/search/${searchTerm}`);

        // searchCharacters(debouncedSearchTerm).then(results => {
        //   // Set back to false since request finished
        //   setIsSearching(false);
        //   // Set results state
        //   setResults(results);
        // });
      } 
    },
    // This is the useEffect input array
    // Our useEffect function will only execute if this value changes ...
    // ... and thanks to our hook it will only change if the original ...
    // value (searchTerm) hasn't changed for more than 500ms.
    [debouncedSearchTerm]
  );


   const changeLogo = () => {
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
  
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const demoLogin = async () =>{
    await dispatch(
      sessionActions.login("demo@aa.io" , "password")
    );
    
    history.push("/profile/getaways/");

  
  };
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
  return (
    <div className="navContainer">

    <nav className={`navBar scrolledNavbar-${scrolled}`}>
      <ul className="navBar-list" id="nav-list">
        <li>
          <NavLink id="logo" to='/' exact={true} activeClassName='active'>
            <i  class="fas fa-mountain fa-3x"></i>
          </NavLink>
        </li>
        <li>
          <div className="search-container">

          <input type="search" name="" id="" className="searchBar" placeholder="Find your next getaway..." value={searchTerm} onKeyPress={handleEnter}  onChange={event => setSearchTerm(event.target.value)}  />
         <i class="fa fa-search search-icon" onClick={onSearch} ></i>
          </div>
        </li>
        <div className="signuploginicons">
        <li>
            {user ?  <NavLink to="/profile" className="submitButton" id="home-button"> <i class="fas fa-home fa-3x"></i></NavLink> : <SignUpFormModal/>}          
        </li>
        <li>
          {user ? null :<button id="demo-button" onClick={demoLogin}> Demo user</button>}         
        </li>
        <li>
          {user ?  <LogoutButton/> :  <LoginFormModal/> }

        </li>
        </div>
      {location.pathname.includes("/search/")||location.pathname.includes("/browse") ?  <AmenitiesFilterNavBar/>: null}
      </ul>
    </nav>
    </div>
  );
}

export default NavBar;
