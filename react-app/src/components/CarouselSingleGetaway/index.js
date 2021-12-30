import React from 'react';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import { useSelector } from "react-redux";
import {  useParams } from 'react-router-dom';
const CarouselSingleGetaway = () => {
    const getawaysObject = useSelector(state => state.getaways);
    const { getawayId }  = useParams();
    const currentGetaway = getawaysObject[getawayId];
    const currentGetawayImagesObjs = Object.values(currentGetaway.images)
    const goodImages =[]
    for (let index = 0; index < currentGetawayImagesObjs.length; index++) {
        const imageObj = currentGetawayImagesObjs[index];
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
    </>
  );
};

export default CarouselSingleGetaway;
