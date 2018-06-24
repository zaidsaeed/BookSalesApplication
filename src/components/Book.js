import React, { Component } from "react";
import PropTypes from "prop-types";

class Book extends Component {
  render() {
    const { bookTitle, author, description, imageURL } = this.props;
    return (
      <div
        className="card text-white bg-success mb-3"
        style={{
          maxWidth: "20rem",
          marginTop: "20px"
        }}
      >
        <div className="card-header">{bookTitle}</div>
        <img src={imageURL} style={{ margin: "10px" }} />
        <div className="card-body">
          <h4 className="card-title">{author}</h4>
          <p className="card-text">{description}</p>
        </div>
        <button
          type="button"
          class="btn btn-warning"
          style={{ margin: "0 15px 15px 15px" }}
        >
          Add to Shopping Cart
        </button>
      </div>
    );
  }
}

Book.propTypes = {
  //passed in
  bookTitle: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  imageURL: PropTypes.string
};

export default Book;
