
import React, {useState} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import LoginFormModal from './LoginFormModal';
import SignUpFormModal from './SignUpModal'
import * as sessionActions from "../store/session";
import { useDispatch, useSelector } from "react-redux";
const NavBar = () => {
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const demoLogin = async () =>{
    await dispatch(
      sessionActions.login("demo@aa.io" , "password")
    );
    
    history.push("/profile");

  
  };
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
          {user ? null :<button id="demo-button" onClick={demoLogin}> Demo user</button>}
          {user ?  <LogoutButton/> :  <LoginFormModal/> }
         


        </li>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
