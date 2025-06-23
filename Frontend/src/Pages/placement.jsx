
import React, { useState, useEffect } from "react";
import "./CSS/placement.css";
import axios from "axios";

const Placement = () => {
  const [list, setList] = useState([]);
  const [isCompany, setIsCompany] = useState(false); // You can change this based on login info later

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
    axios
      .get("http://localhost:3000/api/placements")
      .then((res) => {
        setList(res.data);
        const isStudent = localStorage.getItem("isStudent");
        setIsCompany(isStudent === "false"); // Only companies can add students
      })
      .catch((err) => {
        console.error("Failed to fetch placement data:", err);
      });
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Placements</a>
      </nav>

      <div className="container">
        <h1>Students Placed</h1>
        <section id="container">
          <table className="table table-bordered table-striped table-dark">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>GPA</th>
                <th>Company</th>
                <th>Salary (LPA)</th>
                <th>Year</th>
                {isCompany && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {list.length > 0 ? (
                list.map((x, index) => (
                  <tr key={x.roll_no || index}>
                    <td>{x.roll_no}</td>
                    <td>{x.name}</td>
                    <td>{x.gpa}</td>
                    <td>{x.company}</td>
                    <td>{x.salary}</td>
                    <td>{x.year}</td>
                    {isCompany && (
                      <td>
                        <button onClick={() => handleDelete(x.id)} className="btn btn-danger btn-sm">
                          Delete
                        </button>
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">Loading or No Data Available</td>
                </tr>
              )}
            </tbody>
          </table>
          {isCompany && <a href="/add">Add New Students</a>}
        </section>
      </div>
    </>
  );
};

export default Placement;





