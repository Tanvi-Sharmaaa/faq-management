# FAQ Management System

A powerful FAQ management system with multilingual support, allowing admins to manage frequently asked questions (FAQs) through a user-friendly interface. This project leverages Node.js, Express.js, MongoDB, Redis for caching, and AdminJS for the admin panel.

## Features

- **FAQ Management**: Admin can create, edit, and delete FAQs.
- **Multilingual Support**: FAQ content (question & answer) can be translated based on the selected language.
- **Admin Panel**: Built using AdminJS to manage FAQs in a simple, intuitive way.
- **Caching**: Caches FAQ data using Redis to improve performance.
- **WYSIWYG Editor**: Rich text editor for adding and editing FAQ answers.

---

## Table of Contents

1. [Installation Steps]
2. [API Usage Examples]
3. [Admin Panel Access]
4. [Running the Application]
5. [Contributing]
6. [License]

---


### Prerequisites
Ensure you have the following installed:
- [Node.js] (v14 or later)
- [MongoDB](locally or use a cloud instance such as MongoDB Atlas)
- [Redis] (for caching)


## Installation Steps

Follow these steps to get the project up and running locally:

### Clone the Repository

First, clone the project to your local machine:

```bash
git clone https://github.com/Tanvi-Sharmaaa/faq-management.git
cd faq-management
```

## Backend Setup

1. **Navigate to the backend directory**:

   ```bash
   cd backend
   ```
2. Install Dependencies:
```bash
  npm install
```
3. Set Up Environment Variables:
```bash
MONGO_URI=your_mongo_uri
PORT=3000
```

## Frontend Setup

1. **Navigate to the frontend directory**:

   ```bash
   cd frontend
   ```
2. Install Dependencies:
```bash
  npm install
```
3. Start the frontend server

## Running the application
1. Backend:
Starts on http://localhost:3000
2. Frontend:
   Starts on http://localhost:5000


# MultiFAQ - Multilingual FAQ Management System

A multilingual FAQ management system with Redis caching and MongoDB for storing frequently asked questions in multiple languages. This project allows you to manage and fetch FAQs in various languages, improving performance through caching.

## Features
- **Multilingual Support**: FAQs can be added in multiple languages (e.g., English, Telugu, Hindi, etc.).
- **Redis Cache**: Uses Redis to cache FAQ data for faster retrieval and reduced database load.
- **MongoDB**: Stores FAQ data with translations.
- **Admin Panel**: Allows administrators to add and manage FAQs.
- **API Endpoints**: Exposes RESTful API endpoints to fetch FAQs based on language.
- **Unit Tests**: Ensures correct functionality of FAQ routes.

## Project Structure
```
/src
    /config
        redis.js         // Redis configuration and utility functions
        db.js            // MongoDB connection logic
    /middleware
        requireLogin.js  // Ensuring adminRoutes are secured    
    /models
        faqModel.js      // Mongoose schema for storing FAQs
    /routes
        faqRoutes.js     // API routes for CRUD operations
        adminRoutes.js   // API Routes for admin portal
    /utils
        translate.js     // Functions for translation (if used)
    /views
        admin.ejs        // admin dashboard for creating and managing FAQ's
        edit-faq.ejs     // edit a faq
        login.ejs        // login portal for admin
        user.ejs         // user portal to view FAQ's
    app.js               // Main Express application setup
/tests
    faqRoutes.test.js   // Unit tests for the FAQ routes
    redis.test.js 
    translate.test.js
```

## Installation
### Prerequisites
- Node.js
- MongoDB
- Redis

### Steps to Set Up the Project
1. **Clone the repository:**
   ```sh
   git clone https://github.com/siddu015/MultiFAQ.git
   cd MultiFAQ
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up MongoDB and Redis:**
    - Ensure that MongoDB and Redis are installed and running.
    - Configure MongoDB connection in `/src/config/db.js`.
    - Configure Redis connection in `/src/config/redis.js`.
4. **Set environment variables:**
   Create a `.env` file in the root directory:
   ```sh
   MONGO_URI=mongodb://localhost:27017/multifaq
   REDIS_HOST=localhost
   REDIS_PORT=6379
   GOOGLE_CLOUD_API_KEY=your-api-key
   SECRET_KEY=yoursecretkey
   ```
5. **Run the application:**
   ```sh
   cd src
   nodemon app.js
   ```
   The app should now be running on [http://localhost:8080/faqs](http://localhost:8080/faqs).

## Running with Docker
You can also run this project using Docker and `docker-compose` for easy deployment.

### Steps to Run with Docker
1. **Ensure Docker and Docker Compose are installed.**
2. **Build and start the containers:**
   ```sh
   docker-compose up --build
   ```
   This will build and start the following services:
    - `app`: The MultiFAQ Node.js application.
    - `mongo`: MongoDB database.
    - `redis`: Redis cache service.

3. **Access the application:**
    - API: `http://localhost:8080/api/faqs?lang=en`
    - Admin Panel: `http://localhost:8080/admin`

4. **Stopping the services:**
   ```sh
   docker-compose down
   ```

## API Endpoints
### 1. **POST /api/faqs**
- **Description**: Add a new FAQ.
- **Request Body**:
  ```json
  {
    "question": "What is Node.js?",
  "answer": "Node.js is a JavaScript runtime built on Chrome's V8 engine."
  }
  ```


### 2. **GET /api/faqs**
- **Description**: Fetch FAQs in the specified language.
- **Response**:
    - Returns a list of FAQs in the specified language.
    - If data is not cached, it fetches from the database and caches results in Redis.

## Running Unit Tests
This project includes unit tests for the FAQ routes, written using Jest.

### Run Tests
To run the tests, use the following command:
```sh
npx mocha ./test/**/*.test.js
```

### Test Coverage
The tests cover:
- Adding a new FAQ and ensuring that Redis cache is cleared.
- Fetching FAQs from cache or database based on the cache state.

## Contribution Guidelines
1. **Fork the repository.**
2. **Create a new branch:**
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. **Commit your changes:**
   ```sh
   git commit -am 'Add your feature'
   ```
4. **Push to the branch:**
   ```sh
   git push origin feature/your-feature-name
   ```
5. **Open a pull request.**

---
