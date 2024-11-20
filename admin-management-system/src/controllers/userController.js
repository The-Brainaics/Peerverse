const mysql = require("mysql2");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Add a new user
exports.addUser = (req, res) => {
  const { username, email, password, role } = req.body;
  const query = "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)";
  db.query(query, [username, email, password, role || "user"], (err) => {
    if (err) {
      res.status(500).json({ error: "Error adding user." });
    } else {
      res.status(201).json({ message: "User added successfully." });
    }
  });
};

// Get all users
exports.getAllUsers = (req, res) => {
  const query = "SELECT id, username, email, role FROM users";
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: "Error fetching users." });
    } else {
      res.json(results);
    }
  });
};

// Update user details
exports.updateUser = (req, res) => {
  const { username, email, role } = req.body;
  const query = "UPDATE users SET username = ?, email = ?, role = ? WHERE id = ?";
  db.query(query, [username, email, role, req.params.id], (err) => {
    if (err) {
      res.status(500).json({ error: "Error updating user." });
    } else {
      res.json({ message: "User updated successfully." });
    }
  });
};

// Delete a user
exports.deleteUser = (req, res) => {
  const query = "DELETE FROM users WHERE id = ?";
  db.query(query, [req.params.id], (err) => {
    if (err) {
      res.status(500).json({ error: "Error deleting user." });
    } else {
      res.json({ message: "User deleted successfully." });
    }
  });
};
