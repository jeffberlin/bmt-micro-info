import React from 'react';
import Modal from 'react-bootstrap/Modal';

function FirefoxModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Clearing Cache on Mozilla Firefox 1.0
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="modal-text" style={{ listStyleType: 'decimal' }}>
          <li>Click <strong>Tools</strong> and select <strong>Options</strong> on the Mozilla Firefox menu bar.</li>
          <li>Click the <strong>Privacy Icon</strong> on the Option menu bar to open the <strong>Privacy Properties</strong>.</li>
          <li>Click the <strong>Clear</strong> button across from the <strong>Cache option</strong>.</li>
          <li>Click <strong>Ok</strong> to return to the browser main page.</li>
          <li>Exit and relaunch the browser.</li>
        </ul>
      </Modal.Body>
    </Modal>
  )
}

export default FirefoxModal;
