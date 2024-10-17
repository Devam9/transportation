import React, { useState } from 'react';
import './App2.css'

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
   
  };

  return (
    <div className="feedback-page">
        <div className='background'>
            
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input  type="text" id="name" name="name" value={feedback.name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input  type="email" id="email"  name="email" value={feedback.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="message">Feedback:</label>
          <textarea id="message" name="message" value={feedback.message} onChange={handleChange} required />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
      </div>
    </div>
  );
};

export default Feedback;
