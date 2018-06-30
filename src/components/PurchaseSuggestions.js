import React, { Component } from "react";
import SuggestionCard from "./SuggestionCard";
import protos from "./ProtosArray";

export default class PurchaseSuggestions extends Component {
  render() {
    let defaultPurchaseSuggestions = protos.map((book, index) => {
      return <SuggestionCard book={book} />;
    });
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 15rem [col-start])",
          margin: "auto"
        }}
      >
        {defaultPurchaseSuggestions}
      </div>
    );
  }
}
