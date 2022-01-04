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
    if (searchResults.errors) {
      return;
    }
  
    dispatch(searchGetaway(searchResults));
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
    if (browseResults.errors) {
      return;
    }
  
    dispatch(searchGetaway(browseResults));
  }
}




let initialState = {};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_GETAWAYS:
      return { search: action.searchResults }
    case BROWSE_GETAWAYS:
      return { search: action.searchResults }
    default:
      return state;
  }
}
