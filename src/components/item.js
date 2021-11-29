import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Img } from "react-image";
import cisco from "../assets/items/3tierlabs.png";
const Item = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    console.log("close---------------");
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="item" onClick={handleShow}>
        <h1 className="item-title">
          <strong>Title</strong>
        </h1>
        <ul className="item-subtitle">
          <li>Cisco</li>
        </ul>
        <img src={cisco} />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export { Item };
