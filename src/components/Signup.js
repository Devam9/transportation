
import React, { useState } from 'react';


const RegisterStudent = () => {
  const [student, setStudent] = useState({ name: '', class: '', route: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Student ${student.name} registered for route ${student.route}`);
    
    
  };

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className='background'>
        <center>
      <h2>Register Student for Bus Transportation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label><br/>
          <input type="text" name="name" value={student.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={student.email} onChange={handleChange} required/>
        </div>
        <div>
          <label>Class: </label><br/>
          <input style={{ color: 'black'}} type="text" name="class" value={student.class} onChange={handleChange} required />
        </div>
        <div>
          <label>Bus Route: </label><br/>
          <select name="route" value={student.route} onChange={handleChange} required>
            <option value="">Select Route</option>
            <option value="Palsana To Sachin">Palsana To katargam</option>
            <option value="Palsana To Dindoli">Palsana To Dindoli</option>
            <option value="Palsana To hirabag">Palsana To hirabag</option>
            <option value="Palsana To kapodra">Palsana To kapodra</option>
            <option value="Palsana To navjivan">Palsana To navjivan</option>
            <option value="Palsana To jakatnaka">Palsana To jakatnaka</option>
            <option value="Palsana To parvatpatiya">Palsana To parvatpatiya</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
      </center>
      </div>
    </div>
  );
};

export default RegisterStudent;
