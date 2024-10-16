import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();
    const Goto = () => {
    navigate('/Login');
    };
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to Our Fitness Center</h1>
        <p>Transform your body, mind, and lifestyle at our state-of-the-art gym.</p>
        <button onClick={Goto}>Join Now</button>
      </section>
      <section className="membership">
        <h2>Membership Plans</h2>
        <div className="plans">
          <div className="plan">
            <h3>Basic Membership</h3>
            <p><strong>Price:</strong> ₹2000/month</p>
            <ul>
              <li>Access to all gym equipment</li>
              <li>Selected group fitness classes</li>
              <li>Locker and shower facilities</li>
              <li>Complimentary fitness assessment</li>
            </ul>
          </div>

          <div className="plan">
            <h3>Premium Membership</h3>
            <p><strong>Price:</strong> ₹5000/month</p>
            <ul>
              <li>Unlimited fitness classes</li>
              <li>Personalized training programs</li>
              <li>Spa, sauna, and pool access</li>
              <li>Monthly trainer check-ins</li>
            </ul>
          </div>

          <div className="plan">
            <h3>Annual Membership</h3>
            <p><strong>Price:</strong> ₹20000/year</p>
            <ul>
              <li>All Premium Membership perks</li>
              <li>One month free for upfront payment</li>
              <li>Priority class bookings</li>
              <li>Exclusive discounts on merchandise</li>
            </ul>
          </div>
        </div>
      </section>

     
      <section className="facilities">
        <h2>Our Facilities</h2>
        <div className="facility-list">
          <div className="facility">
            <h3>Cardio Zone</h3>
            <p>Equipped with the latest treadmills, ellipticals, and bikes to keep your heart pumping.</p>
          </div>
          <div className="facility">
            <h3>Weight Training Area</h3>
            <p>Our strength zone features a wide range of free weights and resistance machines.</p>
          </div>
          <div className="facility">
            <h3>Battel Tactic</h3>
            <p>Battel tactic improves your close combact quick thinking in our Battel situations.</p>
          </div>
          <div className="facility">
            <h3>Spa & Sauna</h3>
            <p>Unwind and rejuvenate after your workout with our luxurious spa and sauna facilities.</p>
          </div>
        </div>
      </section>


      <section className="testimonials">
        <h2>What Our Members Say</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <p>"The gym has completely transformed my life! The trainers are amazing and so supportive."</p>
            <h4>- Monkey D Luffy</h4>
          </div>

          <div className="testimonial">
            <p>"I love the variety of classes offered. There's always something new to try!"</p>
            <h4>- Kira</h4>
          </div>

          <div className="testimonial">
            <p>"The facilities are top-notch, and the community is welcoming. Highly recommend!"</p>
            <h4>- Naruto</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
