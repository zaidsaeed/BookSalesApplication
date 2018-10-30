import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./components/Landing";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";
import Books from "./components/Books";
import BookPage from "./components/BookPage";
import GenreBooks from "./components/GenreBooks";

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Navbar />
          {/* Routes */}
          <Switch>
            <Route exact path={"/"} component={Landing} />
            <Route exact path="/BookSalesApplication" component={Landing} />
            <Route exact path="/index" component={Landing} />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/shoppingcart"}
              component={ShoppingCart}
            />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/book/:id" component={BookPage} />
            <Route exact path="/search" component={Books} />
            <Route exact path="/genre" component={GenreBooks} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
