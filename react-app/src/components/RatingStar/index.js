import React, { useState } from 'react';
export const RatingStar = ({ratingSetter, desiredRating, currentRating}) => {
    const [hovered, setHovered] = useState(false);
    // const filledStar = <i onClick={() => ratingSetter(desiredRating)} className="fa fa-fas fa-star"></i>

    const filledStar = <i onClick={() => ratingSetter(desiredRating)} className={"fa fa-fas fa-star"} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}></i>


    const borderStar = <i onClick={() => ratingSetter(desiredRating)} className={hovered ? "fa fa-fas fa-star":"far fa-star"} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}></i>
    console.log(currentRating, "currentRating", desiredRating, "desiredRating") 
    let starToReturn = currentRating>=desiredRating ? filledStar : borderStar
    console.log(starToReturn, "starToReturn")
    return(starToReturn)
}
