import React, { useState } from "react";
import { Modal, Button, Media } from "react-bootstrap";
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
        style={{ marginRight: "20px" }}
      >
        <div className="item-header">
          <h1 className="item-title">
            <strong>{title}</strong>
          </h1>
          <ul className="item-subtitle">
            {subtitle.map((item) => {
              return <li className="item-subtitle-li">{item}</li>;
            })}
          </ul>
          <div className="item-button " variant="warning">
            See the project
          </div>
        </div>
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
            <div className="modal-col1">
              <div className="container " style={{ flexDirection: "column" }}>
                <h4 className="modal-title">
                  <strong>{title}</strong>
                </h4>
                <ul className="modal-subtitle">
                  {subtitle.map((item) => {
                    return <li className="item-subtitle-li">{item}</li>;
                  })}
                </ul>

                <div>
                  <h5 className="modal-description">
                    <strong>{description}</strong>
                  </h5>
                </div>
              </div>
            </div>
            <div className="modal-col2  ">
              {github == "" || github == null ? null : (
                <button type="button" className="modal-button mb-3 ">
                  <a
                    href={github}
                    style={{ textDecoration: "none" }}
                    target="_blank"
                  >
                    <nav style={{ display: "flex", flexDirection: "row" }}>
                      <nav className="col w-100">Github</nav>
                      <nav className="col">
                        <FaGithub size="20 " style={{ marginLeft: 150 }} />
                      </nav>
                    </nav>
                  </a>
                </button>
              )}
              {live == "" || live == null ? null : (
                <button type="button" className="modal-button " target="_blank">
                  <a
                    href={live}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <nav style={{ display: "flex", flexDirection: "row" }}>
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
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export { Item };
