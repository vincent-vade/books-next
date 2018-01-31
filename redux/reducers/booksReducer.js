import {
  GET_BOOKS_ERROR,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_REQUEST
} from '../constants'
import initialState from '../config/initalState';

export default function booksReducer(state = initialState.books, action) {
  const { error, books } = action.type;
  switch (action) {
    case GET_BOOKS_REQUEST:
      return {
        isLoading: true
      }
    case GET_BOOKS_SUCCESS:
      return {
        books: [...books],
        isLoading: false
      }
    case GET_BOOKS_ERROR:
      return {
        ...state,
        isLoading: false,
        error
      }

    default:
      return state;
  }
}
