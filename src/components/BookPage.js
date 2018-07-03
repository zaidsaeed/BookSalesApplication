import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../actions/cartActions";
import PropTypes from "prop-types";

class BookPage extends Component {
  render() {
    let inCart;
    const { book } = this.props.location.state;
    const { items } = this.props;
    const filteredItems = items.filter(item => {
      if (item.id == book.id) {
        return true;
      }
    });
    inCart = filteredItems.length != 0;
    return (
      <div>
        <img src={book.imageURL} width="350" height="500" align="left" />
        <h1>{book.bookTitle} </h1>

        <h3>by {book.author}</h3>
        <br />
        <h2> ${book.price} </h2>
        <br />
        <p> {book.description}</p>
        {inCart ? (
          <button1
            type="button"
            className="btn btn-primary"
            style={{
              width: "200px",
              position: "relative",
              marginRight: "375px",
              marginTop: "60px"
            }}
            onClick={() => {
              this.props.cartActions.removeFromCart(book.id);
              this.props.cartActions.decreaseTotalCount(book.price);
            }}
          >
            Remove From Cart
          </button1>
        ) : (
          <button1
            className="btn btn-primary"
            type="button"
            style={{
              width: "200px",
              position: "relative",
              marginRight: "375px",
              marginTop: "60px"
            }}
            onClick={() => {
              this.props.cartActions.addToCart(book);
              this.props.cartActions.increaseTotalCount(book.price);
            }}
          >
            Add to Cart
          </button1>
        )}
      </div>
    );
  }
}

BookPage.propTypes = {};

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
)(BookPage);
