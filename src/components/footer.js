import React, { useRef, useState, useEffect } from "react";
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
import Axios from "axios";

const Footer = () => {
  const myRef = useRef(null);
  const [frommail, setfrommail] = useState("");
  const [password, setpassword] = useState(0);
  const [tomail, settomail] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      console.log(response.data);
    });
  }, []);

  const sendmail = () => {
    Axios.post("http://localhost:3001/mail", {
      frommail: frommail,
      password: password,
      tomail: tomail,
    }).then((response) => {
      if (response.data.msg === "success") {
        alert("Email sent, awesome!");
      } else if (response.data.msg === "fail") {
        alert("Oops, something went wrong. Try again");
      }
    });
  };

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
              <a href="https://github.com/minos95" target="_blank">
                <FaGithub size="38" className=" icon-social-media m-1" />
              </a>
              <a
                href="https://www.linkedin.com/in/sid-ahmed-elamine-rahal-8722541a3/"
                target="_blank"
              >
                <FaLinkedin size="38" className="icon-social-media m-1" />
              </a>
              <a href="https://twitter.com/aminos_rahal" target="_blank">
                <FaTwitter size="38" className="icon-social-media m-1" />
              </a>
            </nav>
          </div>
          <div className="col p-5">
            <form
              action="rahal.aminos@gmail.com"
              method="post"
              enctype="text/plain"
            >
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
