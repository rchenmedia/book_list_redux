import { combineReducers } from "redux";
import BooksReducer from "./reducer_books";
import ActiveBook from "./reducer_active_book";

const rootReducer = combineReducers({ //tells redux how to create app state. any key value added to combineReducer becomes a key in global state
  books: BooksReducer,                //state = books, value is whats in bookReducer file
  activeBook: ActiveBook              //activebook = book that was selected
});

export default rootReducer;
