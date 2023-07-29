import axios from "axios";
import WarningModal from "./WarningModal";
import { useEffect, useState } from "react";
import WarningModal2 from "./WarningModal2";

const ProductCard = ({ item, getProducts }) => {
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [showWarningModal2, setShowWarningModal2] = useState(false);

  const { name, image, amount, dampingRate, price, id } = item;
  const url = process.env.REACT_APP_API_URL;

  const handleMinus = async () => {
    try {
      await axios.put(`${url}/${id}`, {
        ...item,
        amount: amount - 1,
      });
    } catch (error) {
      console.log(error);
    }

    getProducts();
  };

  const handlePlus = async () => {
    try {
      await axios.put(`${url}/${id}`, {
        ...item,
        amount: amount + 1,
      });
    } catch (error) {
      console.log(error);
    }
    getProducts();
  };

  const resetAmount = async () => {
    try {
      await axios.put(`${url}/${id}`, {
        ...item,
        amount: 1,
      });
    } catch (error) {
      console.log(error);
    }
    getProducts();
  };

  const handleRemove = () => {
    setShowWarningModal2(true);
  };
  useEffect(() => {
    amount === 0 && setShowWarningModal(true);
  }, [amount]);

  return (
    <div className="card shadow-lg mb-3">
      <div className="row g-0">
        <div className="col-md-5">
          <img
            src={image}
            className="w-100 h-100 rounded-start"
            alt={`resim${id}`}
            title={name}
          />
        </div>

        <div className="col-md-7">
          <div className="card-body">
            <h5 className="card-title" role="button">
              {name.toUpperCase()}
            </h5>
            <div className="product-price">
              <p className="text-warning h2">
                $
                <span className="damping-price">
                  {(price * dampingRate).toFixed(2)}
                </span>
                <span className="h5 text-dark text-decoration-line-through">
                  {parseFloat(price).toFixed(2)}
                </span>
              </p>
            </div>
            <div className="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
              <div className="quantity-controller">
                <button className="btn btn-secondary btn-sm">
                  <i className="fas fa-minus" onClick={handleMinus}></i>
                </button>
                <p className="d-inline mx-4" id="product-quantity">
                  {amount}
                </p>
                <button className="btn btn-secondary btn-sm">
                  <i className="fas fa-plus" onClick={handlePlus}></i>
                </button>
              </div>
            </div>
            <div className="product-removal mt-4">
              <button
                className="btn btn-danger btn-sm w-100 remove-product"
                onClick={handleRemove}
              >
                <i className="fa-solid fa-trash-can me-2"></i>Remove
              </button>
            </div>
            <div className="mt-2">
              Product Total: $
              <span className="product-line-price">
                {(price * dampingRate * amount).toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </div>
      {showWarningModal && (
        <WarningModal
          showWarningModal={showWarningModal}
          setShowWarningModal={setShowWarningModal}
          handleRemove={handleRemove}
          name={name}
          resetAmount={resetAmount}
        />
      )}
      {showWarningModal2 && (
        <WarningModal2
          showWarningModal2={showWarningModal2}
          setShowWarningModal2={setShowWarningModal2}
          name={name}
          getProducts={getProducts}
          url={url}
          id={id}
        />
      )}
    </div>
  );
};

export default ProductCard;
