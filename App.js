import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import BusRoutes from './components/BusRoutes';
import Signup from './components/Signup';
import Login from './components/Login';
import BusList from './components/BusList';
import Feedback from './components/Feedback';
import AboutUs from './components/Aboutus';
import Footer from './components/Footer';
import './App1.css';

const App = () => {
  return (
    <Router>
      <Header/>
      <div className="app-container">
        {/* Left Sidebar Navigation */}
       
       {/* Main Content Area */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/BusRoutes" element={<BusRoutes />} />
            <Route path="/BusList" element={<BusList />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/buses" element={<BusList />} />
            <Route path="/Feedback" element={<Feedback />} />
           
            <Route path="/AboutUs" element={<AboutUs/>}/>
          </Routes>
        </div>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
