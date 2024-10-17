// BusList.js

import React from 'react';
import './BusList.css';  // Optional: for styling the table

function BusList() {
  // 2. Create mock bus data
  const buses = [
    {
      id: 1,
      busNumber: 'A12',
      route: 'North Route',
      driver: 'John Doe',
      capacity: 50,
      status: 'Active',
    },
    {
      id: 2,
      busNumber: 'B15',
      route: 'East Route',
      driver: 'Jane Smith',
      capacity: 45,
      status: 'Active',
    },
    {
      id: 3,
      busNumber: 'C20',
      route: 'West Route',
      driver: 'Robert Johnson',
      capacity: 40,
      status: 'Inactive',
    },
    // Add more bus data here
  ];

  return (
    <div className='background'>
    <div className="bus-list">
      
      <h1>Bus List</h1>
      
      {/* 3. Render the data in a table */}
      <table>
        <thead>
          <tr>
            <th>Bus Number</th>
            <th>Route</th>
            <th>Driver</th>
            <th>Capacity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {buses.map((bus) => (
            <tr key={bus.id}>
              <td>{bus.busNumber}</td>
              <td>{bus.route}</td>
              <td>{bus.driver}</td>
              <td>{bus.capacity}</td>
              <td>{bus.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default BusList;
