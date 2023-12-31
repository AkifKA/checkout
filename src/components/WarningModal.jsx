import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function WarningModal({
  showWarningModal,
  setShowWarningModal,
  resetAmount,
  handleRemove,
  name,
}) {
  const handleClose = () => {
    resetAmount();
    setShowWarningModal(false);
  };

  return (
    <>
      <Modal
        show={showWarningModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete {name} product?</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            No
          </Button>
          <Button variant="danger" onClick={handleRemove}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WarningModal;
