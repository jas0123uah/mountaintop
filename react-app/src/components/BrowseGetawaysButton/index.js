import React, { useState, useEffect } from 'react';
import { browseGetaways } from '../../store/search';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function BrowseGetawaysButton() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const history = useHistory()


  const handleBrowseGetaways = async (e) => {
    e.preventDefault();
    setErrors([]);
    await dispatch(browseGetaways());
    history.push('/browse')
  };
  return (
    <button onClick={handleBrowseGetaways} className="browseGetawaysbtn">Browse Getaways</button>
  );
}

export default BrowseGetawaysButton;
