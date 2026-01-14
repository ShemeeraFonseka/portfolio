import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Shemeera</h1>

      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      <ul className={isMenuOpen ? 'nav-list active' : 'nav-list'}>
        <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
        <li><a href="#aboutme" onClick={handleLinkClick}>About</a></li>
        <li><a href="#about" onClick={handleLinkClick}>Skills</a></li>
        <li><a href="#career" onClick={handleLinkClick}>Experience</a></li>
        <li><a href="#work" onClick={handleLinkClick}>Projects</a></li>
        <li><a href="#touch" onClick={handleLinkClick}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;