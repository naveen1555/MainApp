// HamburgerMenu.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Hamburger from "hamburger-react";
import "./hamburgerMenu.css";

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("username");
    Cookies.remove("password");
    navigate("/login"); // redirect to login
  };

  return (
    <nav className="navContainer">
      <div className="navInner glass-card">
        <div className="logo">MyLogo</div>

        {/* Desktop Menu */}
<ul className="menu-list desktop-menu">
  <li>Home</li>
  <li>About</li>
  <li>Services</li>
  <li>Contact</li>
  <li onClick={handleLogout} className="logout-item">Logout</li>
</ul>


        {/* Hamburger icon for mobile */}
        <div className="hamburger-wrapper">
          <Hamburger  toggled={isOpen} toggle={setOpen} />
        </div>
      </div>



<div className={`sidebar ${isOpen ? "open" : ""}`}>
  <ul className="menu-list">
    <li onClick={() => setOpen(false)}>Home</li>
    <li onClick={() => setOpen(false)}>About</li>
    <li onClick={() => setOpen(false)}>Services</li>
    <li onClick={() => setOpen(false)}>Contact</li>
    <li
      className="logout-item"
      onClick={() => {
        setOpen(false);
        handleLogout();
      }}
    >
      Logout
    </li>
  </ul>
</div>

      {/* Overlay */}
      {isOpen && <div className="overlay" onClick={() => setOpen(false)}></div>}

      {/* Logout for mobile */}

    </nav>
  );
};

export default HamburgerMenu;
