
import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './Pages/home.jsx';
import Signup from './Pages/signup.jsx';
import Signin from './Pages/signin.jsx';
import Company from './Pages/selectCompany.jsx';
import AddStudent from './Pages/addStudent.jsx';
import CompanyPage from './Pages/companyPage.jsx';
import Placement from './Pages/placement.jsx';

//  Protect routes based on login status
const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isStudent") !== null;
  return isLoggedIn ? children : <Navigate to="/" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        {/* Protected Routes */}
        <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/company" element={<PrivateRoute><Company /></PrivateRoute>} />
        <Route path="/company/:name" element={<PrivateRoute><CompanyPage /></PrivateRoute>} />
        <Route path="/add" element={<PrivateRoute><AddStudent /></PrivateRoute>} />
        <Route path="/placement" element={<PrivateRoute><Placement /></PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
