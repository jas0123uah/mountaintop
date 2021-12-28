// constants
const CREATE_GETAWAY_ = 'getaways/CREATE_GETAWAY_';
const LOAD_GETAWAYS = 'getaways/LOAD_GETAWAYS';
const EDIT_GETAWAY = 'getaways/EDIT_GETAWAY';
const DELETE_GETAWAY = 'getaways/DELETE_GETAWAY';

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

export const createGetaway = (newGetawayObj) => async (dispatch) => {
    const {address, city, state, latitude, longitude, name, price, description, numGuests, numBeds, numBaths,  numBedrooms, userId   } = newGetawayObj;
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
      country: 'United States'
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
    const {email, address, city, state, latitude, longitude, name, price, description, numGuests, numBeds, numBaths,  numBedrooms, userId, getawayId   } = editedGetawayObj;
  const response = await fetch(`/api/getaways/${getawayId}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email, 
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
      country: 'United States'
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
        newState = {...initialState}
        newState[action.newGetaway.id] =action.newGetaway
        return newState
    case LOAD_GETAWAYS:
        newState = action.loadedGetaways
        return newState
    case EDIT_GETAWAY:
        newState = {...initialState}
        newState[action.editedGetaway.id] = action.editedGetaway
        return newState

    case DELETE_GETAWAY:
        newState = {...initialState}
        newState[action.deletedGetaway.id] = action.deletedGetaway
        return newState
    default:
      return state;
  }
}
