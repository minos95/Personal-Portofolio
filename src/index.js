import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";

import Rouds from "./rouds";
console.log("test");
const App = () => {
  return (
    <BrowserRouter>
      <Rouds />
    </BrowserRouter>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
