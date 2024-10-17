// Footer.js
import React from 'react';
import './Footer.css';  // You can create a CSS file for styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-title">D & G Transportation</h2>
          <p>
            We are committed to providing safe and reliable school transportation services for students. Our priority is to ensure timely and efficient routes while maintaining safety standards.
          </p>
        </div>
        <div className="footer-section feedback">
          <h2 className="footer-title">Feedback</h2>
          <input type="text"  value="Give some Feedback" required/>
          <button type="submit"> Feedback</button>
        </div>

        

        <div className="footer-section contact">
          <h2 className="footer-title">Contact Us</h2>
          <p><strong>Phone:</strong> 555-555-5555</p>
          <p><strong>Email:</strong> support@dgtransportation.com</p>
          <p><strong>Address:</strong> 123 School St, City, State, Zip Code</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} D & G Transportation | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
