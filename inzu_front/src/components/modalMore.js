import React from "react";
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default MyModal;
