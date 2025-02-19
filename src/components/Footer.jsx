import React, { useState } from 'react';

function Footer() {
    const [showEmail, setShowEmail] = useState(false);

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>O Noi</h3>
                    <p>Noa je automatizirani asistent koji koristi napredne algoritme za prepoznavanje govora i izvršavanje zadataka.</p>
                </div>
                <div className="footer-section">
                    <h3>Brzi Linkovi</h3>
                    <ul className="footer-links">
                        <li><a href="#features">Mogućnosti</a></li>
                        <li><a href="#terms">Pravila Korištenja</a></li>
                        <li><a href="https://sayme.onrender.com">Isprobaj Nou</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Kontakt</h3>
                    <ul className="footer-links">
                        <li>
                            <button 
                                className="email-button"
                                onClick={() => setShowEmail(!showEmail)}
                            >
                                {showEmail ? 'info.sayme@gmail.com' : 'Prikaži Email'}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 SayMe Hrvatska. Sva prava pridržana.</p>
            </div>
        </footer>
    );
}

export default Footer;
