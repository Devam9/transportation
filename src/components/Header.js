import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';


function Header() {
  return (
    <header>
      <nav>
       
        <Link to="/">Home</Link>
        <Link to="/BusList">BusList</Link>
        <Link to="/BusRoute">BusRoute</Link>
        <Link to="/AboutUs">AboutUs</Link>
        <Link to="/Signup">Signup</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
