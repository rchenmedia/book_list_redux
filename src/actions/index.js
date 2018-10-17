// selectBook is an ActionCreator used for changing the state
// the function needs to return an action, an object with a type property.
// the returned action is automatically sent to all the reducers in the application
// needs to be imported into the bookList to be used as a onClick function

export function selectBook(book) { //book is passed in from booklist onclick() with book data coming from the mapped array of <li>
  return {
    type: "BOOK_SELECTED",
    payload: book                  // data that describes the action, optional
  };
}
