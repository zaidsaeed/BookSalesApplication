import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../actions/cartActions";
import PropTypes from "prop-types";
import Book from "./Book.js";
import protos from "./ProtosArray";

class BookPage extends Component {
  render() {

    let bookcards = protos.map((book, index) => {
      return <Book book={book} />;
    });
    let inCart;
    let suggestions = bookcards.slice(0, 5);
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
        <div 
        style={{
          marginTop: "300px",
          marginLeft: "50px"
        }}>
        <h2>You might also like these: </h2>
        </div>
       <div
       
       style ={{display: "grid",
       gridTemplateColumns: "auto auto auto auto",
       gridGap: "10px",
       gridAutoFlow: "row",
       padding: "0px 25px 15px 25px",
       marginTop: "50px"}}>
          {suggestions}

       </div>

        
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
