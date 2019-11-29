import React from "react";
import { Route, Redirect } from "react-router-dom";
import Layout from "./layout";
import firebase from "../config/firebase";

export default ({
  component: Component,
  type = "public",
  auth = false,
  to = "/hello",
  ...rest
}) => (
  <Route
    {...rest}
    render={(props: any) => {
      if (type === "public") return <Component {...props} />;
      if (type === "private")
        return auth ? (
          <Layout {...props} firebase={firebase}>
            <Component {...props} firebase={firebase} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: to,
              state: { from: props.location }
            }}
          />
        );
      if (type === "user") return <Component {...props} firebase={firebase} />;
    }}
  />
);
