import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

import * as utils from '../utils'

const persistedState = utils.loadState()

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

store.subscribe(utils.throttle(() => {
  utils.saveState({
    auth: store.getState().auth
  })
}, 1000));

export default store