import React, { Component } from "react";

import { Header, Footer } from "../../components";
import "./style.css";

class Layout extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
