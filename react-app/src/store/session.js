// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
})

export const createReservation = (reservationObj) => async (dispatch) => {
  const {userId, startDate,endDate, getawayId} = reservationObj
  if (!userId || !startDate || !endDate || !getawayId) {
    return
  }
  const response = await fetch(`/api/getaways/${getawayId}/reservations/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({userId,startDate, endDate, getawayId})
  });
  if (response.ok) {
    const user = await response.json();
  
    dispatch(setUser(user));
    return user;
  }else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}




export const editReservation = (reservationObj) => async (dispatch) => {
  const {userId, startDate,endDate, getawayId, reservationId} = reservationObj
  const response = await fetch(`/api/reservations/${reservationId}/`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({userId,startDate, endDate, getawayId})
  });
  if (response.ok) {
    const user = await response.json(); 
    dispatch(setUser(user));
    return user;
  }else if (response.status < 500) {
    const user = await response.json();
    if (user.errors) {
      return user;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}


export const deleteReservation = (reservationId) => async (dispatch) => {
  const response = await fetch(`/api/reservations/${reservationId}/`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  });
  if (response.ok) {
    const user = await response.json();
    dispatch(setUser(user));
    return user
  }
  else if (response.status < 500) {
    const user = await response.json();
    if (user.errors) {
      return user;
    }
  } else {
    return ['An error occurred. Please try again.']
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
    const user = await response.json();
    dispatch(setUser(user));
    return user
  }
  else if (response.status < 500){
    const data = response.json
    if (data.errors) {
      return data
      
    }
  }
  else {
    return ['An error occurred.'];
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
    const user = await response.json();
    dispatch(setUser(user))
    return user;
  } else if (response.status < 500) {
    const user = await response.json();
    if (user.errors) {
      return user;
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
  }else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
};


export const signUp = (signupInfo) => async (dispatch) => {
  // const {firstName, lastName, email, password, profilePicture} = signupInfo;
  setTimeout(() => {
    
  }, 10000);
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: signupInfo,
  });
  
  if (response.ok) {
    const user = await response.json();
    dispatch(setUser(user))
    return user;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { user: action.payload }
    case REMOVE_USER:
      return { user: null }
    default:
      return state;
  }
}
