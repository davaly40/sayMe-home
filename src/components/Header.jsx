import React from 'react';

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo-container">
                    <img src="/assets/logo.png" alt="SayMe Logo" />
                    <img src="/assets/sayMe.png" alt="SayMe Text" />
                </div>
                <a href="https://sayme.onrender.com" className="cta-button">
                    <span>Isprobaj Nou</span>
                </a>
            </div>
        </header>
    );
}

export default Header;
