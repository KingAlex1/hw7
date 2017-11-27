import { SHOWS_REQUEST } from "../actions/shows";
import { SHOWS_SUCCESS } from "../actions/shows";
import { SHOWS_FAILURE } from "../actions/shows";

import { show } from "../api";

const searchMiddleware = store => next => action => {
  const result = next(action);

  if (action.type === SHOWS_REQUEST.toString()) {
    show(action.payload)
      .then(result => {
        store.dispatch(SHOWS_SUCCESS(result));
      })
      .catch(error => {
        store.dispatch(
          SHOWS_FAILURE(new Error("Ошибка !!"))
        );
      });
  }
  return result;
};
export default searchMiddleware;
