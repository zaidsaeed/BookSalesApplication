import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../actions/cartActions";

class SuggestionCard extends Component {
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
        style={{ maxWidth: "250px", margin: "20px" }}
      >
        <Link
          to={{ pathname: `/book/${book.id}`, state: { book } }}
          className="card text-white bg-success mb-3"
          style={{ border: "none" }}
        >
          <div>
            <div className="card-header">{book.bookTitle}</div>
            <div className="card-body">
              <img
                src={book.imageURL}
                style={{ margin: "10px", maxWidth: "150px" }}
              />
              <h4 className="card-title">{book.author}</h4>
            </div>
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
)(SuggestionCard);
