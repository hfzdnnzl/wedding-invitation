import React from 'react';
import '../styles/Header.css';  // Link to your custom CSS if required

const Header = () => {
  return (
    <header className="header">
      <div className="overlay"></div>
      <div className="container">
        <h1 className="title">Hafiz & Atiqah</h1>
        <h3 className="subtitle">Walimatul Urus</h3>
      </div>
    </header>
  );
};

export default Header;
