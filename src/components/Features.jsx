import React, { useState } from 'react';
import { 
    FaMapMarkerAlt, FaMusic, FaCloud, FaCalendar, 
    FaSearch, FaHome, FaRobot, FaMicrophone
} from 'react-icons/fa';

function Features() {
    const [activeCard, setActiveCard] = useState(null);

    const capabilities = [
        {
            icon: <FaMapMarkerAlt />,
            title: "Navigacija",
            description: "Pronađite najbliži bankomat, kafić ili put do kuće uz pomoć Google Maps integracije"
        },
        {
            icon: <FaMusic />,
            title: "Glazba i Zabava",
            description: "Reprodukcija glazbe na Spotify i YouTube platformama glasovnim naredbama"
        },
        {
            icon: <FaCloud />,
            title: "Vremenska Prognoza",
            description: "Trenutna vremenska prognoza i prognoze za nadolazeće dane"
        },
        {
            icon: <FaCalendar />,
            title: "Kalendar i Vrijeme",
            description: "Informacije o datumu, danu u tjednu i vremenu"
        },
        {
            icon: <FaSearch />,
            title: "Pretraživanje",
            description: "Pronađite odgovore na pitanja pretragom interneta"
        },
        {
            icon: <FaHome />,
            title: "Web Navigacija",
            description: "Otvaranje omiljenih web stranica glasovnim naredbama"
        }
    ];

    return (
        <>
            <section className="features" id="features">
                <h2 className="section-title">
                    <FaMicrophone className="title-icon" />
                    <span>Mogućnosti Noa Asistenta</span>
                </h2>
                <div className="capability-grid">
                    {capabilities.map((cap, index) => (
                        <div 
                            key={index} 
                            className={`capability-card ${activeCard === index ? 'active' : ''}`}
                            onMouseEnter={() => setActiveCard(index)}
                            onMouseLeave={() => setActiveCard(null)}
                        >
                            <div className="feature-icon" data-depth="0.2">
                                {cap.icon}
                            </div>
                            <h3>{cap.title}</h3>
                            <p>{cap.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="info-section">
                <h2 className="section-title">
                    <FaRobot />
                    <span>Kako Noa Radi</span>
                </h2>
                <div className="info-grid">
                    <div className="info-card">
                        <h3>Prepoznavanje Glasa</h3>
                        <p>Napredni algoritmi pretvaraju vaš glas u tekst s visokom preciznošću i razumijevanjem konteksta.</p>
                        <div className="info-stats">98% preciznost</div>
                    </div>
                    <div className="info-card">
                        <h3>Obrada Naredbi</h3>
                        <p>Automatizirani sustav analizira vaše naredbe i izvršava odgovarajuće akcije u stvarnom vremenu.</p>
                        <div className="info-stats">Odaziv ispod 1s</div>
                    </div>
                    <div className="info-card">
                        <h3>Integracija Sustava</h3>
                        <p>Besprijekorno povezivanje s Google Maps, YouTube, Spotify i drugim servisima.</p>
                        <div className="info-stats">10+ integracija</div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Features;
