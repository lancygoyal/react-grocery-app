import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import Products from "../pages/products";
import Hello from "../pages/hello";
import EnRoute from "../components/enRoute";

const Routes = [
  {
    path: "/",
    component: Products,
    type: "private"
  },
  {
    path: "/products",
    component: Products,
    type: "private"
  },
  { path: "/hello", component: Hello, type: "user" }
];

const Routers = ({ user }) => (
  <Router>
    {Routes.map((route, index) => (
      <EnRoute key={index} exact {...route} auth={user.isLogin} />
    ))}
  </Router>
);

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Routers);
