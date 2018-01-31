import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from './reducers'
import initalState from './config/initalState'

export default function makeStore(initialState, options) {
  return createStore(
    reducers,
    initalState,
    composeWithDevTools(applyMiddleware(thunk))
  );
}
