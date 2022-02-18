import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import {useHistory } from 'react-router-dom';
const LogoutButton = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const [isMobile, setisMobile] = useState(window.matchMedia('screen and (min-device-width : 320px) and (max-width : 768px) and (min-device-height : 480px) and (max-device-height : 1076px)'));

  isMobile.addEventListener('change', (e) => {
    setisMobile((window.matchMedia('screen and (min-device-width : 320px) and (max-width : 768px) and (min-device-height : 480px) and (max-device-height : 1076px)')))
  });
  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/')
  };
  const isMobileLogout = isMobile.matches ?<span onClick={onLogout} className="mobileLogout" id="mobileLogout">Logout</span>: <i onClick={onLogout} class="fas fa-sign-out-alt fa-3x" id="sign-out-button"></i>

  return  isMobileLogout ;
};

export default LogoutButton;
