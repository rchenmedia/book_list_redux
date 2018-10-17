// State argument is not application state, only the state this reducer is responsible for
// Actions flow in through action creators
// state = null is a default argument used for inital app bootup, where user has not selected anything.

export default function(state = null, action) {  //reducers always take two arguments. same state flows back into this function
  switch (action.type) {       //if action type matches BOOK_SELECTED,
    case "BOOK_SELECTED":
      return action.payload;   //then return new state, which is the book that dispatched with the action creator
      }
      return state;            // if action doesnt matter, just return same state. will return null when refreshing page because user has not made selection
  }
