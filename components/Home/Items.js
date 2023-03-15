import React, { useContext } from "react";
import { ShopContext } from "../ShopContext";
import styles from "./Home.module.css"

export const Items = (props, img) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];

  return (
    <div className={styles.product}>
      <img src={productImage} alt="" />
      <div className={styles.description}>
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className={styles.addToCartBttn} onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};