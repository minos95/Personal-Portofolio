import React, { Component } from "react";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaArrowCircleDown,
} from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { Portfolio, About } from "./";
const Home = () => {
  return (
    <div>
      <div className="cover">
        <div className="cover-row ">
          <div className="">
            <div className="container ">
              <h1 className="title">
                <strong>Rahal Sid Ahmed Elamine</strong>
              </h1>
              <h4 className="subtitle mb-5">
                hello,I'm IT Engineer! I can help you to build a cool product
                feature website,web application mobile app and deploy them,
                Moreover I have the ability to find you network solution, Look
                through some of my work and experience! if you loke what you see
                and have a project you need some of my experience, don't
                hesitate to contact me
              </h4>
              <nav className="btn-group ">
                <h4 className="m-2 social-media-text ">
                  My work in social media
                </h4>

                <FaGithub size="45" className=" icon-social-media m-1 " />

                <FaLinkedin size="45" className="icon-social-media m-1" />
                <FaTwitter size="45" className="icon-social-media m-1" />
              </nav>
            </div>
          </div>
          <div className="text-center">
            <h1 className="title">
              <strong>Code Deploy Enjoy!</strong>
            </h1>
          </div>
        </div>
        <div className=" arrow-icon">
          <FaArrowCircleDown color="black " size={50} />
        </div>
      </div>

      <div className="container">
        <Portfolio />
        <About />
      </div>
    </div>
  );
};

export { Home };
