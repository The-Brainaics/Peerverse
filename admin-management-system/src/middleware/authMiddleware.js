const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Authenticate user via JWT
exports.authenticate = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) {
    return res.status(403).json({ error: "No token provided." });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Failed to authenticate token." });
    }

    req.userId = decoded.id;
    req.userRole = decoded.role; // Pass role to request for RBAC

    next();
  });
};

// Role-based access control (only admins can manage users)
exports.isAdmin = (req, res, next) => {
  if (req.userRole !== "admin") {
    return res.status(403).json({ error: "Access denied." });
  }
  next();
};
