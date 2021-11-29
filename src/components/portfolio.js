import React from "react";
import { Item } from "./item";

const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <h1 style={{ color: "#8d9ca6" }}>
        <strong>My Best Work</strong>
      </h1>
      <div className="section">
        <h2>Web Application</h2>
        <div className="sub-section"></div>
      </div>
      <div className="section">
        <h2>Mobile Application</h2>
        <div className="sub-section"></div>
      </div>
      <div className="section">
        <h2>Network</h2>
        <div className="sub-section">
          <Item />
        </div>
      </div>
      <div className="section">
        <h2>Design</h2>
        <div className="sub-section"></div>
      </div>
      <div className="section">
        <h2>Games</h2>
        <div className="sub-section"></div>
      </div>
    </div>
  );
};

export { Portfolio };
