**Dynamic Leaderboard System**

This project, developed by [Sarthak]([url](https://github.com/SarthakKacholiya)) as part of a hackathon, is a fully functional Leaderboard System designed to rank developers based on performance metrics, peer reviews, and alumni/admin feedback. The system fosters healthy competition by showcasing top performers and updates rankings dynamically in real time using MongoDB as the database backend.

**Features:-**
1. Real-Time Leaderboard Updates: The leaderboard automatically updates rankings whenever new data is added or modified.
2. Dynamic Feedback Integration: Alumni and admin reviews directly influence the ranking system.
3. Clean, Interactive UI: A responsive and visually appealing interface for viewing rankings and feedback.
Scalable Backend: Designed with Node.js and MongoDB for a seamless and scalable backend.
Customization Options: Flexible architecture to add new performance metrics or expand features.

**Tech Stack:-**
| **Category**       | **Technology**         |
|---------------------|-------------------------|
| **Frontend**        | HTML, CSS, JavaScript  |
| **Backend**         | Node.js, Express.js    |
| **Database**        | MongoDB                |
| **Styling**         | Custom CSS             |
| **Version Control** | Git, GitHub            |
| **Hosting (Future)**| Heroku, Vercel         |

**Getting Started:-**
Follow these steps to set up the project locally:

**1. Clone the Repository**
git clone https://github.com/sarthak/leaderboard-system.git
cd leaderboard-system

**2. Install Dependencies**
Ensure Node.js and npm are installed on your machine. Then run:
npm install

**3. Set Up MongoDB**
Install and start MongoDB locally or use a cloud-based MongoDB service like MongoDB Atlas.

Create a database named leaderboardDB and a collection named users.

Populate the database with initial data:

use leaderboardDB;

db.users.insertMany([
    { name: "Alice", performanceScore: 95, reviews: "Excellent!" },
    { name: "Bob", performanceScore: 90, reviews: "Great work!" },
    { name: "Charlie", performanceScore: 85, reviews: "Good effort." }
]);
