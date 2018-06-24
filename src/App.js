import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./components/Landing";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";
import ShoppingCart from "./components/ShoppingCart";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          {/* Routes */}
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/shoppingcart" component={ShoppingCart} />
            <Route exact path="/checkout" component={Checkout} />
          </Switch>;
        </div>
      </Router>
    );
  }
}

export default App;
