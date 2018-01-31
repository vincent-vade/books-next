import { createStore } from 'redux'
import reducers from './reducers'
import initalState from './config/initalState'

export const makeStore = (initialState, options) => {
  console.log(initalState);
  return createStore(reducers, initialState);
}
