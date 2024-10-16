import React from 'react';

const BusRoutes = () => {
  const busRoutes = [
    { routeNo: 1, start: 'katargam', end: 'School', stops: ['katargam', 'hirabag', 'kapodra','navjivan','palsana'] },
    { routeNo: 2, start: 'Jakatnaka', end: 'School', stops: ['jakatnaka', 'parvatpatiya', 'dindoli','palsana'] },
  ];

  return (
    <div>
      <center>
     
      <div className='background'>
      <div className='container1'>
      <h2>Bus Routes</h2>
      <ul>
        {busRoutes.map((route) => (
          <li key={route.routeNo}>
            Route {route.routeNo}: {route.start} - {route.end}
            <ul>
              {route.stops.map((stop, index) => (
                <li key={index}>{stop}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      </div>
      </div>
    </center>

    </div>
  );
};

export default BusRoutes;
