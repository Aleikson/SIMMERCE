import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "../styles/NavBar.css"
import { ShopContext } from "./ShopContext";

export const Navbar = () => {

  const svgCart = {    
    color: 'white',
    background: '#5585b5',
    borderRadius: '50%'       
  };

  const { cartItems } = useContext(ShopContext);
  const itemCount = Object.values(cartItems).reduce(
    (total, currentValue) => total + currentValue,
    0
  );

  return (
    <div className="navbar">    
        <div className="logo"><Link to="/"> Cupcake Palace </Link></div>
      <div className="links">        
        <Link to="/cart">
          <ShoppingCart size={32} style={svgCart}/>
        </Link>
          {itemCount > 0 && <span className="itemCount">{itemCount}</span>}
      </div>
    </div>
  );
};