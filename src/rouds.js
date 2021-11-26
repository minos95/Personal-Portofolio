import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Test from "./components/test";
console.log("rouds");
class Rouds extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    );
  }
}

export default Rouds;
