import React from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import Signup from "../Signup/Signup";

const Routess = ({
  productItem,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearence,
}) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Products
              productItem={productItem}
              handleAddProduct={handleAddProduct}
            />
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClearence={handleCartClearence}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default Routess;
