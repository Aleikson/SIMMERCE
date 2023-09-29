import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import Styles from "./NavBar.module.css";
import { ShopContext } from "../ShopContext";
import { ReactComponent as Logo } from '../../assets/logo.svg';

export const Navbar = () => {

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
    <div className={`${Styles.navbar} ${isFixed ? Styles.fixed : ""}`}>
        <div className={Styles.navbarContent}>
      <div className={Styles.logo}>
        <Link to="/" onClick={scrollToTop}>
        <Logo alt="Cupcake Palace Logo" className={Styles.logoImage} />
           Cupcake Palace
           </Link>
           </div>
      <div className={Styles.links}>
          <a className={Styles.shop} href="#shopping">Shop</a>
          <a className={Styles.shop} href="/">Galery</a>
          <a className={Styles.shop} href="/">Contact</a>
          <Link to="/cart">
            <ShoppingCart size={32} />
            {itemCount > 0 && <span className={Styles.itemCount}>{itemCount}</span>}
          </Link>
        </div>
      </div>
    </div>
  );
};