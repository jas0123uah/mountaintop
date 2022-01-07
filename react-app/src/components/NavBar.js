
import React, {useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import LoginFormModal from './LoginFormModal';
import SignUpFormModal from './SignUpModal'
import * as sessionActions from "../store/session";
import { useDispatch, useSelector } from "react-redux";
import {searchGetaways} from "../store/search"
const NavBar = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
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
    <nav className="navBar">
      <ul className="navBar-list" id="nav-list">
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            <i class="fas fa-mountain fa-3x"></i>
          </NavLink>
        </li>
        <li>
          <form onSubmit={onSearch} >
          <input type="search" name="" id="" className="searchBar" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
          <button type="submit" className="search-btn"><i class="fa fa-search"></i></button>
          </form>
        </li>
        <div className="signuploginicons">
        <li>
            {user ?  <NavLink to="/profile" className="submitButton"> <i class="fas fa-home fa-3x"></i></NavLink> : <SignUpFormModal/>}          
        </li>
        <li>
          {user ? null :<button id="demo-button" onClick={demoLogin}> Demo user</button>}
          {user ?  <LogoutButton/> :  <LoginFormModal/> }
         


        </li>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
