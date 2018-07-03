import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../actions/cartActions";
import { Link } from "react-router-dom";

class Book extends Component {
  render() {
    const { book } = this.props;
    let inCart;
    const { items } = this.props;
    const filteredItems = items.filter(item => {
      if (item.id == book.id) {
        return true;
      }
    });
    inCart = filteredItems.length != 0;
    return (
      <div
        className="card text-white bg-success mb-3"
        style={{
          maxWidth: "20rem",
          marginTop: "20px"
        }}
      >
        <Link
          to={{ pathname: `/book/${book.id}`, state: { book } }}
          className="card text-white bg-success mb-3"
          style={{ border: "none" }}
        >
          <div className="card-header">{book.bookTitle}</div>
          <img
            src={book.imageURL}
            width="300"
            height="400"
            style={{ margin: "10px" }}
          />
          <div className="card-body">
            <h4 className="card-title">by {book.author}</h4>
          </div>
        </Link>
        {inCart ? (
          <button
            type="button"
            class="btn btn-warning"
            style={{ margin: "0 15px 15px 15px" }}
            onClick={() => {
              this.props.cartActions.removeFromCart(book.id);
              this.props.cartActions.decreaseTotalCount(book.price);
            }}
          >
            Remove From Shopping Cart
          </button>
        ) : (
          <button
            type="button"
            class="btn btn-warning"
            style={{ margin: "0 15px 15px 15px" }}
            onClick={() => {
              this.props.cartActions.addToCart(book);
              this.props.cartActions.increaseTotalCount(book.price);
            }}
          >
            Add to Shopping Cart
          </button>
        )}
      </div>
    );
  }
}

// I removed the description from the card.
Book.propTypes = {
  //passed in
  bookTitle: PropTypes.string,
  author: PropTypes.string,
  description: PropTypes.string,
  imageURL: PropTypes.string
};

function mapStateToProps(state, props) {
  return {
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    cartActions: bindActionCreators(cartActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Book);
