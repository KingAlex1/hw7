import { SEARCH_SUCCESS } from "../actions/search";
import { SEARCH_REQUEST } from "../actions/search";
import { SEARCH_FAILURE } from "../actions/search";

import { handleActions } from "redux-actions";

const initState = {
  isFetching: false,
  isFetched: false,
  shows: [],
  error: null
};

const search = handleActions(
  {
    SEARCH_REQUEST: (state, action) => ({
      ...state,
      isFetching: true,
      isFetched: false
    }),
    SEARCH_SUCCESS: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      shows: action.payload
    }),
    SEARCH_FAILURE: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      error: action.error
    })
  },
  initState
);
export default search;
