// constants
const CREATE_GETAWAY_ = 'getaways/CREATE_GETAWAY_';
const LOAD_GETAWAYS = 'getaways/LOAD_GETAWAYS';
const EDIT_GETAWAY = 'getaways/EDIT_GETAWAY';
const DELETE_GETAWAY = 'getaways/DELETE_GETAWAY';
const CREATE_REVIEW = 'REVIEWS/CREATE_REVIEW';
const LOAD_REVIEWS = 'REVIEWS/LOAD_REVIEWS';
const EDIT_REVIEW = 'REVIEWS/EDIT_REVIEW';
const DELETE_REVIEW = 'REVIEWS/DELETE_REVIEW';
const newGetaway = (newGetaway) => ({
  type: CREATE_GETAWAY_,
  newGetaway
});
const loadedGetaways = (loadedGetaways) => ({
  type: LOAD_GETAWAYS,
  loadedGetaways
});
const editedGetaway = (editedGetaway) => ({
  type: EDIT_GETAWAY,
  editedGetaway
});
const deletedGetaway = (deletedGetaway) => ({
  type: DELETE_GETAWAY,
  deletedGetaway
});
const newReview = (newReview) => ({
  type: CREATE_REVIEW,
  newReview
});
const loadedReviews = (loadedReviews) => ({
  type: LOAD_REVIEWS,
  loadedReviews
});
const editedReview = (editedReview) => ({
  type: EDIT_REVIEW,
  editedReview
});
const deletedReview = (deletedReview) => ({
  type: DELETE_REVIEW,
  deletedReview
});


export const createReview = (newReviewObj) => async (dispatch) => {
    const {accuracyRating, checkinRating, cleanlinessRating, communicationRating, getawayId, locationRating, reviewText, valueRating, userId, reservationsId   } = newReviewObj;
  const response = await fetch(`/api/getaways/${getawayId}/reviews/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      accuracyRating, checkinRating, cleanlinessRating, communicationRating, getawayId, locationRating, reviewText, valueRating, userId, reservationsId 
    })
  });
  if (response.ok) {
    const createdReview = await response.json();
    if (createdReview.errors) {
      return createdReview;
    }
  
    dispatch(newReview(createdReview));
    return createdReview
  }
}

export const editReview = (editedReviewObj) => async (dispatch) => {
    const {accuracyRating, checkinRating, cleanlinessRating, communicationRating, getawayId, locationRating, reviewText, valueRating, userId, reviewId, reservationsId} = editedReviewObj;
  const response = await fetch(`/api/reviews/${reviewId}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      accuracyRating, checkinRating, cleanlinessRating, communicationRating, getawayId, locationRating, reviewText, valueRating, userId, reservationsId 
    })
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return data;
    }
  
    dispatch(editedReview(data));
    return data
  }
}



export const deleteReview = (reviewId) => async (dispatch) => {
  const response = await fetch(`/api/reviews/${reviewId}/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  if (response.ok) {
    const deletedGetawayObj = await response.json();
    if (deletedGetawayObj.errors) {
      return deletedGetawayObj;
    }
  
    dispatch(deletedGetaway(deletedGetawayObj));
    return deletedGetawayObj
  }
}


export const createGetaway = (newGetawayObj) => async (dispatch) => {
    let {address, city, state, latitude, longitude, name, price, description, numGuests, numBeds, numBaths,  numBedrooms, userId, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, hasHotTub, hasWifi, hasPatio, hasKitchen, hasFireplace   } = newGetawayObj;


  const response = await fetch(`/api/getaways/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      address, 
      city, 
      state, 
      latitude, 
      longitude, 
      name, 
      price, 
      description, 
      numGuests, 
      numBeds, 
      numBaths,  
      numBedrooms, 
      userId,
      country: 'United States', 
      img1, 
      img2, 
      img3, 
      img4, 
      img5, 
      img6, 
      img7, 
      img8, 
      img9, 
      img10, 
      hasHotTub, 
      hasWifi, 
      hasPatio, 
      hasKitchen, 
      hasFireplace
    })
  });
  if (response.ok) {
    const createdGetaway = await response.json();
    if (createdGetaway.errors) {
      return;
    }
  
  
  
    dispatch(newGetaway(createdGetaway));
  }
}


export const loadGetaways = () => async (dispatch) => {
  const response = await fetch(`/api/getaways/all/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  if (response.ok) {
    const allGetaways = await response.json();
    if (allGetaways.errors) {
      return;
    }
  
    dispatch(loadedGetaways(allGetaways));
  }
}

export const editGetaway = (editedGetawayObj) => async (dispatch) => {
    const {address, city, state, latitude, longitude, name, price, description, numGuests, numBeds, numBaths,  numBedrooms, userId, getawayId , img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, hasHotTub, hasWifi, hasPatio, hasKitchen, hasFireplace  } = editedGetawayObj;

  const response = await fetch(`/api/getaways/${getawayId}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      address, 
      city, 
      state, 
      latitude, 
      longitude, 
      name, 
      price, 
      description, 
      numGuests, 
      numBeds, 
      numBaths,  
      numBedrooms, 
      userId,
      country: 'United States',
      img1, 
      img2, 
      img3, 
      img4, 
      img5, 
      img6, 
      img7, 
      img8, 
      img9, 
      img10,
      hasHotTub, 
      hasWifi, 
      hasPatio, 
      hasKitchen, 
      hasFireplace
    })
  });
  if (response.ok) {
    const editedGetawayRes = await response.json();
    if (editedGetawayRes.errors) {
      return;
    }
  
    dispatch(editedGetaway(editedGetawayRes));
  }
}

export const deleteGetaway = (getawayId) => async (dispatch) => {
  const response = await fetch(`/api/getaways/${getawayId}/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  if (response.ok) {
    const deletedGetawayObj = await response.json();
    if (deletedGetawayObj.errors) {
      return;
    }
  
    dispatch(deletedGetaway(deletedGetawayObj));
  }
}




let initialState = {};
let newState = {};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_GETAWAY_:
        newState = action.newGetaway
        return newState
    case LOAD_GETAWAYS:
        newState = action.loadedGetaways
        return newState
    case EDIT_GETAWAY:
        newState = action.editedGetaway
        return newState

    case DELETE_GETAWAY:
        newState = action.deletedGetaway 
        return newState
    default:
      return state;
  }
}
