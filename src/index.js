import React from "react";
import ReactDOM from "react-dom";

import Rouds from "./rouds";
import { BrowserRouter } from "react-router-dom";

console.log("test");
const App = () => {
  return (
    <BrowserRouter>
      <Rouds />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
