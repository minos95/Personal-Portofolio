import cisco from "../assets/items/3tierlabs.png";
import prs from "../assets/items/screenshotprs.png";
import scsclinical from "../assets/items/scsclinicalmanagement.jpg";
import scsMpls from "../assets/items/screenshotMpls.png";
import scstodo from "../assets/items/scstodo.png";
import sahat from "../assets/items/sahatatoute.jpg";
import acmilan from "../assets/items/acmilan.jpg";
import kdpFb1 from "../assets/items/collegerulledfootballBlue.png";
import kdpKids from "../assets/items/coverkids.png";
import coversoug from "../assets/items/coversoug.jpg";

export const Listitems = {
  itemNetwork: [
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
  ],
  itemGame: [
    {
      title: "Paper Rock Scissor",
      subtitle: ["Javascript", "Html", "Css"],
      description:
        "mini game of Paper Rock Scissors game the player should Win the AI player",
      images: [prs],
      github: "https://github.com/minos95/prs",
      live: "",
    },
  ],
  itemWeb: [
    {
      title: "Clinical management",
      subtitle: ["Flask", "jinja", "Python", "HTML/CSS", "SQL Alchemy"],
      description: `For better management of the clinic, This software specially designed to facilitate several tasks and allow you to manage patients (Adding, modifying and deleting), calculate the number of daily, weekly, monthly and annual patients.
calculate the number of hospitalized patients.
Add for each patient the assessments carried out as well as the surgical interventions.
calculate the number of interventions and group them by type, print the patient's consent for each intervention, print the patient file. This application should be installed on your local network as a server 
without forgetting that you can access it even in mobile .`,
      images: [scsclinical],
      github: "https://github.com/minos95/clinicalmanagement",
      live: "",
    },
    {
      title: "Todo App",
      subtitle: ["Flask", "jinja", "Python", "HTML/CSS", "SQL Alchemy"],
      description: `To organise your daily work this Application provide you the ability to manage your todo   `,
      images: [scstodo],
      github: "https://github.com/minos95/todo-application",
      live: "",
    },
  ],
  itemDesign: [
    {
      title: "Umra Promotion",
      subtitle: ["photoshop"],
      description:
        "This is my favorite campaign because the client was so much fun and encouraged us to try things we had never done before",
      images: [sahat],
      github: "",
      live: "",
    },
    {
      title: "Cover for website",
      subtitle: ["photoshop"],
      description: "Beautiful cover design for a page's website",
      images: [coversoug],
      github: "",
      live: "",
    },
    {
      title: "Ac Milan post",
      subtitle: ["photoshop"],
      description: "This is ac milan page after winning match",
      images: [acmilan],
      github: "",
      live: "",
    },
    {
      title: "Football Notebook Cover",
      subtitle: ["photoshop"],
      description:
        "Cover college ruled notebook design for Amercain football fans published in amazon",
      images: [kdpFb1],
      github: "",
      live: "",
    },
    {
      title: "Kids Coloring Notebook Cover ",
      subtitle: ["photoshop"],
      description: "This cover for coloring notebook kids published in amazon",
      images: [kdpKids],
      github: "",
      live: "",
    },
  ],
};
