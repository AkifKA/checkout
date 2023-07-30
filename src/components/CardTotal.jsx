import React from "react";

const taxRate = 0.18;
let shipping = 0;

const CardTotal = ({ products }) => {
  const subTotal = products.reduce(
    (acc, product) =>
      product.price * product.amount * product.dampingRate + acc,
    0
  );
  const taxedPrice = subTotal * taxRate;

  if (subTotal <= 2000) {
    shipping = 25;
  }
  return (
    <table className="table w-100">
      <tbody>
        <tr className="text-end">
          <th className="text-start">Subtotal</th>
          <td>
            $<span className="subtotal">{subTotal.toFixed(2)}</span>
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Tax(18%)</th>
          <td>
            $<span className="tax">{taxedPrice.toFixed(2)}</span>
          </td>
        </tr>

        <tr className="text-end">
          <th className="text-start">Shipping</th>
          <td>
            {subTotal > 2000 ? (
              <span className="shipping text-warning">
                $0 (No shipping after $2000!)
              </span>
            ) : (
              <>
                $<span className="shipping">{shipping}</span>
              </>
            )}
          </td>
        </tr>
        <tr className="text-end">
          <th className="text-start">Total</th>
          <td>
            $
            <span className="total">
              {(subTotal + shipping + taxedPrice).toFixed(2)}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CardTotal;
