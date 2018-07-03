import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SuggestionCard extends Component {
  render() {
    const { book } = this.props;
    return (
      <div
         className="card text-white bg-success mb-3"
        style={{ maxWidth: "250px", margin: "20px" }}
      >
        <div className="card-header">{book.bookTitle}</div>
        <div className="card-body">
          
          <img
            src={book.imageURL}
            style={{ margin: "10px", maxWidth: "150px" }}
          />
          <h4 className="card-title">{book.author}</h4>
        </div>
      </div>
    );
  }
}

SuggestionCard.propTypes = {
  book: PropTypes.object
};
