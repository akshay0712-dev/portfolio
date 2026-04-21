# E-Yantra - Backend

This directory contains the complete backend for the E-Yantra web application. It is built with Node.js and Express, and it serves a RESTful API to the frontend.

## Tech Stack

*   **Runtime:** [Node.js](https://nodejs.org/)
*   **Framework:** [Express.js](https://expressjs.com/)
*   **Database:** [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/) ODM
*   **Authentication:** [JSON Web Tokens (JWT)](https://jwt.io/) for securing admin routes
*   **File Uploads:** [Cloudinary](https://cloudinary.com/) for image storage and management, with [Multer](https://github.com/expressjs/multer) for handling `multipart/form-data`.
*   **Middleware:**
    *   [cors](https://www.npmjs.com/package/cors): For handling Cross-Origin Resource Sharing.
    *   [cookie-parser](https://www.npmjs.com/package/cookie-parser): For parsing cookies.
    *   [bcrypt](https://www.npmjs.com/package/bcrypt): For hashing admin passwords.
*   **Development:** [Nodemon](https://nodemon.io/) for automatic server restarts, [dotenv](https://www.npmjs.com/package/dotenv) for managing environment variables.

---

## API Endpoints

The API is versioned under the `/api` prefix.

*   `/api/health`: Health check endpoint.
*   `/api/admin`: Admin registration, login, and session management.
*   `/api/events`: Public and admin routes for creating, reading, updating, and deleting events.
*   `/api/developers`: Routes for managing developer profiles.
*   `/api/contact`: Routes for submitting and managing contact form messages.

## Getting Started

### Prerequisites

*   Node.js (v18.x or higher)
*   npm
*   A running MongoDB instance.

### 1. Environment Variables

Create a `.env` file in this `Backend` directory with the following content:

```env
# Server Configuration
PORT=8000

# MongoDB Configuration
MONGODB_URI=<YOUR_MONGODB_CONNECTION_STRING>
DB_NAME=<YOUR_DATABASE_NAME>

# JWT Secrets
ACCESS_TOKEN_SECRET=<YOUR_ACCESS_TOKEN_SECRET>
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=<YOUR_REFRESH_TOKEN_SECRET>
REFRESH_TOKEN_EXPIRY=7d

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=<YOUR_CLOUDINARY_CLOUD_NAME>
CLOUDINARY_API_KEY=<YOUR_CLOUDINARY_API_KEY>
CLOUDINARY_API_SECRET=<YOUR_CLOUDINARY_API_SECRET>
```

### 2. Installation

Navigate to this directory and install the dependencies.

```sh
# From the project root
cd Backend

# Install dependencies
npm install
```

### 3. Running the Server

Start the development server.

```sh
npm run dev
```

The server will start on the port specified in your `.env` file (e.g., `http://localhost:8000`).
