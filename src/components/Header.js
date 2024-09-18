import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css';

const Header = () => {
  return (
    <header className="bg-light py-5 text-center">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Wedding Invitation</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#details">Details</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#rsvp">RSVP</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="hero-content">
        <h1 className="display-4">Welcome to Our Wedding</h1>
        <p className="lead">Join us for the special day!</p>
      </div>
    </header>
  );
};

export default Header;
