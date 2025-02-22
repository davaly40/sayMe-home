import React, { useEffect } from 'react';

const AIFeatures = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.feature-card');
    let observer;

    if ('IntersectionObserver' in window && window.innerWidth <= 768) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('card-animate');
          }
        });
      }, { threshold: 0.2 });

      cards.forEach(card => observer.observe(card));
    }

    return () => observer?.disconnect();
  }, []);

  return (
    <section className="ai-features-section">
      <div className="section-content">
        <h2 className="section-title">Mogućnosti NOA Asistenta</h2>
        <div className="ai-features-grid">
          <div className="feature-card">
            <div className="feature-icon">🗣️</div>
            <h3>Hrvatski Jezik</h3>
            <p>Prirodna komunikacija na hrvatskom jeziku s naprednim razumijevanjem konteksta</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Precizni Odgovori</h3>
            <p>Brzi i točni odgovori na vaše upite uz pomoć umjetne inteligencije</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Kontinuirani Dijalog</h3>
            <p>Pamti kontekst razgovora za prirodniju interakciju</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeatures;
