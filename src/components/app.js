//The Parent component that displays all the children component.
//State is not needed here

import React from "react";
import { Component } from "react";

import BookList from "../containers/book-list";
import BookDetail from "../containers/book-detail";

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
