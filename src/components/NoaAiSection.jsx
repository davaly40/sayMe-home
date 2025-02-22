import React from 'react';

const NoaAiSection = () => {
  return (
    <section className="noa-ai-section">
      <div className="section-content">
        <h2 className="section-title accent-title">Mogućnosti NOA AI</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm1 16h-2v-6h2v6zm0-8h-2V7h2v2z"/>
              </svg>
            </div>
            <h3>Precizna Komunikacija</h3>
            <p>Razumije hrvatski jezik i kontekst vaših upita</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 15c1.66 0 3-1.34 3-3 0-1.31-.84-2.42-2-2.83V4.09c2.75.45 5 2.93 5 5.91 0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.98 2.25-5.46 5-5.91v5.08c-1.16.41-2 1.52-2 2.83 0 1.66 1.34 3 3 3zm0-13c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
            </div>
            <h3>Glasovno Upravljanje</h3>
            <p>Prirodna interakcija glasovnim naredbama</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 16H4c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1z"/>
              </svg>
            </div>
            <h3>AI Tehnologija</h3>
            <p>Napredni algoritmi za pametnu asistenciju</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoaAiSection;
