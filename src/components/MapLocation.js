import React from 'react';
import '../styles/MapLocation.css';

const MapLocation = () => {

  return (
    <section className="map-location">
      <div className="container">
        <h2>Lokasi Majlis</h2>
        <p>Awangan Palace, Kuantan</p>
        
        <div className="iframe-container">
          <iframe
            title="Wedding Venue"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.073610171912!2d103.2495307!3d3.7941381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31c8b7e77e0e0dd9%3A0xc214967fc36fabf!2sAwangan%20Palace!5e0!3m2!1sen!2ssg!4v1726649859972!5m2!1sen!2ssg"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default MapLocation;
