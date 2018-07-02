import React from "react";
import PropTypes from "prop-types";
import Book from "./Book.js";
import protos from "./ProtosArray";

const Landing = () => {
  let bookcards = protos.map((book, index) => {
    return <Book book={book} />;
  });
  let newReleases = bookcards.slice(0, 5);
  let bestSellers = bookcards.slice(5, 10);
  let ourRecommendations = bookcards.slice(10, 15);

  return (
    <div>
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

      <h1 style={{ margin: "15px 0px 0px 25px" }}>Best Sellers: </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 20rem [col-start])",
          gridGap: "10px",
          gridAutoFlow: "row",
          padding: "0px 25px 15px 25px"
        }}
      >
        {bestSellers}
      </div>

      <h1 style={{ margin: "15px 0px 0px 25px" }}>Our Recommendations: </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 20rem [col-start])",
          gridGap: "10px",
          gridAutoFlow: "row",
          padding: "0px 25px 15px 25px"
        }}
      >
        {ourRecommendations}
      </div>
    </div>
  );
};

Landing.propTypes = {};

export default Landing;
