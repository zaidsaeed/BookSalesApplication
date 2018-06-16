import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar.js";
import Book from "./Book.js";

const Landing = () => {
  const protos = [
    {
      bookTitle: "The Hunger Games",
      author: "Jack Hello",
      description: "This book is awesome"
    }
  ];

  let bookcards = protos.map((book, index) => {
    return (
      <Book
        key={index}
        bookTitle={book.bookTitle}
        author={book.author}
        description={book.description}
      />
    );
  });

  return (
    <div>
      <Navbar />
      {bookcards}
    </div>
  );
};

Landing.propTypes = {};

export default Landing;
