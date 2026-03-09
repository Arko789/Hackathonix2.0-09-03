# Hackathonix Todo API

A **smart backend Todo management API** built with **Node.js, Express, MongoDB, and Zod**.
This project was developed for **Hackathonix 2.0** and focuses on building a **secure, scalable, and intelligent task management system**.

The application includes **authentication, smart priority prediction, timeline-based tasks, validation, and productivity-focused features**.

---

# Features

### Authentication System

* User registration
* Secure login with JWT
* Password hashing using bcrypt
* Protected routes using authentication middleware

### User Profile

Users can retrieve their profile including:

* Name
* Email
* Bio
* Profile image
* Account creation date

Endpoint:

```
GET /auth/profile
```

---

### Todo Management

Users can manage their personal tasks.

Features include:

* Create todos
* Update todos
* Delete todos
* Mark tasks complete
* Retrieve all tasks

Each todo belongs to a specific user.

---

### Smart Priority Prediction

The system automatically predicts the **priority of a task** based on:

* Task title keywords (example: "urgent", "ASAP")
* Deadline proximity
* Timeline urgency

Priority levels:

```
low
medium
high
```

Example:

```
Task: "Finish hackathon project ASAP"
Priority: high
```

---

### Timeline / Deadline System

Todos can include a **deadline**.

The backend uses the deadline to:

* Predict priority
* Sort tasks intelligently
* Identify urgent tasks

Example:

```
POST /todos
{
 "title": "Finish backend API",
 "deadline": "2026-03-10"
}
```

---

### Smart Todo Sorting

Todos are automatically sorted by:

1. Priority level
2. Deadline proximity

Sorting logic:

```
High priority + nearest deadline → Top
Medium priority → Middle
Low priority → Bottom
```

This helps users **focus on the most important tasks first**.

---

### Validation with Zod

All user inputs are validated using **Zod schemas**.

Validation is applied to:

* Register requests
* Login requests
* Todo creation

Example validation rules:

```
Email must be valid
Password minimum length
Todo title required
```

This prevents invalid data from entering the system.

---

### Global Error Handling

The API includes a centralized **error middleware** that:

* Handles unexpected errors
* Returns consistent error responses
* Prevents application crashes

Example response:

```
{
 "success": false,
 "message": "User already exists"
}
```

---

# Tech Stack

Backend

* Node.js
* Express.js

Database

* MongoDB
* Mongoose

Authentication

* JSON Web Tokens (JWT)
* bcrypt

Validation

* Zod

Other Tools

* dotenv
* nodemon

---

# Project Structure

```
config/
controllers/
middleware/
models/
routes/
schema/
utils/

index.js
package.json
```

Explanation:

config
Database configuration.

controllers
Application business logic.

middleware
Authentication and error handling.

models
MongoDB schemas.

routes
API endpoints.

schema
Zod validation schemas.

utils
Helper functions such as priority prediction and sorting.

---

# API Endpoints

Authentication

```
POST /auth/register
POST /auth/login
GET /auth/profile
```

Todo Management

```
POST /todos
GET /todos
PATCH /todos/:id
DELETE /todos/:id
```

---

# Example API Usage

Create Todo

```
POST /todos
```

Body

```
{
 "title": "Complete hackathon presentation",
 "deadline": "2026-03-10"
}
```

Response

```
{
 "title": "Complete hackathon presentation",
 "priority": "high",
 "deadline": "2026-03-10"
}
```

---

# Installation

Clone the repository

```
git clone https://github.com/Arko789/Hackathonix2.0-09-03.git
```

Navigate to the project

```
cd Hackathonix2.0-09-03
```

Install dependencies

```
npm install
```

Create a `.env` file

```
PORT=5000
MONGO_URL=mongodb://127.0.0.1:27017/hackathonix
JWT_SECRET=your_secret_key
```

Start the server

```
npm run dev
```

Server runs at:

```
http://localhost:5000
```

---

# Security Features

* Password hashing using bcrypt
* JWT authentication
* Protected routes
* Input validation with Zod
* Centralized error handling

---

# Future Improvements (Might possible)

Possible upgrades for the project:

* Calendar integration
* Notifications system

---


GitHub
https://github.com/Arko789
