
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import LoginFormModal from './LoginFormModal';
import SignUpFormModal from './SignUpModal'
const NavBar = () => {
  const displayLoginandSignupMenu = (e) =>{
    return (
      <div>
        <button> Sign up</button>
        <button></button>
      </div>
    )

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
          <input type="search" name="" id="" className="searchBar" />
        </li>
        <div className="signuploginicons">
        <li>
            <SignUpFormModal/>          
        </li>
        <li>
            <LoginFormModal></LoginFormModal>

        </li>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
