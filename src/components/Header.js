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
        rel="noopener noreferrer" href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Majlis%20Perkahwinan%20Hafiz%20%26%20Atiqah&details=Majlis%20Perkahwinan%20Hafiz%20%26%20Atiqah%20%7C%2017%20MEI%202025%20%7C%20Awangan%20Palace,%20Kuantan%20%7C%2011.00PM%20-%204.00PM%20&dates=20250517T110000/20250517T160000&location=Awangan%20Palace,%20Lot%2029003%20KUANTAN%20BYPASS%20BUKIT%20RANGIN,%20Kampung%20Permatang%20Badak,%2025150%20Kuantan,%20Pahang,%20Malaysia">
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
