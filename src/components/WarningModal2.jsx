import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function WarningModal2({
  showWarningModal2,
  setShowWarningModal2,
  getProducts,
  name,
  url,
  id,
}) {
  const handleClose = () => {
    setShowWarningModal2(false);
  };

  const handleRemove = async () => {
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getProducts();
  };

  return (
    <>
      <Modal
        show={showWarningModal2}
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

export default WarningModal2;
