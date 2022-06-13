import Modal from 'react-bootstrap/Modal';

function NS6Modal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Clearing Cache on Netscape Communicator / Navigator 6.0
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="modal-text" style={{ listStyleType: 'decimal' }}>
          <li>Click <strong>Edit</strong> and select <strong>Preferences</strong> on the Netscape menu bar.</li>
          <li>Click <strong>Advanced</strong>.</li>
          <li>Click <strong>Cache</strong>.</li>
          <li>Click the <strong>Clear Memory Cache</strong> button.</li>
          <li>Click the <strong>Clear Disk Cache</strong> button.</li>
          <li>Click <strong>OK</strong>.</li>
        </ul>
      </Modal.Body>
    </Modal>
  )
}

export default NS6Modal;
