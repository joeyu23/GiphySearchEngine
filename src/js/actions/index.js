import { GIPHY_CRED_TOKEN } from "../constants/credentials.js";
import * as action from "../constants/actionsTypes"

export function fetchGifs(query) {
  let giphyAPIClient = require('giphy-js-sdk-core');
  let client = giphyAPIClient(GIPHY_CRED_TOKEN);
  return dispatch => {
    dispatch(fetchGifsBegin());
    return client.search('gifs', {"q": query})
      .then((response) => {
        console.log(response);
        dispatch(fetchGifsSuccess(response));
        return response;
      })
      .catch((err) => {
        dispatch(fetchGifsFailure(err));
        console.log("error in fetching images", err);
      })
  };
}

export const inputSearch = searchText => ({
  type: action.INPUT_SEARCH,
  searchText: searchText
});

export const fetchGifsBegin = () => ({
  type: action.FETCH_GIFS_BEGIN
});

export const fetchGifsSuccess = response => ({
  type: action.FETCH_GIFS_SUCCESS,
  response: response.data
});

export const fetchGifsFailure = error => ({
  type: action.FETCH_GIFS_FAILURE,
  response: [ error ]
});
