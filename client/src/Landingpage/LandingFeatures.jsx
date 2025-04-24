import React from "react";

const Features = () => {
  return (
    <section className="features">
      <h2>Key Features</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Task Management</h3>
          <p>Effortlessly create, organize, and track your tasks.</p>
        </div>
        <div className="feature-card">
          <h3>Reminders</h3>
          <p>Never miss a deadline with our smart reminder system.</p>
        </div>
        <div className="feature-card">
          <h3>Categories</h3>
          <p>Organize tasks into custom categories for better productivity.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;