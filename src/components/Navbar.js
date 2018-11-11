import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import protos from "./ProtosArray";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to={process.env.PUBLIC_URL}>
          <a
            className="navbar-brand nav-item"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            BookSales
          </a>
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul
            className="navbar-nav mr-auto"
            style={{
              display: "flex"
            }}
          >
            <li className="nav-item" style={{ marginRight: "5px" }}>
              <Link to="/genre">
                <a className="nav-link">Politics</a>
              </Link>
            </li>
            <li className="nav-item" style={{ marginRight: "5px" }}>
              <Link to="/genre">
                <a className="nav-link">History</a>
              </Link>
            </li>
            <li className="nav-item" style={{ marginRight: "5px" }}>
              <Link to="/genre">
                <a className="nav-link">Fiction</a>
              </Link>
            </li>
            <li className="nav-item" style={{ marginRight: "5px" }}>
              <Link to="/genre">
                <a className="nav-link">Health</a>
              </Link>
            </li>
            <li className="nav-item" style={{ marginRight: "5px" }}>
              <Link to="/genre">
                <a className="nav-link">Science</a>
              </Link>
            </li>
            <Search />
            <li className="nav-item" id="shoppingCart">
              <Link to="/shoppingcart">
                <i
                  style={{ hover: "pointer" }}
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
