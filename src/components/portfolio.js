import React, { List } from "react";
import { Item } from "./item";

const Portfolio = () => {
  const itemNetwork = [
    {
      title: "Cisco CCNA Labs",
      subtitle: ["Cisco", "Router", "Vlan", "Switch", "Protocols"],
      description:
        "3 Tiers Lab with several Cisco's equipents like Router,Switch layer 2, Switch layer 3, in this lab we used OSpf routing to connect different network and static, to enhance the speed and bandwith between the two switch layer 3 employ etherchannel configuration,for avoiding the switch loop we was forced to handle with Stp, the Hsrp protocol has the ability to work with several gateway we apply to increase play the role of loadbalancer  ",

      images: ["../"],
      github: "https://github.com/minos95/Labs-Cisco-CCNA",
      live: "khkj",
    },
  ];
  const List = (list) => {
    return list.map((item, index) => {
      console.log("****************");
      console.log(item);
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
        <div className="sub-section"></div>
      </div>
      <div className="section">
        <h2>Mobile Application</h2>
        <div className="sub-section"></div>
      </div>
      <div className="section">
        <h2>Network</h2>
        <div className="sub-section">{List(itemNetwork)}</div>
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
