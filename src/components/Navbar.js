import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to="/">
          <a
            className="navbar-brand nav-item"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            BookSales
          </a>
        </Link>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/books">
                <a className="nav-link">Politics</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/books">
                <a className="nav-link">History</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/books">
                <a className="nav-link">Fiction</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/books">
                <a className="nav-link">Health</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/books">
                <a className="nav-link">Science</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="form-inline my-2 my-lg-0" id="navbarColor01">
          <Search />
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/shoppingcart">
                <i
                  style={{ marginRight: "10px", hover: "pointer" }}
                  className="nav-link material-icons"
                >
                  shopping_cart
                </i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
