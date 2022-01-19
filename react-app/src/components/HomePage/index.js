import React from 'react';
import BrowseGetawaysButton from '../BrowseGetawaysComponents/BrowseGetawaysButton';
import MountainsImage from '../assets/pexels-kalen-kemp-9560057.jpg'
export const HomePage = () => {
    return (<div className="splashContainer">
        <img src={MountainsImage}  className={"splashBackground"}alt="" />
        <div className="splashBlurb">
            <span className="splashText">The mountains are calling.</span>
            <br/>
            <BrowseGetawaysButton/>
        </div>
        </div>)        
}
