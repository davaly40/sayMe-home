import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img src="/assets/logo.png" alt="NOA" className="logo" />
        </div>
        <div className="header-buttons">
          <a href="https://sayme.onrender.com" className="cta-button">
            <span>NOA</span>
          </a>
          <a href="https://saymeai.onrender.com" className="cta-button accent">
            <span>NOA AI</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
