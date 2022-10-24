import React, { useState } from "react";
import { Modal, Button, Media } from "react-bootstrap";
import { Img } from "react-image";
import { FaGithub, FaLink, FaWindows } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const ItemCertif = (props) => {
  const [show, setShow] = useState(false);

  const { title, subtitle, github, description, images, live } = props;
  let navigate = useNavigate();

  return (
    <>
      <div
        className="item-certif"
        id="certif"
        onClick={() => window.open(live, "_blank")}
        style={{ marginRight: "20px" }}
      >
        <div className="item-button " variant="warning">
          See the project
        </div>

        <img src={images[0]} />
      </div>
    </>
  );
};

export { ItemCertif };
