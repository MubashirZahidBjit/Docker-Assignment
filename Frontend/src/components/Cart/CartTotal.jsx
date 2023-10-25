// CartTotal.jsx
import React from "react";
import { useSelector } from "react-redux";

const CartTotal = () => {
  const cartItems = useSelector((state) => state.cart);

  const getTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
    return totalPrice;
  };

  return (
    <div>
      <h2>Cart Total</h2>
      <p>Total Price: ${getTotalPrice()}</p>
      <button>Order</button>
    </div>
  );
};

export default CartTotal;
