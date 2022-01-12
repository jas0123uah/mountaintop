import React from 'react';
import GetawayCarousel from "../Carousel";
import BrowseGetawaysButton from '../BrowseGetawaysButton';
import MountainsImage from '../assets/pexels-kalen-kemp-9560057.jpg'
export const HomePage = () => {
    return (<div>
        <img src={MountainsImage}  className={"splashBackground"}alt="" />
        <div className="splashBlurb">
            <span className="splashText">The mountains are calling.</span>
            <br/>
            <BrowseGetawaysButton/>
            {/* <button className="browse-button">Browse getaways</button> */}
        </div>
        {/* <GetawayCarousel/> */}
        </div>)
        
}
