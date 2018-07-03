import React, { Component } from "react";
import SuggestionCard from "./SuggestionCard";

export default class Books extends Component {
  render() {
    const { searchResults } = this.props.location.state;
    const searchResultCards = searchResults.map(result => {
      return <SuggestionCard book={result} />;
    });
    return (
     <div>
       <h1 style ={{ marginTop: "30px", marginLeft: "30px"}}> Search Results: </h1>
       <br></br>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto auto",
          marginLeft: "40px",
          marginRight: "40px",
        }}
      >
        
        {searchResultCards}
      </div></div>
    );
  }
}

//gridTemplateColumns: "repeat(5, 15rem [col-start])",