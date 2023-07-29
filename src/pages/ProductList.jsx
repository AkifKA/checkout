import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";
import Loading from "../components/Loading";

const ProductList = () => {
  const url = process.env.REACT_APP_API_URL;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getProducts = async () => {
    console.log("merhaba");

    try {
      setLoading(false);
      const { data } = await axios(url);
      setProducts(data);
      setErrorState(false);
      console.log(data);
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
      setErrorState(true);
    }
  };

  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mt-3">
      <div className={"bg-light d-sm-block d-md-flex"}>
        {loading ? (
          <Loading />
        ) : products.length > 0 ? (
          <>
            <article id="product-panel" className="col-md-5">
              {products.map((item) => {
                return (
                  <ProductCard
                    key={item.id}
                    item={item}
                    getProducts={getProducts}
                  />
                );
              })}
            </article>
            <article className="col-md-5 m-3">
              <CardTotal />
            </article>
          </>
        ) : (
          !errorState && (
            <p className="text-center text-danger w-100">No products data...</p>
          )
        )}

        {errorState && (
          <p className="text-center text-danger w-100">Error: {errorMessage}</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
