# Team Peerverse
# Project Title: **Hackathon Management System**

## Project Description
This project combines a **Leaderboard**, **Progress Tracker**, and an **Admin Management System** into one comprehensive platform. The platform is designed for managing and tracking project-based hackathons, where senior developers assign projects to junior developers. It provides features for performance evaluation, task tracking, and centralized administration.

---

## Features
### 1. **Leaderboard**
- Ranks developers based on their performance in assigned projects.
- Tracks metrics like task completion, timeliness, and code quality.
- Displays real-time updates.

### 2. **Progress Tracker**
- Allows junior developers to update their progress on assigned tasks.
- Provides visibility for senior developers to monitor task status.
- Highlights overdue tasks and milestones.

### 3. **Admin Management System**
- Enables senior developers and administrators to assign tasks.
- Manage user roles (Admin, Senior Developer, Junior Developer).
- Generates performance reports and maintains logs.

---

## Tech Stack

### **Backend**
- **Node.js**: For building the backend server.
- **JavaScript**: Primary language for backend logic.

### **Database**
- **MongoDB**: NoSQL database for storing user profiles, project assignments, and leaderboard data.
- **SQL**: Used in combination with MongoDB for relational data where necessary.

### **Frontend**
- **HTML & CSS**: For the user interface and styling.

### **Environment Variables**
- **.env** file contains sensitive configurations such as database connection strings and API keys.

---

## Installation Guide

### Prerequisites
- Node.js (v14 or later)
- MongoDB and SQL Server
- Git

### Steps
1. **Clone the Repository**  
   ```bash
   git clone https://github.com/your-username/project-name.git
   cd project-name
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Setup Environment Variables**  
   Create a `.env` file in the root directory and add the following:
   ```env
   MONGO_URI=mongodb://localhost:27017/hackathon
   SQL_URI=mysql://user:password@localhost:3306/hackathon
   PORT=3000
   SECRET_KEY=your_secret_key
   ```

4. **Run the Application**  
   ```bash
   npm start
   ```

5. **Access the Application**  
   Open your browser and navigate to:  
   [http://localhost:3000](http://localhost:3000)

---

## File Structure
```
project-name/
├── public/              # Static files (HTML, CSS)
├── src/
│   ├── controllers/     # Business logic
│   ├── models/          # Database schemas
│   ├── routes/          # API endpoints
│   ├── services/        # Helper functions
│   └── app.js           # Main server file
├── .env                 # Environment variables
├── package.json         # Node.js dependencies
└── README.md            # Project documentation
```

---

## Usage

1. **Admins**:
   - Assign projects and roles.
   - Monitor performance through the leaderboard.

2. **Senior Developers**:
   - Evaluate and rate junior developers.
   - Provide feedback.

3. **Junior Developers**:
   - Track task progress.
   - Update task completion status.

---

## Future Enhancements
- Integration of real-time notifications.
- Advanced analytics for performance insights.
- Mobile-responsive design.

---

## Contributing
We welcome contributions! Follow these steps:
1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit changes: `git commit -m "Add feature-name"`.
4. Push to your branch: `git push origin feature-name`.
5. Submit a pull request.

---

## Acknowledgements
- Team members for their collaboration.
- Open-source libraries and tools.

