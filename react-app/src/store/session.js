// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const ADD_USER_RESERVATION = 'session/ADD_USER_RESEVATION';
const REMOVE_USER_RESERVATION = 'session/REMOVE_USER_RESEVATION';



const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
})

const addUserReservation = (newReservation) => ({
  type: ADD_USER_RESERVATION,
  newReservation
})

const removeUserReservation = (cancelledReservation) => ({
  type: REMOVE_USER_RESERVATION,
  cancelledReservation
})


export const createReservation = (reservationObj) => async (dispatch) => {
  const {userId, startDate,endDate, getawayId} = reservationObj
  const response = await fetch(`/api/getaways/${getawayId}/reservations/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({userId,startDate, endDate, getawayId})
  });
  if (response.ok) {
    const newReservation = await response.json();
    if (newReservation.errors) {
      console.log('HERE',  newReservation)
      return newReservation;
    }
    console.log(newReservation, "YES")
  
    dispatch(addUserReservation(newReservation));
  }
}


export const deleteReservation = (reservationId) => async (dispatch) => {
  console.log(reservationId, "THUNK")
  const response = await fetch(`/api/reservations/${reservationId}/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      console.log(data.errors, "ERRORS")
      return;
    }
    console.log(data, "DATA")
  
    dispatch(removeUserReservation(data));
  }
}




const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
  
    dispatch(setUser(data));
  }
}

export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  
  
  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};


export const signUp = (signupInfo) => async (dispatch) => {
  const {firstName, lastName, email, password, profilePicture} = signupInfo;
  setTimeout(() => {
    
  }, 10000);
  console.log(firstName, lastName, email, password, profilePicture);
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName,
      lastName,
      email, 
      password,
      profilePicture
    }),
  });
  
  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

let newState ={}
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { user: action.payload }
    case REMOVE_USER:
      return { user: null }
    case ADD_USER_RESERVATION:
      console.log(action.newReservation, "YESTERDAY")
      newState = {...initialState}
      console.log(newState, "JTDYJTRYUTTRTUYTRUYRUFTYH")
      return state
      newState.reservations[action.newReservation].id = action.newReservation
    case REMOVE_USER_RESERVATION:
      return state;
      // newState = {...state}
      // delete newState.reservations[action.cancelledReservation.id]
      // return newState

    default:
      return state;
  }
}
