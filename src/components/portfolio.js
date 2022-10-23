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
        <h2 className="section-title">Web Application</h2>
        <div className="sub-section">{List(Listitems.itemWeb)}</div>
      </div>
      <div className="section">
        <h2 className="section-title">Mobile Application</h2>
        <div className="sub-section">{List(Listitems.itemMobileApp)}</div>
      </div>
      <div className="section">
        <h2 className="section-title">Network</h2>

        <div className="sub-section">{List(Listitems.itemNetwork)}</div>
      </div>

      <div className="section">
        <h4 className="section-title">Games</h4>
        <div className="sub-section">{List(Listitems.itemGame)}</div>
      </div>
      <div className="section">
        <h4 className="section-title">Certification</h4>
        <div className="sub-section">{List(Listitems.itemCertificat)}</div>
      </div>
    </div>
  );
};

export { Portfolio };
