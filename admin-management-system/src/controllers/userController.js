const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

// User management routes
router.post("/", userController.addUser);   // Add a user
router.get("/", userController.getAllUsers); // Get all users
router.put("/:id", userController.updateUser); // Update user details
router.delete("/:id", userController.deleteUser); // Delete user

module.exports = router;
