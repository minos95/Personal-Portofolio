import React, { Component } from "react";

import { Portfolio, About } from "./";
const Home = () => {
  return (
    <div>
      <div className="container-xxl">
        <div>Home</div>
        <Portfolio />
        <About />
      </div>
    </div>
  );
};

export { Home };
