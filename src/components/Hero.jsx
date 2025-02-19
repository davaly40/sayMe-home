import React from 'react';
import { FaMicrophone } from 'react-icons/fa';

function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1>
                    <img 
                        src="/assets/sayMe.png" 
                        alt="SayMe Logo" 
                        style={{ maxWidth: '240px', height: 'auto' }}
                    />
                    <div className="noa-text">NOA</div>
                </h1>
                <p className="hero-subtitle">Budućnost glasovne interakcije</p>
                <div className="hero-features">
                    <span>Automatizacija</span>
                    <span>Prirodni Govor</span>
                    <span>Smart Asistent</span>
                </div>
                <div className="hero-cta">
                    <a href="https://sayme.onrender.com" className="cta-button">
                        <span>Aktiviraj Nou</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
