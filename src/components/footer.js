import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaMapMarkerAlt,
  FaMailBulk,
  FaPhone,
  FaMap,
} from "react-icons/fa";

const Footer = () => {
  const myRef = useRef(null);
  return (
    <footer id="contact" className="footer" ref={myRef}>
      <Container>
        <div className="row">
          <div className="col p-5">
            <h2>Contact me</h2>
            <nav>
              <nav className="d-flex flex-row">
                <FaMapMarkerAlt className="m-1" />
                <h5>Oran, Algeria</h5>
              </nav>
              <nav className="d-flex flex-row">
                <FaMailBulk className="m-1" />
                <h5>rahal.aminos@gmail.com</h5>
              </nav>
              <nav className="d-flex flex-row">
                <FaPhone className="m-1" />
                <h5>+213665326140</h5>
              </nav>
            </nav>
            <nav className="btn-group social-media">
              <FaGithub size="38" className=" icon-social-media m-1" />
              <FaLinkedin size="38" className="icon-social-media m-1" />
              <FaTwitter size="38" className="icon-social-media m-1" />
            </nav>
          </div>
          <div className="col p-5">
            <form>
              <input
                type="text"
                className="form-control form-control-lg mb-2 message"
                name="name"
                placeholder="Name"
              />
              <input
                type="email"
                className="form-control form-control-lg mb-2"
                name="email"
                placeholder="email"
              />
              <input
                type="text"
                className="form-control form-control-lg mb-2"
                name="Subject"
                placeholder="Subject"
              />
              <textarea
                className="form-control mb-2 pb-5 "
                id="message"
                placeholder="Message"
              ></textarea>
              <input
                className="form-control btn btn-lg btn-outline-warning"
                type="submit"
                name="submit"
              />
            </form>
          </div>
        </div>
        <h5 className="copy_right">
          © 2021 Rahal Sid ahmed Elamine, All right reserved
        </h5>
      </Container>
    </footer>
  );
};

export { Footer };
