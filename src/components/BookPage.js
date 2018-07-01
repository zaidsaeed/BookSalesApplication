import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../actions/cartActions";
import PropTypes from "prop-types";

class BookPage extends Component {
  render() {
    const { book } = this.props.location.state;
    return (
      <div>
        <img src={book.imageURL} width="350" height="500" align="left" />
        <h1>{book.bookTitle} </h1>
        <button1
          type="button"
          onClick={() => {
            this.props.cartActions.addToCart(book);
          }}
        >
          Add to Cart
        </button1>
        <h3>by {book.author}</h3>
        <br />
        <h2> ${book.price} </h2>
        <br />
        <p> {book.description}</p>
      </div>
    );
  }
}

BookPage.propTypes = {};

function mapDispatchToProps(dispatch) {
  return {
    cartActions: bindActionCreators(cartActions, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(BookPage);
