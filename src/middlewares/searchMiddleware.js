import { SEARCH_REQUEST } from "../actions/search";
import { SEARCH_SUCCESS } from "../actions/search";
import { SEARCH_FAILURE } from "../actions/search";

import { search } from "../api";

const searchMiddleware = store => next => action => {
  const result = next(action);

  if (action.type === SEARCH_REQUEST.toString()) {
    search(action.payload)
      .then(shows => {
        store.dispatch(SEARCH_SUCCESS(shows));
      })
      .catch(error => {
        store.dispatch(
          SEARCH_FAILURE(new Error("Ошибка!"))
        );
      });
  }
  return result;
};

export default searchMiddleware;
