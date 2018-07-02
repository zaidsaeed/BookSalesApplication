import React, { Component } from "react";
import protos from "./ProtosArray";
import Book from "./Book";

export default class GenreBooks extends Component {
  render() {
    let bookcards = protos.map((book, index) => {
      return <Book book={book} />;
    });
    let clubChoice = bookcards.slice(0, 5);
    let popular = bookcards.slice(5, 10);
    let newReleases = bookcards.slice(10, 15);

    return (
      <div>
        <h1 style={{ margin: "15px 0px 0px 25px" }}>Popular: </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 20rem [col-start])",
            gridGap: "10px",
            gridAutoFlow: "row",
            padding: "0px 25px 15px 25px"
          }}
        >
          {popular}
        </div>

        <h1 style={{ margin: "15px 0px 0px 25px" }}>Club Choice: </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 20rem [col-start])",
            gridGap: "10px",
            gridAutoFlow: "row",
            padding: "0px 25px 15px 25px"
          }}
        >
          {clubChoice}
        </div>

        <h1 style={{ margin: "15px 0px 0px 25px" }}>New Releases: </h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 20rem [col-start])",
            gridGap: "10px",
            gridAutoFlow: "row",
            padding: "0px 25px 15px 25px"
          }}
        >
          {newReleases}
        </div>
      </div>
    );
  }
}
