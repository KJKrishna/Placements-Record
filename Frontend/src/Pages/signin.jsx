
import React, { useState } from 'react';
import './CSS/signin.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const [formData, setFormData] = useState({ username: '', password: '' ,userType: 'student'});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/api/login", {
        username: formData.username,
        password: formData.password
      });
      if (res.data.success) {
        const expectedIsStudent = formData.userType === 'student';
        if (res.data.isStudent !== expectedIsStudent) {
          alert("Invalid login type selected. Please choose the correct login type.");
          return;
        }
        
        // Store user type in localStorage
        localStorage.setItem("isStudent", res.data.isStudent);  // true/false
        alert("Login successful as " + (res.data.isStudent ? "Student" : "Company"));
        navigate("/home");

      }
      else {
        alert(res.data.error || "Login failed");

      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong during login");
    }
  };

  return (
    <div className="loginbox">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <p>Username</p>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        <p>Password</p>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        <p>Login as</p>
        <select name="userType" value={formData.userType} onChange={handleChange}>
          <option value="student">Student</option>
          <option value="company">Company</option>
        </select>
        <input type="submit" value="Login" />
        <a href="#">Forgot Password?</a>
        <a href="/signup">Sign Up</a>
      </form>
    </div>
  );
};

export default Signin;

