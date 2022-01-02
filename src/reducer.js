/* eslint-disable default-case */
import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoaded: true };
    case SET_STORIES:
      return {
        ...state,
        isLoaded: false,
        hits: action.payload.hits,
        nbpages: action.payload.nbpages,
      };

    default:
      throw new Error(`no matching'${action.type}"action type"`);
    //this will give us error with name of action type
  }
};
export default reducer;
