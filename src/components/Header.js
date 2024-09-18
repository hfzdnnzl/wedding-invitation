import React from 'react';
import '../styles/app.css';  // Link to your custom CSS if required

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <h1>Wedding Invitation</h1>
        <ul className="nav-links">
          <li><a href="#event-info">Event Info</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#rsvp">RSVP</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
