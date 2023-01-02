import React from "react";
import "../CarWidget/CarWidget.js";
import CarWidget from "../CarWidget/CarWidget.js";
import "./NavBar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="menu-container">
      <div className="nav-logo">
        <Link to='/' className="nav-link">
          CompraOnline
        </Link>
      </div>
      <ul className="nav-list">
        <li>
          <Link className="nav-list" to="/categoria/TV">
            TV
          </Link>
        </li>
        <li>
          <Link  className="nav-list" to="/categoria/CONSOLA">
            Consolas
          </Link>
        </li>
      </ul>
      <CarWidget/>
    </div>
  );
};

export default Navbar;
