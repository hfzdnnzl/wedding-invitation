import React from 'react';
import '../styles/Header.css';  // Link to your custom CSS if required

const Header = () => {
  return (
    <header className="header">
      <div className="overlay"></div>
      <div className="container">
        <h1 className="title">Wedding Invitation</h1>
        <p className="subtitle">Join us for a special celebration</p>
      </div>
    </header>
  );
};

export default Header;
