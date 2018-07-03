import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Suggestions extends Component {
  render() {
    const options = this.props.results.map(r => (
      <a
        class="dropdown-item"
        onClick={() => {
          this.props.clearSuggestions();
        }}
      >
        {r.bookTitle}
      </a>
    ));
    return options.length === 0 ? (
      <div />
    ) : (
      <Link
        to={{
          pathname: "/search",
          state: { searchResults: this.props.results }
        }}
      >
        <div
          class="dropdown-menu show"
          xPlacement="bottom-start"
          style={{
            position: "absolute",
            right: "9%",
            left: "57%",
            marginRight: "25px"
          }}
        >
          {options}
        </div>
      </Link>
    );
  }
}
