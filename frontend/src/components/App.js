import React, { useState } from "react";
import ReactDOM from "react-dom";
import AppBar from "./Header";
import NestedList from "./Listitems";
import AddLeads from "./AddLeads";
import { Container } from "@material-ui/core";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store";

const App = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Route path="/addleads" exact>
          <AddLeads />
        </Route>
        <NestedList />
      </Container>
    </>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);
