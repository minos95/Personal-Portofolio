import React, { useEffect } from "react";
import {
  FaReact,
  FaGithub,
  FaHtml5,
  FaPython,
  FaBootstrap,
  FaDigitalOcean,
  FaAws,
  FaLinux,
  FaWindows,
} from "react-icons/fa";
import {
  SiFlask,
  SiJavascript,
  SiJinja,
  SiMongodb,
  SiMysql,
  SiHeroku,
  SiAdobephotoshop,
} from "react-icons/si";
import Aos from "aos";
import "aos/dist/aos.css";
import profile from "../assets/profile/profile.jpg";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="about" className="about">
      <h1 style={{ color: "#8d9ca6" }}>
        <strong>About</strong>
      </h1>
      <div className="about-row ">
        <div className="about-col profile-col " data-aos="fade-right">
          <img
            src={profile}
            width="140"
            height="140"
            className="photo-profile"
          />
          <h5>
            Hello I'm Rahal ElAmine specialised in different Technology like
            React &amp; Redux Flask/jinja, Javascript, Nodejs, SQL, Mongodb.
            <br />I build Web Application, Mobile app,and beatiful website for
            compagnies,and help them in networking solution,
          </h5>
        </div>
        <div className="about-col skills-col">
          <div className="mb-4">
            <h4 className="mb-3">
              <strong>Langage and Framework</strong>
            </h4>

            <div className="about-icon " data-aos="fade-right">
              <FaHtml5 size={60} className="m-2 " />
              <SiJavascript size={60} className="m-2 " />
              <FaBootstrap size={60} className="m-2 " />
              <FaPython size={60} className="m-2 " />
              <SiJinja size={60} className="m-2 " />
              <FaReact size={60} className="m-2 " />

              <SiMysql size={60} className="m-2 " />
              <SiMongodb size={60} className="m-2 " />
            </div>
          </div>
          <div className="mb-4">
            <h4 className="mb-3">
              <strong>tools</strong>
            </h4>
            <div className="about-icon" data-aos="fade-up" data-aos-delay="500">
              <FaGithub size={60} className="m-2" />
              <SiHeroku size={60} className="m-2" />
              <FaDigitalOcean size={60} className="m-2" />
              <FaAws size={60} className="m-2" />
              <SiAdobephotoshop size={60} className="m-2" />
            </div>
          </div>
          <div className="mb-4">
            <h4 className="mb-6">
              <strong>Professional</strong>
            </h4>

            <ul
              className="about-list"
              data-aos="flip-right"
              data-aos-delay="800"
            >
              <li className="about-list-item">
                <p>Remote programming</p>
              </li>
              <li className="about-list-item">
                <p>Teamwork </p>
              </li>
              <li className="about-list-item">
                <p>Global Teams </p>
              </li>
              <li className="about-list-item">
                <p>Communication</p>
              </li>
              <li className="about-list-item">
                <p>Team Building</p>
              </li>
              <li className="about-list-item">
                <p>Problem Solving</p>
              </li>
              <li className="about-list-item">
                <p>Mentoring</p>
              </li>
              <li className="about-list-item">
                <p>Github</p>
              </li>
              <li className="about-list-item">
                <p>Gitlab</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export { About };
