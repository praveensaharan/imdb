# Movie Database API

This project is a comprehensive movie database API built using the MERN stack. It scrapes data from IMDB and Wikipedia to compile information about the top 250 movies. The backend is hosted on Glitch, and the frontend is hosted on Netlify.

## Prerequisites

- Node.js (version 14.x or later)
- MongoDB

## Getting Started

### 1. Clone the Repository

Clone the repository to your local machine:


git clone https://github.com/praveensaharan/imdb.git
cd imdb
2. Restore Database Dump
Ensure MongoDB is running locally or use a MongoDB Atlas cluster. Restore the database using the provided dump file:


Copy code
mongorestore --uri mongodb://localhost:27017/movies-database dump/movies-database
Replace mongodb://localhost:27017/movies-database with your MongoDB connection string if using a remote MongoDB instance.

3. Set Up Environment Variables
Create a .env file in the root directory of your project and add the following:

env
Copy code
MONGODB_URI=mongodb://localhost:27017/movies-database
PORT=3000
Replace the MONGODB_URI value with your MongoDB connection string if necessary.

4. Install Dependencies
Install the required dependencies:


Copy code
cd backend
npm install
5. Build and Run Backend Locally
Start the backend server:

Copy code
npm start
Your backend should now be running on http://localhost:3000.

6. Build and Run Frontend Locally
For the frontend, you will need to set up a separate project. If you already have a frontend project, follow the steps below. If not, you can create a simple HTML page to interact with the API.

Navigate to your frontend project directory:


Copy code
cd frontend
Install dependencies and start the frontend server. These commands will vary depending on the framework you are using (e.g., React, Angular, Vue, etc.).

For example, if using React:

Copy code
npm install
npm start
Your frontend should now be running on http://localhost:5173 or another port specified by your frontend framework.

## Test All Flows

Access All Movies:

- Endpoint: GET /api/movies
- URL: http://localhost:3000/api/movies

Access Movies with Pagination:

- Endpoint: GET /api/movies?page=1&pageSize=10
- URL: http://localhost:3000/api/movies?page=1&pageSize=10

Access a Specific Movie by ID:

- Endpoint: GET /api/movies/:id
- URL: http://localhost:3000/api/movies/{movie_id}

Replace `{movie_id}` with an actual movie ID from your database.

### Notes

- Ensure MongoDB is running and accessible during these operations.
- For any issues, check the console logs for errors and troubleshoot accordingly.

### Hosting

- Backend: Hosted on Glitch
- Frontend: Hosted on Netlify
