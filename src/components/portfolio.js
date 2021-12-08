import React, { List } from "react";
import { Item } from "./item";
import cisco from "../assets/items/3tierlabs.png";
import prs from "../assets/items/screenshotprs.png";
import scsclinical from "../assets/items/scsclinicalmanagement.jpg";
import scsMpls from "../assets/items/screenshotMpls.png";

const Portfolio = () => {
  const itemNetwork = [
    {
      title: "Cisco CCNA Labs",
      subtitle: ["Cisco", "Router", "Vlan", "Switch", "Protocols"],
      description:
        "2 Tiers Lab with several Cisco's equipements like Router,Switch layer 2, Switch layer 3, in this lab we used OSPF and static routing to connect different network , to enhance the speed and bandwith between the two switch layer 3 we deploy etherchannel configuration,for avoiding the switch loop we was forced to handle with Stp and the HRSP for the fault-tolerance ",

      images: [cisco],
      github: "https://github.com/minos95/Labs-Cisco-CCNA",
      live: "",
    },
    {
      title: "MPLS Lab",
      subtitle: ["Cisco", "Router", "BGP", "Switch", "Protocols"],
      description:
        "introducing to mpls network for more information visit github link ",

      images: [scsMpls],
      github: "https://github.com/minos95/MPLS-Lab",
      live: "",
    },
  ];
  const itemGame = [
    {
      title: "Paper Rock Scissor",
      subtitle: ["Javascript", "Html", "Css"],
      description:
        "mini game of Paper Rock Scissors game the player should Win the AI player",
      images: [prs],
      github: "https://github.com/minos95/prs",
      live: "",
    },
  ];
  const itemWeb = [
    {
      title: "Clinical management",
      subtitle: ["Flask", "jinja", "Python", "HTML/CSS", "SQL Alchemy"],
      description: `For better management of the clinic, This software specially designed to facilitate several tasks and allow you to manage patients (Adding, modifying and deleting), calculate the number of daily, weekly, monthly and annual patients.
calculate the number of hospitalized patients.
Add for each patient the assessments carried out as well as the surgical interventions.
calculate the number of interventions and group them by type, print the patient's consent for each intervention, print the patient file. This application is installed on your local network as a server to which you can connect the entire network architecture 
of your establishment without forgetting that you can access it even in mobile .`,
      images: [scsclinical],
      github: "https://github.com/minos95/clinicalmanagement",
      live: "",
    },
  ];
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
        <div className="sub-section">{List(itemWeb)}</div>
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
        <div className="sub-section">{List(itemGame)}</div>
      </div>
    </div>
  );
};

export { Portfolio };
