import React, { Component } from "react";

export default class BookPage extends Component {
  render() {
    const { book } = this.props.location.state;
    return (
      <div>
        <h1>{book.bookTitle} </h1>
        <img src={book.imageURL} style={{ margin: "10px" }} />
        <p> {book.description} </p>
       
        
      </div>
    );
  }
}
