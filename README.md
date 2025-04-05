# Task Management System – Full Stack (NestJS + React + PostgreSQL)

A full-stack Task Management System that allows users to **Create**, **Read**, **Update**, and **Delete** tasks. The application supports authentication, role-based access, task filtering, and sorting — built with:

-  **NestJS** (Backend API)
-  **PostgreSQL** (Database)
-  **React.js** (Frontend)
-  **Docker Compose** (Orchestration)
-  **JWT Authentication** (Secured Endpoints)

---

## 🚀 How to Setup & Run

### 1. Clone the Repository

```
git clone https://github.com/your-username/task-manager-monorepo.git
cd task-manager-monorepo

```

---

### 2. Create a .env file inside the backend/ directory:
```
DB_HOST=postgres
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_NAME=taskdb

JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=3600s
```
---

### 3. How the Project Works, Features Overview Public access to view tasks
####   Features Overview
Public access to view tasks

Authenticated users can add, update, and delete tasks

User registration and JWT login

Tasks have: title, description, status, due date

Filtering, Sorting, and Validation


#### Backend (NestJS + Sequelize)
Technologies
NestJS (Modular backend framework)

PostgreSQL

Sequelize ORM

JWT Auth with Passport

### 4. API endpoints:
#### Method	Endpoint	Access	Description
- GET	/tasks :-	Public	Fetch all tasks
- POST	/tasks :-	Authenticated	Create a new task
- PUT	/tasks/:id :-	Authenticated	Update a task
- DELETE	/tasks/:id :-	Authenticated	Delete a task
- POST	/auth/login :-	Public	Login and get JWT token
- POST	/users :-	Public	Register a new user
##### Tables
users: id, username, hashed password

tasks: id, title, description, status, due_date, user_id

