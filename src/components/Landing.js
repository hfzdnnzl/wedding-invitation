import React from 'react';
import '../styles/app.css';  // Custom CSS for the landing page

const Landing = () => {
  return (
    <section className="landing" id="landing">
      <div className="container">
        <h1>Hafiz & Partner</h1>
        <p className="welcome-message">We warmly invite you to join us on our special day.</p>
        <p className="event-date">20th October 2024</p>
      </div>
    </section>
  );
};

export default Landing;
