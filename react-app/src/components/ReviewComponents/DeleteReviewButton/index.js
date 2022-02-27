import {deleteReview} from '../../../store/getaways'
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import React, { useState } from 'react';
import {loadGetaways} from '../../../store/getaways'
import {authenticate} from '../../../store/session'
export const DeleteReviewButton = ({reservation}) =>{
    const [errors, setErrors] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleDeleteReview = async(e) =>{
         e.preventDefault()
         setErrors([])
        const deletedReview = await dispatch(deleteReview(reservation.reviewId))
        if (deletedReview.errors) {
            return setErrors(deletedReview.errors)}
        await dispatch(loadGetaways())
        await dispatch(authenticate())
        history.push('/profile/previousreservations/')
    }
    const deleteButton = <button onClick={handleDeleteReview} className="DeleteButton delete-review-button">Delete Review</button>
    return (
        <>
        {reservation.reviewId != null ? deleteButton : null }
        </>
    )

}
