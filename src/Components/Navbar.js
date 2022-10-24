import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  let cartCount = useSelector((state) => state.cartReducer.cartItems.length);
  let totalPrice = useSelector((state) => state.cartReducer.totalPrice);

  return (
    <div className="nav-container">
      <nav className="navbar navbar-dark bg-dark">
        <div className="d-inline navbar-nav p-2 mx-auto">
          <span className="btn btn-primary mx-2">Cart Items: {cartCount}</span>
          <span className="btn btn-primary mx-2">
            Total Price: $ {totalPrice}
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
