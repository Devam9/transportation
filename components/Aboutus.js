import React from 'react';
import './AboutUs.css';
import ganesh from './Nikam-Ganesh.png'
import dev from './devdhar.png'
import shiva from './shiva.png'

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="about-section">
        <h1>About Our School Bus Transportation Service</h1>
        <p>
          Our transportation service has been serving the community for over 10 years,
          ensuring the safety and punctuality of students on their way to and from school.
          We take pride in offering reliable and comfortable buses equipped with the latest safety measures.
        </p>
      </section>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to provide safe, reliable, and eco-friendly transportation for students.
          We believe in the importance of timeliness and safety while promoting sustainable practices.
        </p>
      </section>

      <section className="values-section">
        <h2>Our Core Values</h2>
        <ul>
          <li><strong>Safety:</strong> Ensuring the wellbeing of every student.</li>
          <li><strong>Reliability:</strong> Timely service that students and parents can depend on.</li>
          <li><strong>Sustainability:</strong> We strive to reduce our carbon footprint by using eco-friendly vehicles.</li>
          <li><strong>Community:</strong> Serving and supporting our local communities.</li>
        </ul>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={dev} alt="DevDhar Gire" className="team-photo"/>
            <h3>DevDhar Gire</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src={ganesh} alt="Nikam Ganesh" className="team-photo"/>
            <h3>Nikam Ganesh</h3>
            <p>Operations Manager</p>
          </div>
          <div className="team-member">
            <img src={shiva} alt="Shiva Badmosh" className="team-photo"/>
            <h3>Shiva Badmosh</h3>
            <p>Lead Driver</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
