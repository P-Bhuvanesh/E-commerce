import React from "react";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav">
        <h1 className="name">Trendify Hub</h1>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/order">Orders</Link>
          </li>
          <li>
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
