import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

import * as utils from "../utils/storeHelpers";
import { throttle } from "../utils/throttle";

const persistedState = utils.loadState();

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunkMiddleware)),
);

store.subscribe(
  throttle(() => {
    utils.saveState({
      auth: store.getState().auth,
    });
  }, 1000),
);

export default store;
