import React, { Component } from "react";
import PropTypes from "prop-types";

class Book extends Component {
  render() {
    const { bookTitle, author, description } = this.props;
    return (
      <div
        className="card text-white bg-success mb-3"
        style={{ maxWidth: "20rem", marginTop: "20px", marginLeft: "20px" }}
      >
        <div className="card-header">{bookTitle}</div>
        <div className="card-body">
          <h4 className="card-title">{author}</h4>
          <p className="card-text">{description}</p>
        </div>
        <button type="button" class="btn btn-warning">
          Warning
        </button>
      </div>
    );
  }
}

Book.propTypes = {
  //passed in
  bookTitle: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string
};

export default Book;
