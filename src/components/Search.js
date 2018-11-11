import React, { Component } from "react";
import protos from "./ProtosArray";
import Suggestions from "./Suggestions";
import "./search.css";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: []
    };
  }

  handleInputChange = () => {
    this.setState({ query: this.search.value }, () => this.getBooks());
  };

  filterBooks(keywords, book) {
    if (
      book.bookTitle.toLowerCase().indexOf(keywords.toLowerCase()) != -1 ||
      book.author.toLowerCase().indexOf(keywords.toLowerCase()) != -1
    ) {
      return book;
    }
  }

  getBooks = () => {
    let filteredBooks;
    if (this.state.query == "") {
      filteredBooks = [];
    } else {
      filteredBooks = protos.filter(book =>
        this.filterBooks(this.state.query, book)
      );
    }
    this.setState({
      results: filteredBooks
    });
  };

  render() {
    return (
      <form class="form-inline my-2 my-lg-0">
        <input
          type="text"
          className="searchBar form-control mr-sm-2"
          placeholder="Search based on genre, category, author.."
          ref={input => (this.search = input)}
          onChange={this.handleInputChange}
          style={{ marginRight: "25px" }}
        />
        <Suggestions
          results={this.state.results}
          clearSuggestions={() => {
            this.setState({ results: [] });
          }}
        />
      </form>
    );
  }
}
