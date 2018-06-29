import React from "react";
import PropTypes from "prop-types";
import Book from "./Book.js";
import protos from "./ProtosArray";
import { Link } from "react-router-dom";

const Landing = () => {
  let bookcards = protos.map((book, index) => {
    return (
      <Link to={{ pathname: `/book/${index}`, state: { book } }}>
        <Book
          key={index}
          bookTitle={book.bookTitle}
          author={book.author}
          description={book.description}
          imageURL={book.imageURL}
        />
      </Link>
    );
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
