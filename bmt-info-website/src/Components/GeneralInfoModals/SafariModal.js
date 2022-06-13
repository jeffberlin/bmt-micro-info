import Modal from 'react-bootstrap/Modal';

function IEMacModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Clearing Cache on Safari 1.0 for MacOS X
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="modal-text" style={{ listStyleType: 'decimal' }}>
          <li>Open <strong>Safari</strong>.</li>
          <li>Select <strong>Empty Cache</strong>.</li>
          <li>Click <strong>Empty</strong> on the <strong><em>Are you sure</em></strong> message box.</li>
          <li>Exit and relaunch the browser.</li>
        </ul>
      </Modal.Body>
    </Modal>
  )
}

export default IEMacModal;
