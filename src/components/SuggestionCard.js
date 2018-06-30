import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SuggestionCard extends Component {
  render() {
    const { book } = this.props;
    return (
      <div
        className="card text-white bg-secondary mb-3"
        style={{ maxWidth: "200px" }}
      >
        <div className="card-header">{book.bookTitle}</div>
        <div className="card-body">
          <h4 className="card-title">{book.author}</h4>
          <img
            src={book.imageURL}
            style={{ margin: "10px", maxWidth: "150px" }}
          />
        </div>
      </div>
    );
  }
}

SuggestionCard.propTypes = {
  book: PropTypes.object
};
