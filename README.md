# FAQ Management System

A powerful FAQ management system with multilingual support, allowing admins to manage frequently asked questions (FAQs) through a user-friendly interface. This project leverages Node.js, Express.js, MongoDB, Redis for caching, and AdminJS for the admin panel.

## Features

- **FAQ Management**: Admin can create, edit, and delete FAQs.
- **Multilingual Support**: FAQ content (question & answer) can be translated based on the selected language.
- **Admin Panel**: Built using AdminJS to manage FAQs in a simple, intuitive way.
- **Caching**: Caches FAQ data using Redis to improve performance.
- **WYSIWYG Editor**: Rich text editor for adding and editing FAQ answers.
- **MongoDB**: Stores FAQ data with translations.



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
