import React, { useState } from "react";
import ReactDOM from "react-dom";
import AppBar from "./Header";
import NestedList from "./Listitems";
import AddLeads from "./AddLeads";
import { Container } from "@material-ui/core";

const App = () => {
  return (
    <>
      <AppBar />
      <Container>
        <AddLeads />
        <NestedList />
      </Container>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
