import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ShoppingCart extends Component {
  render() {
    return (
      <div>
        <Link to="/checkout">
          <button type="button" class="btn btn-success">
            Proceed To Checkout
          </button>
        </Link>
      </div>
    );
  }
}
