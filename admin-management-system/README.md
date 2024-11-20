# Admin Management System

A simple Admin Management System built with Node.js, MySQL, and JWT authentication.

## Features
- Add, update, and delete users.
- Admin-only access control for sensitive operations.
- Secure JWT-based authentication for user management.

## Setup

1. Clone the repository:

2. Install dependencies:

3. Create a `.env` file in the project root and fill in the following:

4. Start the server:

5. Use Postman or cURL to test the following endpoints:
- `POST /api/users`: Add a user
- `GET /api/users`: Get all users
- `PUT /api/users/:id`: Update user details
- `DELETE /api/users/:id`: Delete user
