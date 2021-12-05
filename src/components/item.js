import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Img } from "react-image";
import { FaGithub, FaLink } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";
const Item = (props) => {
  const [show, setShow] = useState(false);
  const { title, subtitle, github, description, images, live } = props;

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <div
        className="item"
        onClick={handleShow}
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <h1 className="item-title">
          <strong>{title}</strong>
        </h1>
        <ul className="item-subtitle">
          {subtitle.map((item) => {
            return <li className="item-subtitle-li">{item}</li>;
          })}
        </ul>
        <img src={images[0]} />
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        className="portfolio-modal"
        size="lg"
      >
        <Modal.Header
          style={{ backgroundColor: "#d98f07" }}
          closeButton
        ></Modal.Header>
        <Modal.Body>
          <img src={images[0]} />
          <div className="modal-row">
            <div className="modal-col-3">
              <div className="container ">
                <h4 className="title">
                  <strong>{title}</strong>
                </h4>
                <ul>
                  {subtitle.map((item) => {
                    return <li className="item-subtitle-li">{item}</li>;
                  })}
                </ul>
                <h5 style={{ maxWidth: "400px" }}>
                  <strong>{description}</strong>
                </h5>
              </div>
            </div>
            <div className="modal-col mt-4 ">
              <div className="container ">
                {github == "" || github == null ? null : (
                  <button type="button" className="modal-button mb-3">
                    <a
                      href={github}
                      style={{ textDecoration: "none" }}
                      target="_blank"
                    >
                      <nav className="row" style={{ textDecoration: "none" }}>
                        <nav className="col w-100">Github</nav>
                        <nav className="col">
                          <FaGithub size="20 " style={{ marginLeft: 150 }} />
                        </nav>
                      </nav>
                    </a>
                  </button>
                )}
                {live == "" || live == null ? null : (
                  <button
                    type="button"
                    className="modal-button"
                    target="_blank"
                  >
                    <a href={github} style={{ textDecoration: "none" }}>
                      <nav className="row" style={{ textDecoration: "none" }}>
                        <nav className="col w-100">Link</nav>
                        <nav className="col">
                          <FaLink size="20 " style={{ marginLeft: 150 }} />
                        </nav>
                      </nav>
                    </a>
                  </button>
                )}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export { Item };
