# SEISO

SEISO is a full-stack web application for waste management and user rewards, built with React (frontend) and Node.js/Express/MongoDB (backend).

## Project Structure

```
client/   # React frontend
server/   # Node.js/Express backend
```

## Features

- User registration and login with JWT authentication
- Waste registration and verification
- User dashboard with seiso amount and coins
- Protected routes for authenticated users
- Logout with token blacklisting

## Tech Stack

- **Frontend:** React, React Router, Axios, Vite
- **Backend:** Node.js, Express, MongoDB, Mongoose, JWT, bcrypt
- **Authentication:** JWT with HTTP-only cookies and token blacklist

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm
- MongoDB Atlas or local MongoDB

### Setup

#### 1. Clone the repository

```sh
git clone <your-repo-url>
cd SEISO
```

#### 2. Install dependencies

**Backend:**
```sh
cd server
npm install
```

**Frontend:**
```sh
cd ../client
npm install
```

#### 3. Configure Environment Variables

Create a `.env` file in the `server/` directory:

```
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
NODE_ENV=development
```

#### 4. Run the Application

**Start the backend:**
```sh
cd server
node index.js
```

**Start the frontend:**
```sh
cd ../client
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:3000


## Folder Structure

- `client/` — React app source code
  - `src/pages/` — Page components (Login, Register, Dashboard, VerifyWaste, Home)
  - `src/components/` — Reusable components (ProtectedRoute, LogoutButton)
  - `src/context/` — React context for user state
- `server/` — Express backend
  - `models/` — Mongoose models (User, Waste, BlacklistToken)
  - `routes/` — Express routes (user.js, waste.js)
  - `middleware/` — Authentication middleware
  - `utils/` — Utility functions (JWT token generation)
  - `config/` — Database connection

## License

MIT

---

**Note:** Update MongoDB URI and JWT secret in your `.env` file before running the backend.
