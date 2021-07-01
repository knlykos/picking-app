import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./main/navbar/Navbar";
import ProductsList from "./inventory/products/products/ProductsList";

function App() {
  return (
    <div>
      {/* <Navbar ></Navbar> */}
      <Router>
        <div>
          <Link to="products">Products</Link>
        </div>
        <Switch>
          <Route path="/products">
            <ProductsList></ProductsList>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
