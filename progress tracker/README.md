# **Hackathon Management Portal**

A full-stack project management portal designed to simplify task assignment, track progress, and enhance team collaboration during hackathons. The application facilitates seamless communication between developers and ensures effective project management.

---

## **Table of Contents**
1. [Features](#features)  
2. [Tech Stack](#tech-stack)  
3. [Setup and Installation](#setup-and-installation)  
4. [Usage](#usage)  
5. [Project Structure](#project-structure)  
6. [Contributing](#contributing)   

---

## **Features**
- **Project Assignment & Tracking:** Assign tasks to team members and monitor progress in real time.  
- **Collaboration Tools:** Promote teamwork between senior and junior developers via milestone tracking and status updates.  
- **Performance Evaluation:** Measure individual contributions and team performance effectively.  
- **Responsive Interface:** Optimized for various devices to ensure a smooth user experience.  
- **Secure Backend:** Data management using Node.js and MongoDB, ensuring stability and scalability.  

---

## **Tech Stack**
- **Frontend:** React (with Vite), CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **State Management:** Context API  
- **Other Tools:** dotenv, nodemon, Postman (API testing)  

---

## **Setup and Installation**

### **Prerequisites**
Ensure you have the following installed:
- Node.js (v14 or higher)  
- MongoDB (local or cloud setup)  

### **Steps**

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/hackathon-management-portal.git
   
2. **Navigate to the Project Directory:**
   ```bash
   cd hackathon-management-portal

3. **Install Dependencies:**
   * Frontend:
   ```bash
   cd frontend
   npm install

4. **Environment Variables:**
   * Create a .env file in the backend directory with the following values:

   ```bash
   MONGO_URI=mongodb://localhost:27017/ligma
   PORT=5000

5. **Run the Application:**
 * Start the Backend:
   ```bash
   cd backend
   npm run dev

 * Start the Frontend:
   ```bash
   cd frontend
   npm run dev

6. Access the Application:
   Visit http://localhost:3000 in your browser.

## **Setup**

1. Login: Access the portal with your credentials.
2. Assign Projects: Allocate tasks to team members from the dashboard.
3. Track Progress: Monitor real-time updates on project milestones.
4. Collaborate: Communicate task statuses and share updates efficiently.


## **Project Structure**

```bash
   hackathon-management-portal/
├── backend/
│   ├── models/         # MongoDB schema definitions
│   ├── routes/         # API routes
│   ├── controllers/    # Route logic
│   ├── .env            # Environment variables
│   ├── server.js       # Main backend server
├── frontend/
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # React pages
│   │   ├── App.jsx     # Main React component
│   ├── public/         # Static files
│   ├── vite.config.js  # Vite configuration
├── README.md           # Project documentation

## **Contributing**

We welcome contributions! To contribute:
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
3. Commit your changes:
   ```bash
   git commit -m 'Add feature'
4. Push to your branch:
```bash
git commit -m 'Add feature'
5. Open a pull request. 



   


