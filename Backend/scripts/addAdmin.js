const bcrypt = require('bcrypt');
const User = require('../models/usermodel'); // Adjust path if needed
const sequelize = require('../models/sequelize'); // Ensure DB connection

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected...');

    const hashedPassword = await bcrypt.hash("AdminPlacements@1234", 10); // Your company password

    const existing = await User.findOne({ where: { name: "company1" } });
    if (existing) {
      console.log("User already exists.");
      return;
    }

    const user = await User.create({
      name: "Administartor",         // Set company username
      password: hashedPassword, // Encrypted password
      isStudent: false          // Mark as company account
    });

    console.log("Company user created:", user.name);
  } catch (err) {
    console.error("Error creating company user:", err);
  } finally {
    await sequelize.close();
  }
})();
