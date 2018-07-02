import React from "react";
import PropTypes from "prop-types";
import Book from "./Book.js";
import protos from "./ProtosArray";

const Landing = () => {
  let bookcards = protos.map((book, index) => {
    return <Book book={book} />;
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 20rem [col-start])",
        gridGap: "10px",
        gridAutoFlow: "row",
        padding: "15px"
      }}
    >
      {bookcards}
    </div>
  );
};

Landing.propTypes = {};

export default Landing;
