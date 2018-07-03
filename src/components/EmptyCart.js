import React, { Component } from "react";

export default class EmptyCart extends Component {
  render() {
    return (
      <div>
        <img
          src="https://cdn0.iconfinder.com/data/icons/shopcons/48/HBasket-close-512.png"
          style={{ marginTop: "25px", background: "white" }}
        />
        <h1 style={{ margin: "25px 250px" }}>
          Unfortunately, your cart is empty...
        </h1>
        <h2 style={{ margin: "25px 250px" }}>
          Please return to the homepage and find books that you'd like to enter
          into the cart..
        </h2>
      </div>
    );
  }
}
