import React from 'react';
import '../styles/app.css';

const EventInfo = () => {
  return (
    <section className="event-info" id="event-info">
      <div className="container">
        <h2>Event Information</h2>
        <div className="event-details">
          <p>Date: 20th October 2024</p>
          <p>Venue: XYZ Hall, Kuala Lumpur</p>
          <p>Time: 10:00 AM - 4:00 PM</p>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;
