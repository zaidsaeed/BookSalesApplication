import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../actions/cartActions";
import ShoppingCartItem from "./ShoppingCartItem";

class ShoppingCart extends Component {
  render() {
    const { items } = this.props;
    const shoppingItems = items.map(book => {
      return <ShoppingCartItem book={book} />;
    });
    return (
      <div>
        <div
          style={{
            margin: "25px 0 25px 0",
            display: "flex",
            flexDirection: "column"
          }}
        >
          {shoppingItems}
        </div>
        <div
          className="alert alert-dismissible alert-light"
          style={{ margin: "50px 250px" }}
        >
          <strong>The total price is: ${this.props.price}</strong>
        </div>
        <Link to="/checkout" style={{ marginTop: "30px" }}>
          <button type="button" class="btn btn-success">
            Proceed To Checkout
          </button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
    price: state.price
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
)(ShoppingCart);
