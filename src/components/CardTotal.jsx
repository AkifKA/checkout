import React from "react";

const taxRate = 0.18;
let shipping = 25;

const CardTotal = ({ products }) => {
  const subTotal = products.reduce(
    (acc, product) =>
      product.price * product.amount * product.dampingRate + acc,
    0
  );
  const taxedPrice = subTotal * taxRate;

  if (subTotal > 4000) {
    shipping = 0;
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
            {subTotal > 4000 ? (
              <span className="shipping">No shipping</span>
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
            $<span className="total">{subTotal + shipping + taxedPrice}</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CardTotal;
