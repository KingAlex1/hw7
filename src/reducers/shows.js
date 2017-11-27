import { SHOWS_REQUEST } from "../actions/shows";
import { SHOWS_SUCCESS } from "../actions/shows";
import { SHOWS_FAILURE } from "../actions/shows";

import { handleActions } from "redux-actions";

const initState = {
  isFetching: false,
  isFetched: false,
  show: {
    name: "",
    summary: "",
    image: "",
    _embedded: { cast: [] }
  },
  error: null
};

const shows = handleActions(
  {
    SHOWS_REQUEST: (state, action) => ({
      ...state,
      isFetching: true,
      isFetched: false
    }),
    SHOWS_SUCCESS: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: true,
      show: action.payload
    }),
    SHOWS_FAILURE: (state, action) => ({
      ...state,
      isFetching: false,
      isFetched: true
    })
  },
  initState
);

export default shows;
