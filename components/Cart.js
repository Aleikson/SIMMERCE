import React, { useContext } from "react";
import { ShopContext } from "./ShopContext";
import { Products } from "./Products";
import { CartItem } from "./CartItems";
import { useNavigate } from "react-router-dom";
import "../styles/Cart.css"

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {Products.filter(product => cartItems[product.id] !== 0)
        .map((product,items) => <CartItem key={items} data={product} />)}      
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }} > {" "}Checkout{" "} </button>
        </div>)
        : (<h1> Your Shopping Cart is Empty</h1>)} </div>
  );
};