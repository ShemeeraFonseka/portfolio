import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        Shemeera<span className="dot">.</span>
      </a>

      <button
        className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={handleLinkClick}>
            Home
          </a>
        </li>
        <li>
          <a href="#aboutme" onClick={handleLinkClick}>
            Education
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleLinkClick}>
            Tech Stack
          </a>
        </li>
        <li>
          <a href="#career" onClick={handleLinkClick}>
            Experience
          </a>
        </li>
        <li>
          <a href="#work" onClick={handleLinkClick}>
            Projects
          </a>
        </li>
        <li>
          <a href="#touch" onClick={handleLinkClick} className="nav-cta">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
