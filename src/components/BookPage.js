import React, { Component } from "react";
import PurchaseSuggestions from "./PurchaseSuggestions";

export default class BookPage extends Component {
  render() {
    const { book } = this.props.location.state;
    return (
      <div>
        <h1>{book.bookTitle} </h1>
        <PurchaseSuggestions />
      </div>
    );
  }
}
