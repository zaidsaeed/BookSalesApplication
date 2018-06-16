import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar.js";
import Book from "./Book.js";

const Landing = () => {
  const protos = [
    {
      bookTitle: "The Hunger Games",
      author: "Jack Hello",
      description: "This book is awesome",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/The_Hunger_Games_cover.jpg/220px-The_Hunger_Games_cover.jpg"
    }
  ];

  let bookcards = protos.map((book, index) => {
    return (
      <Book
        key={index}
        bookTitle={book.bookTitle}
        author={book.author}
        description={book.description}
        imageURL={book.imageURL}
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
