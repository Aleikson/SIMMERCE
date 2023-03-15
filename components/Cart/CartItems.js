import React, { useContext } from "react";
import { ShopContext } from "../ShopContext";
import styles from "./Cart.module.css"

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className={styles.cartItem}>
      <img src={productImage} alt="" />
      <div className={styles.description}>
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${price}</p>
        <div className={styles.countHandler}>
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};