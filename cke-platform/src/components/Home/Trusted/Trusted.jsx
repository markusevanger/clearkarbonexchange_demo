import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat, faGlobe } from '@fortawesome/free-solid-svg-icons';
import './Trusted.css';

const HomeStatisticSection = () => (
  <div className="offers-wrapper">
    <aside className="trusted-by">
      <h3>Trusted By</h3>
      <div className="logos">
        <img src="/assets/Innovasjon-Norge-negative.png" alt="Innovasjon Norge" />
        <img src="/assets/oslomet.png" alt="OsloMet" />
        <img src="/assets/asini.png" alt="Acini Capital" />
      </div>
    </aside>
    <section className="offers-section">
      <h2>We also offer:</h2>
      <div className="offer-cards">
        <div className="offer-card">
          <div className="other-offers-content">
            <FontAwesomeIcon icon={faGlobe} className='card-icon'/>
            <p>A platform to trade surplus credits with other companies</p>
          </div>
        </div>
        <div className="offer-card">
          <div className="other-offers-content">
          <FontAwesomeIcon icon={faRepeat} className='card-icon' />
          <p>A subscription model for private consumers</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default HomeStatisticSection;
