// Renders the Active book details
// This is also a Container, because state matters here

import React, { Component } from "react";
import { connect } from "react-redux";

class BookDetail extends Component {
  render() {
    if (!this.props.book) {                //checks & fixes null error from initial load
      return <div>Select a book to get started.</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

//========== Code below requires this component to be a Container that connects redux state ==============


function mapStateToProps(state) {
  return {
    book: state.activeBook      // enables access to this.props.book - from reducers
  };
}

export default connect(mapStateToProps)(BookDetail);
