const express = require('express');
const cors = require('cors');
// const sequelize = require('./models');
const User = require('./models/usermodel');
const Student = require('./models/placementlist');
const sequelize = require('./models/sequelize'); 
const bcrypt = require('bcrypt');



const app = express();
app.use(cors({
  origin: 'http://localhost:5173' // Or your Vite frontend port
}));
app.use(express.json());

// Routes for placement data
app.get('/api/placements', async (req, res) => {
  try {
    const list = await Student.findAll();
    res.json(list);
  } catch {
    res.status(500).json({ error: 'Failed to fetch placements' });
  }
});

app.get('/api/placements/year/:year', async (req, res) => {
  try {
    const list = await Student.findAll({ where: { year: parseInt(req.params.year) } });
    res.json(list);
  } catch {
    res.status(500).json({ error: 'Failed to fetch year-wise placements' });
  }
});

app.get('/api/placements/company/:company', async (req, res) => {
  try {
    const list = await Student.findAll({ where: { company: req.params.company } });
    res.json(list);
  } catch {
    res.status(500).json({ error: 'Failed to fetch company-wise placements' });
  }
});

app.post('/api/placements', async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch {
    res.status(500).json({ error: 'Failed to add student' });
  }
});

// Signup

app.post('/api/signup', async (req, res) => {
  const { username, password, isStudent } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ where: { name: username } });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);


    const user = await User.create({
      name: username,
      password: hashedPassword,
      isStudent: true
    });

    res.status(201).json({ success: true, message: 'User created' });
  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({ success: false, message: 'Signup failed' });
  }
});





// Login
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { name: username } });

    if (!user) {
      return res.status(401).json({ success: false, error: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      res.json({ success: true, isStudent: user.isStudent });
    } else {
      res.status(401).json({ success: false, error: 'Invalid password' });
    }
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ success: false, error: 'Login error' });
  }
});


// Delete student by ID
app.delete('/api/placements/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Student.destroy({ where: { id } });

    if (deleted) {
      res.json({ success: true, message: "Student deleted successfully" });
    } else {
      res.status(404).json({ success: false, message: "Student not found" });
    }
  } catch (err) {
    console.error("Delete Error:", err);
    res.status(500).json({ success: false, message: "Error deleting student" });
  }
});






// Start server
sequelize.sync().then(() => {
  app.listen(3000, () => console.log('🚀 Server running on http://localhost:3000'));
});
