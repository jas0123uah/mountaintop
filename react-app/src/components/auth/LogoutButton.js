import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import {useHistory } from 'react-router-dom';
const LogoutButton = () => {
  const history = useHistory();
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/')
  };

  return  <i onClick={onLogout} class="fas fa-sign-out-alt fa-3x"></i> ;
};

export default LogoutButton;
