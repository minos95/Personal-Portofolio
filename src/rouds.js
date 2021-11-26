import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components";
import Layout from "./hoc/layout/layout";
console.log("rouds");
class Rouds extends Component {
  render() {
    return (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    );
  }
}

export default Rouds;
