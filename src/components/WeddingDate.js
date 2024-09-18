import React, { useState, useEffect } from 'react';
import '../styles/WeddingDate.css';

const WeddingDate = () => {
  const weddingDate = new Date('2025-05-17T00:00:00'); // Set the wedding date
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeRemaining = weddingDate - now;

      if (timeRemaining <= 0) {
        clearInterval(interval);
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [weddingDate]);

  const formattedDate = `${String(weddingDate.getDate()).padStart(2, '0')}/${String(weddingDate.getMonth() + 1).padStart(2, '0')}/${weddingDate.getFullYear()}`;

  return (
    <section className="wedding-date">
      <div className="container">
        <h2>Tarikh Persandingan</h2>
        <h3>{formattedDate}</h3>
        <div className="countdown">
          <div className="countdown-item">
            <span>{countdown.days}</span> Hari
          </div>
          <div className="countdown-item">
            <span>{countdown.hours}</span> Jam
          </div>
          <div className="countdown-item">
            <span>{countdown.minutes}</span> Minit
          </div>
          <div className="countdown-item">
            <span>{countdown.seconds}</span> Saat
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDate;
