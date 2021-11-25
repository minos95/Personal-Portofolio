import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
console.log("rouds");
class Rouds extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" component={Home} exact />
      </Routes>
    );
  }
}

export default Rouds;
