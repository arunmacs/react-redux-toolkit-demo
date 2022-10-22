import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/Reducers/cartReducer";

import data from "../Data/data.json";

const Products = () => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row">
        {data.products.map((product) => (
          <div className="col m-2" key={product.id}>
            <div
              className="card"
              style={{
                width: "auto",
                height: "auto",
                textAlign: "center",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="card-img-top"
                style={{ width: "15rem", height: "15rem" }}
              />
              <div
                className="card-title"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span>{product.title}</span>&nbsp;
                <span>&nbsp; |&nbsp; $&nbsp;</span>
                <span>{product.price}</span>
              </div>
              <div
                className="card-body p-1 w-100"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <button
                  onClick={() => dispatch(addToCart(product))}
                  className="btn btn-primary"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => dispatch(removeFromCart(product))}
                  className="btn btn-primary"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
