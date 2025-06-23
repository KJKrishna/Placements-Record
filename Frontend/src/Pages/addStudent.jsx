
import React, { useState } from "react";
import "./CSS/addStudent.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AddStudent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    year: "",
    branch: "",
    roll_no: "",
    company: "",
    salary: "",
    gpa: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/placements", formData);
      alert("Student added successfully");
      navigate("/placement");  // redirect after success
    } catch (error) {
      console.error("Error adding student:", error);
      alert(`Failed: ${error.response?.data?.error || error.message}`);
      // alert("Failed to add student");
    }
  };



  return (
    <div className="add-form-container">
      <form onSubmit={handleSubmit}>
        <h1>Fill the Form</h1>

        <label htmlFor="name">Student Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label htmlFor="year">Year:</label>
        <input type="number" name="year" value={formData.year} onChange={handleChange} required />

        <label htmlFor="branch">Branch:</label>
        <select name="branch" value={formData.branch} onChange={handleChange} required>
          <option value="">--Select--</option>
          <option value="cse">CSE</option>
          <option value="ce">CE</option>
          <option value="IT">IT</option>
          <option value="ece">ECE</option>
        </select>

        <label htmlFor="roll_no">Roll Number:</label>
        <input type="text" name="roll_no" value={formData.roll_no} onChange={handleChange} required />

        <label htmlFor="company">Company:</label>
        <select name="company" value={formData.company} onChange={handleChange} required>
          <option value="">--Select--</option>
          <option value="Google">Google</option>
          <option value="IBM">IBM</option>
          <option value="Samsung">Samsung</option>
          <option value="Microsoft">Microsoft</option>
          <option value="DELL">Dell</option>
          <option value="Infosys">Infosys</option>
          <option value="Accenture">Accenture</option>
          <option value="SumTotal">SumTotal</option>
        </select>

        <label htmlFor="salary">Salary:</label>
        <input type="number" name="salary" value={formData.salary} onChange={handleChange} required />

        <label htmlFor="gpa">GPA:</label>
        <input type="text" name="gpa" value={formData.gpa} onChange={handleChange} required />

        <label htmlFor="age">Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddStudent;

