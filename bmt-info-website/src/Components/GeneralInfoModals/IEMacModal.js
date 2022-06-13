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
          Clearing Cache on Microsoft Internet Explorer 4.0 - 5.0 for MacOS
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="modal-text" style={{ listStyleType: 'decimal' }}>
          <li>Click <strong>Edit</strong> and select <strong>Preferences</strong> on the Internet Explorer menu bar.</li>
          <li>Click the arrow beside <strong>Web Browser</strong>.</li>
          <li>Click <strong>Advanced</strong>.</li>
          <li>Click <strong>Empty Now</strong>.</li>
        </ul>
      </Modal.Body>
    </Modal>
  )
}

export default IEMacModal;
