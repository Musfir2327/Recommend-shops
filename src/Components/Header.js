import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <h1 className="logo">
          <span className="logo-text">Quick</span>
          <span className="logo-highlight">Eat</span>
          <span className="logo-icon">🍔</span>
        </h1>
        
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Restaurants</a>
          <a href="#" className="nav-link">Offers</a>
          <a href="#" className="nav-link">Contact</a>
        </nav>
        
        <div className="header-actions">
          <button className="cta-button">Sign In</button>
          <button 
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;