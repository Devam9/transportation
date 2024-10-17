

// src/Signup.js (React Component)
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    classStandard: '',
    password: '',
    confirmPassword: '',
    busRoute: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/signup', formData);
      setSuccess(res.data.message);
      setError('');
    } catch (err) {
      setError(err.response.data.message || 'Server error');
    }
  };

  return (
    <div className="Signup-container">
      <h2>Signup for School Transportation</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Class/Standard</label>
          <input
            type="text"
            name="classStandard"
            value={formData.classStandard}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Bus Route</label>
          <select
            name="busRoute"
            value={formData.busRoute}
            onChange={handleChange}
            required
          >
            <option value="Palsana To Sachin">Palsana To katargam</option>
            <option value="Palsana To Dindoli">Palsana To Dindoli</option>
            <option value="Palsana To hirabag">Palsana To hirabag</option>
            <option value="Palsana To kapodra">Palsana To kapodra</option>
            <option value="Palsana To navjivan">Palsana To navjivan</option>
            <option value="Palsana To jakatnaka">Palsana To jakatnaka</option>
            <option value="Palsana To parvatpatiya">Palsana To parvatpatiya</option>
          </select>
        </div>

        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
