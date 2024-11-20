const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mysql = require("mysql2");

// Load environment variables
dotenv.config();

const app = express();
app.use(bodyParser.json());

// Database connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Connected to the MySQL database.");
  }
});

// Add a new user
app.post("/users", (req, res) => {
  const { username, email, password, role } = req.body;
  const query = "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)";
  db.query(query, [username, email, password, role || 'user'], (err) => {
    if (err) {
      res.status(500).send("Error adding user.");
    } else {
      res.status(201).send("User added successfully.");
    }
  });
});

// Fetch all users
app.get("/users", (req, res) => {
  const query = "SELECT id, username, email, role, created_at FROM users";
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send("Error fetching users.");
    } else {
      res.json(results);
    }
  });
});

// Edit a user
app.put("/users/:id", (req, res) => {
  const { username, email, role } = req.body;
  const query = "UPDATE users SET username = ?, email = ?, role = ? WHERE id = ?";
  db.query(query, [username, email, role, req.params.id], (err) => {
    if (err) {
      res.status(500).send("Error updating user.");
    } else {
      res.send("User updated successfully.");
    }
  });
});

// Delete a user
app.delete("/users/:id", (req, res) => {
  const query = "DELETE FROM users WHERE id = ?";
  db.query(query, [req.params.id], (err) => {
    if (err) {
      res.status(500).send("Error deleting user.");
    } else {
      res.send("User deleted successfully.");
    }
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
