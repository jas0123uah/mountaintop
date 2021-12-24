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
// const browseGetaway = (browseResults) => ({
//   type: BROWSE_GETAWAYS,
//   payload: browseResults
// });

export const browseGetaways = () => async (dispatch) => {
  console.log("YAY");
  const response = await fetch(`/api/getaways/`, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  console.log(response, "<-------");
  if (response.ok) {
    const browseResults = await response.json();
    console.log(browseResults, "browse results")
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
      console.log(action);
      console.log(action.searchResults, "**************");
      return { search: action.searchResults }
    case BROWSE_GETAWAYS:
      return { search: action.searchResults }
    default:
      return state;
  }
}
