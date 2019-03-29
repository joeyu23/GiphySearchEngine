import * as actions from "../constants/actionsTypes";

const initialState = {
	searchText: '',
	gifs: [],
	loadingState: false,
	error: null
}

export function reducer(state = initialState, action) {
	switch(action.type) {
		case actions.INPUT_SEARCH:
			return {
				...state,
				searchText: action.searchText
			}
		case actions.FETCH_GIFS_BEGIN:
			return {
				...state,
				gifs: [],
				loadingState: true,
				error: null
			}
		case actions.FETCH_GIFS_SUCCESS:
			return {
				...state,
				gifs: action.response,
				loadingState: false,
				error: null
			}
		case actions.FETCH_GIFS_FAILURE:
			return {
				gifs: [],
				loadingState: false,
				error: action.response
			}
		default:
			return state;
	}
}