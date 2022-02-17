// constants
const SEARCH_GETAWAYS = 'search/SEARCH_GETAWAYS';
const BROWSE_GETAWAYS = 'search/BROWSE_GETAWAYS';

const searchGetaway = (searchResults) => ({
  type: SEARCH_GETAWAYS,
  searchResults: searchResults
});

export const searchGetaways = (term) => async (dispatch) => {
  const response = await fetch(`/api/search/${term}/`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const searchResults = await response.json();
  
    dispatch(searchGetaway(searchResults));
  }else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export const browseGetaways = () => async (dispatch) => {
  const response = await fetch(`/api/getaways/`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const browseResults = await response.json();
  
    dispatch(searchGetaway(browseResults));
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
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_GETAWAYS:
      return action.searchResults
    case BROWSE_GETAWAYS:
      return action.searchResults
    default:
      return state;
  }
}
