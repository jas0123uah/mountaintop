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
  
    dispatch(newReview(createdReview));
    return createdReview
  }
  else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data;
    }
  } else {
    return ['An error occurred. Please try again.']
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
  
    dispatch(editedReview(data));
    return data
  }else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data;
    }
  } else {
    return ['An error occurred. Please try again.']
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
  
    dispatch(deletedGetaway(deletedGetawayObj));
    return deletedGetawayObj
  }else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}


export const createGetaway = (newGetawayObj) => async (dispatch) => {


  const response = await fetch(`/api/getaways/`, {
    method: 'POST',
    body: newGetawayObj
  });
  if (response.ok) {
    const createdGetaway = await response.json();
  
  
  
    dispatch(newGetaway(createdGetaway));
  }else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data;
    }
  } else {
    return ['An error occurred. Please try again.']
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
  
    dispatch(loadedGetaways(allGetaways));
  }else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const editGetaway = (editedGetawayObj) => async (dispatch) => {
  const getawayId = editedGetawayObj.get('getawayId');
  console.log(editedGetawayObj.get('hasHotTub'), "HOTTUB")
  console.log(editedGetawayObj.get('hasPatio'), "PATIO")
  const img5 = editedGetawayObj.get('img5');


  const response = await fetch(`/api/getaways/${getawayId}/`, {
    method: 'PUT',
    body: editedGetawayObj
  });
  if (response.ok) {
    const editedGetawayRes = await response.json();

  
    dispatch(editedGetaway(editedGetawayRes));
  }else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data;
    }
  } else {
    return ['An error occurred. Please try again.']
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

  
    dispatch(deletedGetaway(deletedGetawayObj));
  }else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data;
    }
  } else {
    return ['An error occurred. Please try again.']
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
        // Refactor to edit just one.

    case DELETE_GETAWAY:
        newState = action.deletedGetaway 
        return newState
    default:
      return state;
  }
}
