import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/home.css';

const Home = () => {
  return (
    <>
      <nav>
        <h2>Placement Portal</h2>
        <Link to="/home">Logout</Link>
      </nav>

      <nav style={{ background: "#1e293b", padding: "10px" }}>
        <Link to="/company" style={{ margin: "10px", color: "#38bdf8" }}>Company</Link>
        <Link to="/add" style={{ margin: "10px", color: "#38bdf8" }}>Add Student</Link>
        <Link to="/placement" style={{ margin: "10px", color: "#38bdf8" }}>Placement</Link>
      </nav>

      <div className="section">
        <h2>About the Portal</h2>
        <p>
          The Placement Portal is a comprehensive and professional platform designed to streamline 
          campus recruitment. It enables students to access placement records and insights, while providing  
          companies with tools to efficiently manage and review candidate data.
        </p>
      </div>

      <div className="section">
        <h2>Key Features</h2>
        <div className="features">
          <div className="feature-box">
            <h3>View Placement Records</h3>
            <p>Students can check placement stats and filter data year-wise or branch-wise.</p>
          </div>
          <div className="feature-box">
            <h3>Upload Company Data</h3>
            <p>Company users can post job roles, eligibility, and placement stats.</p>
          </div>
          <div className="feature-box">
            <h3>Search & Filter</h3>
            <p>Smart filtering based on packages, companies, and roles.</p>
          </div>
          <div className="feature-box">
            <h3>Secure Access</h3>
            <p>Separate login flows for students and companies for protected data access.</p>
          </div>
        </div>
      </div>
      <div>
    </div>
    </>
  );
};

export default Home;




