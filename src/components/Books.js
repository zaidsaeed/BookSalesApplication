import React, { Component } from "react";
import SuggestionCard from "./SuggestionCard";

export default class Books extends Component {
  render() {
    const { searchResults } = this.props.location.state;
    const searchResultCards = searchResults.map(result => {
      return <SuggestionCard book={result} />;
    });
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 15rem [col-start])",
          margin: "auto"
        }}
      >
        <h1>Search Results: </h1>
        {searchResultCards}
      </div>
    );
  }
}
