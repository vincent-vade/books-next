import { combineReducers } from 'redux'
import booksReducer from './booksReducer'

const reducers = combineReducers({
  books: booksReducer
});

export default reducers;
