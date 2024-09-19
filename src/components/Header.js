import React from 'react';
import '../styles/Header.css';  // Link to your custom CSS if required
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="header">
      <div className="overlay"></div>
      <div className="container">
        <h2 className="subtitle">Jemputan Majlis Perkahwinan</h2>
        <h1 className="title">Hafiz & Atiqah</h1>
        <h2 className='date'>Sabtu, 17 Mei 2025</h2>

        <a className="btn-calendar" target="_blank" 
        rel="noopener noreferrer" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=M3RuZjd0cGwzMnNzNDFzbzdkcnBpazJxM28gaGFmaXp1ZGRpbi5uYXpsZWVAbQ&amp;tmsrc=hafizuddin.nazlee%40gmail.com">
          <FontAwesomeIcon icon={faCalendarCheck} style={{ marginRight: '8px' }} />Save The Date
        </a>

        <div class="field">
          <div class="mouse"></div>
        </div>
        <p className='date'>Scroll Down</p>
      </div>
    </header>
  );
};

export default Header;
