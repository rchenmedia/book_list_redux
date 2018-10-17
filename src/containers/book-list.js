//Renders a List of Books

import React, { Component } from "react";
import { connect } from "react-redux";          // required for making a Container
import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";     //required for binding Actions
class BookList extends Component {
  renderList() {                                //ran in the render method below
    return this.props.books.map(book => {       //this.props.books available by mapStateToProps(state)
      return (
        <li key={book.title}
            onClick={() => this.props.selectBook(book)}
            className="list-group-item">
              {book.title}
        </li>
      );
    });
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}


//========== Code below requires this component to be a Container that connects redux state ==============

function mapStateToProps(state) {  //makes this.props.books used in renderList. need react-redux. takes app state as argument
  return {                         //whatever is returned will show up as props inside Book-List
    books: state.books             //makes this.props.books.  value = list of books off of state
  };
}

function mapDispatchToProps(dispatch) {  // connects ActionCreators to this Component, and makes action available to use as a this.props.selectbook
  return bindActionCreators({ selectBook: selectBook }, dispatch);   // Whenever selectBook is called, the result shoudl be passed to all reducers
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
// Promote BookList from a component to a container - it needs to know
// about this new action, selectBook used in onclick function. Make it available
// as a prop.
