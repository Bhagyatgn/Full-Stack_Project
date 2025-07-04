import React from 'react';
import './Home.css';
import heroImage from '../assets/photo.avif'; // adjust path as needed

function Home() {
  return (
    <div className="home-hero">
      <div className="home-content">
        <h1 className="home-title">
          Welcome to the Learning Management System
        </h1>
        <p className="home-desc">
          Unlock your potential with our interactive courses, expert instructors, and a vibrant learning community.
        </p>
        <div className="home-actions">
          <a href="/login" className="btn primary">Login</a>
          <a href="/register" className="btn secondary">Register</a>
        </div>
      </div>
      <div className="home-image">
        <img src={heroImage} alt="Learning Illustration" />
      </div>
    </div>
  );
}

export default Home;