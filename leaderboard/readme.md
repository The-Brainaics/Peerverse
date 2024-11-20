# **Dynamic Leaderboard System**

This project, developed by [Sarthak]([url](https://github.com/SarthakKacholiya)) as part of a hackathon, is a fully functional Leaderboard System designed to rank developers based on performance metrics, peer reviews, and alumni/admin feedback. The system fosters healthy competition by showcasing top performers and updates rankings dynamically in real time using MongoDB as the database backend.

# **Features**
1. Real-Time Leaderboard Updates: The leaderboard automatically updates rankings whenever new data is added or modified.
2. Dynamic Feedback Integration: Alumni and admin reviews directly influence the ranking system.
3. Clean, Interactive UI: A responsive and visually appealing interface for viewing rankings and feedback.
Scalable Backend: Designed with Node.js and MongoDB for a seamless and scalable backend.
Customization Options: Flexible architecture to add new performance metrics or expand features.

# **Tech Stack**
| **Category**       | **Technology**         |
|---------------------|-------------------------|
| **Frontend**        | HTML, CSS, JavaScript  |
| **Backend**         | Node.js, Express.js    |
| **Database**        | MongoDB                |
| **Styling**         | Custom CSS             |
| **Version Control** | Git, GitHub            |
| **Hosting (Future)**| Heroku, Vercel         |

# **Getting Started**

Follow these steps to set up the project locally:

**1.Clone the Repository**

`git clone https://github.com/sarthak/leaderboard-system.git
cd leaderboard-system`

**2.Install Dependencies**
Ensure Node.js and npm are installed on your machine. 

Then run:
`npm install`

**3. Set Up MongoDB**

1. Install and start MongoDB locally or use a cloud-based MongoDB service like MongoDB Atlas.

2. Create a database named leaderboardDB and a collection named users.

3. Populate the database with initial data:

```
use leaderboardDB;

db.users.insertMany([
    { name: "Alice", performanceScore: 95, reviews: "Excellent!" },
    { name: "Bob", performanceScore: 90, reviews: "Great work!" },
    { name: "Charlie", performanceScore: 85, reviews: "Good effort." }
]);
```

**4.Run the Application**

Start the server locally using the command:

`node server.js`

# **File Structure**

```
leaderboard-system/
├── public/
│   ├── index.html       # Main HTML file
│   ├── style.css        # Stylesheet
│   ├── script.js        # Client-side JavaScript
├── server.js            # Backend server
├── package.json         # Node.js package configuration
├── .env                 # Environment variables
├── README.md            # Project documentation
└── .gitignore           # Ignored files for Git
```

# **Usage**

1.View Rankings: Open the leaderboard in your browser to view real-time rankings and feedback.

2.Update Data: Modify the MongoDB database (or add a form in the future) to update user performance or feedback.

3.Dynamic Updates: Refresh the leaderboard page to view real-time updates based on changes in the database.

# **Future Enhancements**

1. Authentication System: Restrict data updates to verified admins or alumni.

2. Advanced Metrics: Add filters, search, or other performance metrics.

3. WebSocket Integration: Enable instant updates without refreshing the page.

4. Mobile-Friendly UI: Optimize the interface for mobile devices.

5. Cloud Deployment: Host the app on Heroku, Vercel, or another cloud platform.

# **Contributing**

Contributions are welcome! If you’d like to contribute:

# **Fork the repository.**

1.Create a new branch (feature/new-feature).

2.Commit your changes and push to your branch.

3.Submit a pull request.

# **Acknowledgments**

A big thank you to the hackathon organizers for providing the platform and inspiration for this project. Special thanks to the open-source community for the tools and frameworks that made this project possible.

**Connect with Sarthak**
Feel free to reach out via GitHub: [Sarthak]([url](https://github.com/SarthakKacholiya))



