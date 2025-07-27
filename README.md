# ✂️ CodeSnip

**CodeSnip** is a modern, full-stack web application that helps developers securely save, tag, and manage reusable code snippets.  
Built using the MERN stack, CodeSnip includes authentication, smart tagging, syntax highlighting, and a sleek UI for seamless snippet management.

---

## 🚀 Features

- 🔐 **User Authentication** – Signup & login with hashed passwords and JWT tokens  
- 📁 **Snippet Management** – Create, read, update, delete, and filter snippets  
- 🧠 **Smart Tagging** – Auto-generated tags based on code content  
- 🌈 **Syntax Highlighting** – Powered by Prism.js  
- 📱 **Responsive UI** – Tailwind CSS ensures mobile and desktop usability  
- ✨ **Modern UX** – Clean, intuitive interface with real-time feedback

---
## 📂 Table of Contents

- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Technologies Used](#technologies-used)

---

## ⚙️ Installation

### ✅ Prerequisites

- Node.js (v14 or higher)
- MongoDB (Atlas or local)
- npm or yarn

---

### 🔧 Backend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SakshiSharan1912/CodeSnip.git
   cd CodeSnip

2.**Create a .env file inside the server/ directory**:
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=1d
NODE_ENV=development

3.**Install server dependencies and run the backend**:
cd server
npm install
node src/server.js
### Frontend Setup

1. Install dependencies and start the client:
   ```bash
   cd client
   npm install
   npm run dev
   ```

2. The application will be available at `http://localhost:5173`

## Usage

1. Register a new account or login with existing credentials
2. Create new snippets with code, description, and language
3. Browse, search, and filter your code snippets
4. Edit or delete existing snippets as needed

## API Documentation

### Authentication Endpoints

| Method | Endpoint           | Description           |
| ------ | ------------------ | --------------------- |
| POST   | `/api/auth/signup` | Register a new user   |
| POST   | `/api/auth/login`  | Authenticate a user   |
| GET    | `/api/auth/me`     | Get current user info |


### Snippet Routes

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| GET    | `/api/snippets`     | Get all snippets     |
| POST   | `/api/snippets`     | Create a new snippet |
| GET    | `/api/snippets/:id` | Get snippet by ID    |
| PUT    | `/api/snippets/:id` | Update a snippet     |
| DELETE | `/api/snippets/:id` | Delete a snippet     |

## Technologies Used

### Frontend
- React
- TypeScript
- TailwindCSS
- Axios
- React Router
- Prism.js

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt.js

---

Created by [Sakshi Sharan ](https://github.com/SakshiSharan1912) 