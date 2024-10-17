import React from 'react';
import './Busroutes.css';

const BusRoutes = () => {
  const busRoutes = [
    { routeNo: 1, start: 'katargam', end: 'School', stops: ['katargam', 'hirabag', 'kapodra','navjivan','palsana'] },
    { routeNo: 2, start: 'Jakatnaka', end: 'School', stops: ['jakatnaka', 'parvatpatiya', 'dindoli','palsana'] },
  ];

  
    return (
      <div className="bus-routes-container">
        <h2>Bus Routes</h2>
        <div className="bus-routes-list">
          {busRoutes.map((route) => (
            <div key={route.id} className="route-card">
              <h3>{route.routeName}</h3>
              <p><strong>Stops:</strong> {route.stops.join(", ")}</p>
              <p><strong>Departure Time:</strong> {route.time}</p>
            </div>
          ))}
        </div>
      </div>
    );
};

export default BusRoutes;
