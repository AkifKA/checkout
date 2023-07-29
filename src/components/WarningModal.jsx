import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function WarningModal({ showWarningModal, setShowWarningModal }) {
  const handleClose = () => setShowWarningModal(false);
  const handleShow = () => setShowWarningModal(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={showWarningModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete the product?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="primary">Yes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WarningModal;
