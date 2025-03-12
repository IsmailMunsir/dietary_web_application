import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Dietary Log</h1>
          <p>Track your meals, set goals, and achieve your dietary objectives.</p>
          <button className="btn">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Meal Tracking</h3>
            <p>Easily log your meals and track your daily intake.</p>
          </div>
          <div className="feature">
            <h3>Goal Setting</h3>
            <p>Set and achieve your dietary goals with personalized plans.</p>
          </div>
          <div className="feature">
            <h3>Progress Reports</h3>
            <p>Get detailed reports on your progress and insights.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <p>"Dietary Log has transformed the way I manage my diet. Highly recommended!"</p>
            <p>- Jane Doe</p>
          </div>
          <div className="testimonial">
            <p>"The goal-setting feature is fantastic. It keeps me motivated!"</p>
            <p>- John Smith</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;