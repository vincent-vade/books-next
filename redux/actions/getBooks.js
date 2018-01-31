import {
  GET_BOOKS_ERROR,
  GET_BOOKS_REQUEST,
  GET_BOOKS_SUCCESS
} from '../constants';
import apiProvider from '../../config/provider/api'

const getBooksRequest = () => {
  return {
    type: GET_BOOKS_REQUEST
  };
};

const getBooksSuccess = (books) => {
  return {
    type: GET_BOOKS_SUCCESS,
    books
  };
};

const getBooksError = () => {
  return {
    type: GET_BOOKS_ERROR
  };
};

const getBooks = () => dispatch => {
  return apiProvider().get('/Books')
    .then((res) => {
      console.log(res.data)
      dispatch(getBooksSuccess(res.data))
    })
    .catch(e => dispatch(getBooksError(e)))
}

export default getBooks
