import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <img src="/assets/sayMe.png" alt="" className="hero-image" />
        <h1>
          <span className="noa-text">NOA</span>
          <span className="noa-ai-text">AI</span>
        </h1>
        <p className="hero-subtitle">
          Upoznajte budućnost komunikacije
        </p>
        <div className="hero-cta">
          <a href="https://saymeai.onrender.com" className="cta-button primary">
            <span>Isprobaj NOA AI</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
