import React from 'react';
import '../styles/MapLocation.css';

const MapLocation = () => {
  // Link to Google Maps for the venue location
  const googleMapsLink = "https://www.google.com/maps/place/Your+Venue+Name/@-37.8162799,144.9537353,15z"; // Replace with your venue's link

  return (
    <section className="map-location">
      <div className="container">
        <h2>Wedding Location</h2>
        <p>Join us at our beautiful venue:</p>
        
        {/* Button to redirect to Google Maps */}
        <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
          <button className="btn-maps">Open in Google Maps</button>
        </a>
        
        <iframe
          title="Wedding Venue"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.0735855248945!2d103.24695577401693!3d3.794143448851303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31c8b7e77e0e0dd9%3A0xc214967fc36fabf!2sAwangan%20Palace!5e0!3m2!1sen!2smy!4v1726647269738!5m2!1sen!2smy"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>

      </div>
    </section>
  );
};

export default MapLocation;
