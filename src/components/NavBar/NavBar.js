import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import styles from "./NavBar.module.css"
import { ShopContext } from "../ShopContext";

export const Navbar = () => {

  const svgCart = {
    color: '#2a2438'
  };

  const { cartItems } = useContext(ShopContext);
  const itemCount = Object.values(cartItems).reduce(
    (total, currentValue) => total + currentValue,
    0
  );

  const [isFixed, setIsFixed] = useState(false);
 
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.navbar} ${isFixed ? styles.fixed : ""}`}>
      <div className={styles.logo}><Link to="/" onClick={scrollToTop}> Cupcake Palace </Link></div>
      <div className={styles.links}>
        <a className={styles.shop} href="#shopping">Shop</a>
        <Link to="/cart">
          <ShoppingCart size={32} style={svgCart} />
          {itemCount > 0 && <span className={styles.itemCount}>{itemCount}</span>}
        </Link>
      </div>
    </div>
  );
};