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

        <ul
          className="navbar-nav mr-auto"
          style={{
            display: "flex",
            flexDirection: "row",
            width: "matchContent"
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
        </ul>

        <div
          className="form-inline my-2 my-lg-0"
          id="navbarColor01"
          style={{
            display: "flex",
            alignContent: "center",
            justifyItems: "center",
            flexFlow: "row"
          }}
        >
          <Search />
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/shoppingcart">
                <i
                  style={{ marginRight: "75px", hover: "pointer" }}
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
