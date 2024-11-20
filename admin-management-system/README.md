# Admin Management System

A simple Admin Management System built using Node.js and MySQL.

## Features
- Add new users
- Edit user details
- Delete users
- Fetch all users

## Setup

1. Clone the repository:
git clone https://github.com/your-username/admin-management-system.git

markdown
Copy code

2. Install dependencies:
npm install

markdown
Copy code

3. Create a `.env` file in the project root and fill in the following:
PORT=3000 DB_HOST=your-database-host DB_USER=your-database-username DB_PASSWORD=your-database-password DB_NAME=your-database-name

markdown
Copy code

4. Start the server:
npm start

sql
Copy code

5. Use Postman or cURL to test the following endpoints:
- Add a user: `POST /users`
- Get all users: `GET /users`
- Update a user: `PUT /users/:id`
- Delete a user: `DELETE /users/:id`
