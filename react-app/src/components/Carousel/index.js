import React from 'react';
import Carousel from 'react-gallery-carousel';
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import BrowseGetawaysButton from '../BrowseGetawaysButton'
const GetawayCarousel = () => {
    const getawaysObject = useSelector(state => state.getaways);
    const arrayOfGetaways = Object.values(getawaysObject)
    const randomGetaway = arrayOfGetaways[Math.floor(Math.random() * arrayOfGetaways.length)];
    const randomGetawayImagesObjs = Object.values(randomGetaway.images);
    const goodImages =[]
    for (let index = 0; index < randomGetawayImagesObjs.length; index++) {
        const imageObj = randomGetawayImagesObjs[index];
        const url = imageObj.url
        if (url && url.includes("w=720")) {
            goodImages.push(url)
        }   
    }

  const images = goodImages.map((url) => ({
    src: `${url}`
  }));

  return (
      <>
    <Carousel isAutoPlaying={true} images={images} style={{ height: 620, width: 800 }} autoPlayInterval={3500} />
    <div className="getawayBlurb">
            <p>{`Welcome to Mountaintop! Mountaintop is your destination for booking the most beautiful getaways in the Great Smoky Mountains! This getaway is ${randomGetaway.name} and houses up to ${randomGetaway.numGuests} guests.`}</p>
            <div className="browseGetawaysContainer">
            <NavLink to={`/getaways/${randomGetaway.id}`}>

            <button className="viewGetawayButton" id="getawayBlurb">Check out this getaway</button>
            </NavLink>
            <BrowseGetawaysButton/>

            </div>
        </div>
    </>
  );
};

export default GetawayCarousel;
