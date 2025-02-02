import React from 'react';
// import Link from 'react-router-dom';
import './Nav_bar.css'; // Import the CSS file for styling the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">KALAVITHIH RESIGNART</h1>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          {/* <li><Link to="/Home">Home</Link></li> */}
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#products">Products</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa"; // Icons for menu
// import "./Nav_bar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false); // State for menu toggle

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <h1 className="navbar-logo">Kalavithih Resigart</h1>

//         {/* Menu Icon for Mobile */}
//         <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </div>

//         {/* Navbar Links */}
//         <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/products">Products</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
