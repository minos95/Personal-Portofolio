import React, { Component, useEffect } from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaArrowCircleDown,
} from "react-icons/fa";

import { Portfolio, About, Certif } from "./";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div id="home" className="home">
        <div className="cover ">
          <div className="cover-row ">
            <div className="">
              <div className="container ">
                <h1 className="title" data-aos="fade-left">
                  <strong>Rahal Sid Ahmed Elamine</strong>
                </h1>
                <h4
                  className="subtitle mb-5"
                  data-aos="flip-right"
                  data-aos-delay="500"
                >
                  hello,I'm IT Engineer! I can help you to build a cool product
                  feature website,web application mobile app and deploy them,
                  Moreover I have the ability to find you network solution, Look
                  through some of my work and experience! if you like what you
                  see and have a project you need some of my experience, don't
                  hesitate to contact me
                </h4>
                <nav
                  className="btn-group "
                  data-aos="fade-right"
                  data-aos-delay="1000"
                >
                  <h4 className="m-2 social-media-text ">
                    My work in social media
                  </h4>
                  <a href="https://github.com/minos95" target="_blank">
                    <FaGithub size="45" className=" icon-social-media m-1 " />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sid-ahmed-elamine-rahal-8722541a3/"
                    target="_blank"
                  >
                    <FaLinkedin size="45" className="icon-social-media m-1" />
                  </a>
                  <a href="https://twitter.com/aminos_rahal" target="_blank">
                    <FaTwitter size="45" className="icon-social-media m-1" />
                  </a>
                </nav>
              </div>
            </div>
            <div className="text-center">
              <nav className="row">
                <h1
                  className="title col"
                  data-aos="fade-left"
                  data-aos-delay="1500"
                >
                  <strong>Code </strong>
                </h1>
                <h1
                  className="title col"
                  data-aos="fade-up"
                  data-aos-delay="1700"
                >
                  <strong>Deploy </strong>
                </h1>
                <h1
                  className="title col"
                  data-aos="fade-down"
                  data-aos-delay="1900"
                >
                  <strong>Secure </strong>
                </h1>
                <h1
                  className="title col"
                  data-aos="fade-right"
                  data-aos-delay="2100"
                >
                  <strong>Enjoy!</strong>
                </h1>
              </nav>
            </div>
          </div>
          <div className=" arrow-icon">
            <FaArrowCircleDown color="black " size={50} />
          </div>
        </div>
      </div>

      <Portfolio />
      <Certif />
      <About />
    </div>
  );
};

export { Home };
