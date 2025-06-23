
import React, { useState } from 'react';
import './CSS/signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const dataToSend = {
        ...formData,
        isStudent:true
      };

      const res = await axios.post("http://localhost:3000/api/signup", dataToSend);

      if (res.data.success) {
        alert("Signup successful");
        navigate("/home");
      } else {
        alert(res.data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong during signup");
    }
  };
  

  return (
    <div className="loginbox">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/75/IIIT-BH_Official_Logo.png"
        alt="Avatar"
        className="avataar"
      />
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <p>Username</p>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        
        <p>Password</p>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        
        
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
};

export default Signup;





