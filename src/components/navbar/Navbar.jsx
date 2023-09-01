// Navbar.js
import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, Outlet } from "react-router-dom";
import Footer from "../footer/Footer"

function Navbar() {
const {cart} = useContext(CartContext);
 

  return (
   <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container d-flex justify-content-between">
        <Link className="navbar-brand" to="/">
          UWS
        </Link>
        <div className="d-flex align-items-center">
          <Link className="nav-link d-inline-block" to="/cart">
          <i className="fas fa-shopping-cart"><span className="badge badge-light text-dark">{cart.length}</span></i>
          </Link>
        </div>
      </div>
    </nav>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default Navbar;
