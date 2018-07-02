import React, { Component } from "react";

export default class ShoppingCartItem extends Component {
  render() {
    const { book } = this.props;
    return (
      <div
        style={{
          height: "120px",
          display: "flex"
        }}
      >
        <div
          class="buttons"
          style={{
            position: "relative"
          }}
        >
          {/* X button */}
          <button style={{ backgroundColor: "Transparent", border: "none" }}>
            <img
              src="https://nukkadshops.com/images/close-icon.png"
              height="40px"
              width="40px"
              style={{
                display: "inline-block",
                cursor: "pointer",
                margin: "100px 0 0 30px"
              }}
            />
          </button>
        </div>
        <div>
          <img
            src={book.imageURL}
            height="250px"
            width="200px"
            style={{ margin: "0 50px 0 30px" }}
          />
        </div>

        <div
          style={{
            paddingTop: "10px",
            marginRight: "60px",
            width: "160px",
            marginTop: "25px",
            flexGrow: "2"
          }}
        >
          <h1 style={{ marginTop: "0px" }}>{book.bookTitle} </h1>
          <h2 style={{ marginTop: "0px" }}>{book.author} </h2>
          <span>{book.description}</span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "100px",
            marginRight: "60px"
          }}
        >
          <div>
            <button
              className="plus-btn"
              style={{
                display: "flex",
                backgroundColor: "Transparent",
                border: "none"
              }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8IIqYo3FNAP7aXDasVWKhIigLZb1988anXz86QVUE75qi8YjM"
                height="20px"
                width="20px"
                style={{ margin: "5px 50px 5px 50px", display: "flex" }}
              />
            </button>
            <input
              type="text"
              name="name"
              value="1"
              style={{
                margin: "10px 0 10px 0",
                textAlign: "center",
                width: "50px",
                fontSize: "16px",
                color: "#43484D",
                fontWeight: "300"
              }}
            />
            <button
              className="minus-btn"
              style={{
                display: "flex",
                backgroundColor: "Transparent",
                border: "none"
              }}
            >
              <img
                src="http://images.clipartpanda.com/minus-clipart-aTqz4RbTM.png"
                height="20px"
                width="20px"
                style={{
                  margin: "5px 50px 5px 50px",
                  backgroundColor: "white"
                }}
              />
            </button>
          </div>
        </div>

        <div
          style={{
            width: "83px",
            paddingTop: "27px",
            textAlign: "center",
            fontSize: "30px",
            fontWeight: "650",
            margin: "60px 120px 85px 50px"
          }}
        >
          ${book.price}
        </div>
      </div>
    );
  }
}
