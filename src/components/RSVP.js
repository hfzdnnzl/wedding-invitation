import React, { useState } from 'react';
import '../styles/app.css';

const RSVP = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the logic to handle form submission, e.g., sending it to a server
    console.log({ name, email, response });
  };

  return (
    <section className="rsvp" id="rsvp">
      <div className="container">
        <h2>RSVP</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Your Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
          <input 
            type="email" 
            placeholder="Your Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <select value={response} onChange={(e) => setResponse(e.target.value)} required>
            <option value="" disabled>Select your response</option>
            <option value="attending">Attending</option>
            <option value="not-attending">Not Attending</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default RSVP;
