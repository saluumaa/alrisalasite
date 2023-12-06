import React from 'react';
import './About.css';
import about_image from '../Assets/about_image.PNG';

const About = () => (
  <div className="about-container">
    <div className="about-content-main">
      <div className="about-image">
        <img src={about_image} alt="about" />
      </div>
      <div className="about-text">
        <h1 className="about-title">About Us</h1>
        <p>
          Al-Risala Organization is a non-profit organization that focuses on education and social activities.
          it was established in 2017 and has been active in various fields such as education, social, and religion.
          and it has been active in various fields such as education, social, and religion.
        </p>
      </div>
    </div>
    <div className="about-content-container">
      <div className="about-content">
        <h2>Our Vision</h2>
        <hr />
        <h3>
          Al-Risala Organization is a non-profit organization that focuses on education and social activities.
          it was established in 2017 and has been active in various fields such as education, social, and religion.
        </h3>

      </div>

      <div className="about-content">
        <h2>Our Mission</h2>
        <hr />
        <h3>
          Al-Risala Organization is a non-profit organization that focuses on education and social activities.
          it was established in 2017 and has been active in various fields such as education, social, and religion.
        </h3>
      </div>

      <div className="about-content">
        <h2>Our Values</h2>
        <hr />
        <h3>
          Al-Risala Organization is a non-profit organization that focuses on education and social activities.
          it was established in 2017 and has been active in various fields such as education, social, and religion.
        </h3>
      </div>

      <div className="about-content">
        <h2>Our Goals</h2>
        <hr />
        <h3>
          Al-Risala Organization is a non-profit organization that focuses on education and social activities.
          it was established in 2017 and has been active in various fields such as education, social, and religion.
        </h3>
      </div>

      <div className="about-content">
        <h2>Our Objectives</h2>
        <hr />
        <h3>
          Al-Risala Organization is a non-profit organization that focuses on education and social activities.
          it was established in 2017 and has been active in various fields such as education, social, and religion.
        </h3>
      </div>
    </div>
  </div>
);

export default About;
