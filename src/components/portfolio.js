import React, { List } from "react";
import { Item } from "./item";
import { Listitems } from "./listitems";

const Portfolio = () => {
  //const [itemNetwork, itemGame, itemWeb, itemDesign] = Listitems;
  const List = (list) => {
    return list.map((item, index) => {
      return (
        <Item
          key={index}
          title={item.title}
          subtitle={item.subtitle}
          description={item.description}
          images={item.images}
          github={item.github}
          live={item.live}
        />
      );
    });
  };
  return (
    <div id="portfolio" className="portfolio">
      <h1 style={{ color: "#8d9ca6" }}>
        <strong>My Best Work</strong>
      </h1>
      <div className="section">
        <h2>Web Application</h2>
        <div className="sub-section">{List(Listitems.itemWeb)}</div>
      </div>
      <div className="section">
        <h2>Mobile Application</h2>
        <div className="sub-section"></div>
      </div>
      <div className="section">
        <h2>Network</h2>

        <div className="sub-section">{List(Listitems.itemNetwork)}</div>
      </div>
      <div className="section">
        <h2>Design</h2>
        <div className="sub-section">{List(Listitems.itemDesign)}</div>
      </div>
      <div className="section">
        <h2>Games</h2>
        <div className="sub-section">{List(Listitems.itemGame)}</div>
      </div>
    </div>
  );
};

export { Portfolio };
