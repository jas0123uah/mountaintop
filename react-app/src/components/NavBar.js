
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import LoginFormModal from './LoginFormModal';
import SignUpFormModal from './SignUpModal'
import { useDispatch, useSelector } from "react-redux";
const NavBar = () => {
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  return (
    <nav className="navBar">
      <ul className="navBar-list" id="nav-list">
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            <i class="fas fa-mountain fa-3x"></i>
          </NavLink>
        </li>
        <li>
          <input type="search" name="" id="" className="searchBar" />
        </li>
        <div className="signuploginicons">
        <li>
            {user ?  <NavLink to="/profile" className="submitButton"> <i class="fas fa-home fa-3x"></i></NavLink> : <SignUpFormModal/>}          
        </li>
        <li>
          {user ?  <LogoutButton/> :  <LoginFormModal/> }
         


        </li>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
