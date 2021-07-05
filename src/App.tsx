import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./home/Home";
import Navbar from "./main/navbar/Navbar";
import ProductsList from "./inventory/products/products/ProductsList";
import ProductEdit from "./inventory/products/products/ProductEdit";
import ProductCreate from "./inventory/products/products/ProductCreate";
function App() {
  return (
    <div>
      {/* <Navbar ></Navbar> */}
      <Router>
        {/* <div>
          <Link to="products">Products</Link>
        </div> */}
        <Switch>
          <Route exact path="/" render={() => <Home />} />

          <Route
            path="/products/new"
            exact
            render={() => <ProductCreate></ProductCreate>}
          ></Route>
          <Route
            path="/products"
            exact
            render={() => <ProductsList></ProductsList>}
          ></Route>
          <Route
            path="/products/edit/:id"
            exact
            render={() => <ProductEdit></ProductEdit>}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
