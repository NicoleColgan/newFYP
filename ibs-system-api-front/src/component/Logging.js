import React, { useState } from "react";
import { Col, Modal, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Calendar from 'react-calendar'

const Logging = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShowModal}>
        Open Modal
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal Content</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Logging;
