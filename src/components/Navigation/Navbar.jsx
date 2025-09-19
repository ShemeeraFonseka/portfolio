import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className="navbar">
      {/* Mobile menu toggle button */}
      <button 
        className="menu-toggle" 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>
      
      {/* Navigation menu */}
      <ul className={isMenuOpen ? 'active' : ''}>
        <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
        <li><a href="#aboutme" onClick={handleLinkClick}>About</a></li>
        <li><a href="#about" onClick={handleLinkClick}>Skills</a></li>
        <li><a href="#work" onClick={handleLinkClick}>Projects</a></li>
        <li><a href="#career" onClick={handleLinkClick}>Experience</a></li>
        <li><a href="#touch" onClick={handleLinkClick}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;