import Modal from 'react-bootstrap/Modal';

function IE4Modal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Clearing Cache on Microsoft Internet Explorer 4.0
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul className="modal-text" style={{ listStyleType: 'decimal' }}>
          <li>Click <strong>Start</strong>, select <strong>Settings</strong> and <strong>Control Panel</strong>.</li>
          <li>Double-click <strong>Internet Options</strong> to open <strong>Internet Properties</strong>.</li>
          <li>Click the <strong>General</strong> tab.</li>
          <li>Click <strong>Delete Files</strong>.</li>
          <li>Click <strong>OK</strong> on the <strong>Delete Files</strong> dialog box.</li>
          <li>Click <strong>OK</strong>.</li>
        </ul>
      </Modal.Body>
    </Modal>
  )
}

export default IE4Modal;
