import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CSS/companyPage.css';

const CompanyPage = () => {
  const { name } = useParams();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const isCompany = localStorage.getItem("isStudent") === "false";


  const handleDelete = async (id) => {
  const confirmDelete = window.confirm("Are you sure you want to delete this student?");
  if (!confirmDelete) return;

  try {
    await axios.delete(`http://localhost:3000/api/placements/${id}`);
    alert("Student deleted successfully");
    // Refresh list
    setStudents(students.filter(s => s.id !== id));
  } catch (err) {
    console.error("Delete error:", err);
    alert("Failed to delete student");
  }
};


  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/placements/company/${name}`);
        setStudents(res.data);
      } catch (err) {
        console.error("Error fetching company data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCompanyData();
  }, [name]);


  if (loading) return <p>Loading...</p>;

  return (
    <div className="company-container">
      <h1>Placements at {name}</h1>
      {students.length === 0 ? (
        <p>No students placed in {name} yet.</p>
      ) : (
        <div className="card-list">
          {students.map((s, i) => (
            <div className="student-card" key={i}>
              <div className="card-section">
                <strong>Name:</strong> {s.name}
              </div>
              <div className="card-section">
                <strong>Branch:</strong> {s.branch}
              </div>
              <div className="card-section">
                <strong>Year:</strong> {s.year}
              </div>
              <div className="card-section">
                <strong>Roll No:</strong> {s.roll_no}
              </div>
              <div className="card-section">
                <strong>GPA:</strong> {s.gpa}
              </div>
              <div className="card-section">
                <strong>Salary:</strong> ₹{s.salary} LPA
              </div>
              <span>
                {isCompany && (
                  <button onClick={() => handleDelete(s.id)} className="delete-btn">
                    Delete
                  </button>
                )}
              </span>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CompanyPage;
