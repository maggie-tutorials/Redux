import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  // Any Key that we provide to the combineReducers ends up as a key in the
  // global state
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
