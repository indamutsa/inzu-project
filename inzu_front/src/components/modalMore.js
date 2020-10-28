import React from "react";
import { Link } from "react-router-dom";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const MyModal = (props) => {
  const { modalShow, closeBtn, toggle } = props.data;
  return (
    <div>
      <Modal isOpen={modalShow} toggle={toggle} centered>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Inzu Estates
        </ModalHeader>
        <ModalBody>
          <img
            src={require("../assets/images/1.jpg")}
            alt="ModalImage"
            className="img-fluid mb-3"
          />
          At inzuestates, we take care of your accommodation search. We look for
          you, affordable and suitable accommodations that corresponnd to your
          budget. We stick together with our clients to ensure their
          comfortability in their new homes. With us, not only do we take care
          of your search for housing, but we make sure when you are not happy,
          you find another house as soon as possible at an affordable price. We
          have best realtors, punctual services with fantastic qualities. We are
          based in Cologne, Germany.
          <br />
          Click below to contact us
        </ModalBody>
        <ModalFooter>
          <Link to="/about">
            <Button color="primary" onClick={toggle}>
              Learn more
            </Button>{" "}
          </Link>
          <Button color="secondary" onClick={toggle}>
            Go back
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default MyModal;
