import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import styles from "./NavBar.module.css"
import { ShopContext } from "../ShopContext";

export const Navbar = () => {

  const svgCart = {
    color: 'white',
    background: '#5585b5',
    borderRadius: '50%',
    marginLeft: '15px'
  };

  const { cartItems } = useContext(ShopContext);
  const itemCount = Object.values(cartItems).reduce(
    (total, currentValue) => total + currentValue,
    0
  );

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}><Link to="/"> Cupcake Palace </Link></div>
      <div className="links">
        <Link to="/cart">
          <ShoppingCart size={32} style={svgCart} />
        </Link>
      </div>
        {itemCount > 0 && <span className={styles.itemCount}>{itemCount}</span>}
    </div>
  );
};