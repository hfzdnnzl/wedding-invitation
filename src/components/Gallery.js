import React from 'react';
import '../styles/app.css';

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <h2>Our Journey</h2>
        <div className="gallery-grid">
          <img src="path/to/image1.jpg" alt="Gallery Image 1" />
          <img src="path/to/image2.jpg" alt="Gallery Image 2" />
          <img src="path/to/image3.jpg" alt="Gallery Image 3" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
