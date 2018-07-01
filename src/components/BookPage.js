import React, { Component } from "react";

export default class BookPage extends Component {
  render() {
    const { book } = this.props.location.state;
    return (
      <div>
        <img src={book.imageURL} width="350" height="500" align ="left"/> 
        <h1>{book.bookTitle} </h1>
        <button1 type="button">Add to Cart</button1>
        <h3>by {book.author}</h3>
        <br></br>
        <h2> ${book.price} </h2>
        <br></br>
        <p
        > {book.description} 
        </p>
      </div>
    );
  }
}
