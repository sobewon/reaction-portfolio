import React from 'react';
import yotsuba from '../assets/yotsuba.jpg'
import cars from '../assets/cars.jpg'

function AboutPage() {
  return (
    <div className="about-page">
      <div className="profile-section">
        <div className="profile-image">
          <img src={yotsuba} alt="Profile" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>about me section text.</p>
        </div>
      </div>
      <div className="wide-image">
        <img src={cars} alt="cars" />
      </div>
      <div className="description-section">
        <h2>Description</h2>
        <p>description text</p>
      </div>
    </div>
  );
};

export default AboutPage;
