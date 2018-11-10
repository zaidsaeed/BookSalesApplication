import React from "react";
import PropTypes from "prop-types";
import Book from "./Book.js";
import protos from "./ProtosArray";
import "./landing.css";

const Landing = () => {
  let bookcards = protos.map((book, index) => {
    return <Book book={book} />;
  });
  let newReleases = bookcards.slice(0, 5);
  let bestSellers = bookcards.slice(5, 10);
  let ourRecommendations = bookcards.slice(10, 15);

  return (
    <div className=".col-sm-12 .col-md-12 .col-lg-12">
      <h1 style={{ margin: "15px 0px 0px 25px" }}>New Releases: </h1>
      <div className="newReleases">{newReleases}</div>

      <h1 style={{ margin: "15px 0px 0px 25px" }}>Best Sellers: </h1>
      <div className="bestSellers">{bestSellers}</div>

      <h1 style={{ margin: "15px 0px 0px 25px" }}>Our Recommendations: </h1>
      <div className="ourRecommendations">{ourRecommendations}</div>
    </div>
  );
};

Landing.propTypes = {};

export default Landing;
