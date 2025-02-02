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

Backend Setup
Navigate to the backend directory:

bash
Copy
Edit
cd backend
Install the dependencies:

bash
Copy
Edit
npm install
Create a .env file in the backend folder and configure your MongoDB URI and Redis (optional):

plaintext
Copy
Edit
MONGO_URI=mongodb://your_mongo_connection_string
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
Start the backend server:

bash
Copy
Edit
npm start
This will start the backend on http://localhost:3000.

Frontend Setup
Navigate to the frontend directory:

bash
Copy
Edit
cd frontend
Install the frontend dependencies:

bash
Copy
Edit
npm install
Start the frontend server:

bash
Copy
Edit
npm start
This will start the frontend on http://localhost:5000.

API Usage Examples
1. Create FAQ
Endpoint: /api/faqs

Method: POST

Request Body:

json
Copy
Edit
{
  "question": "What is Node.js?",
  "answer": "Node.js is a JavaScript runtime built on Chrome's V8 engine."
}
Response:

json
Copy
Edit
{
  "success": true,
  "data": {
    "question": "What is Node.js?",
    "answer": "Node.js is a JavaScript runtime built on Chrome's V8 engine.",
    "translations": {
      "en": {
        "question": "What is Node.js?",
        "answer": "Node.js is a JavaScript runtime built on Chrome's V8 engine."
      },
      "fr": {
        "question": "Qu'est-ce que Node.js?",
        "answer": "Node.js est un moteur JavaScript basé sur V8 de Chrome."
      }
    }
  }
}
2. Get All FAQs
Endpoint: /api/faqs

Method: GET

Query Parameter: lang (optional, defaults to en)

Example:

plaintext
Copy
Edit
http://localhost:3000/api/faqs?lang=fr
Response:

json
Copy
Edit
{
  "success": true,
  "data": [
    {
      "question": "What is Node.js?",
      "answer": "Node.js is a JavaScript runtime built on Chrome's V8 engine."
    },
    {
      "question": "Qu'est-ce que Node.js?",
      "answer": "Node.js est un moteur JavaScript basé sur V8 de Chrome."
    }
  ]
}
Admin Panel Access
Once the backend is running, you can access the Admin Panel at:

plaintext
Copy
Edit
http://localhost:3000/admin
Use this interface to manage FAQs. AdminJS makes it easy to add, edit, and delete FAQs.

Default Admin Panel Login:
The admin panel does not require any specific authentication by default. If you would like to set up custom authentication, you can configure it in AdminJS settings.

Running the Application
Backend: Starts on http://localhost:3000.
Frontend: Starts on http://localhost:5000.
Admin Panel: Accessible at http://localhost:3000/admin.
Starting Both Servers
You can run both servers (frontend and backend) simultaneously. It's recommended to use a tool like Nodemon for auto-restarting the backend when you make changes:

Install Nodemon globally:

bash
Copy
Edit
npm install -g nodemon
Run backend with Nodemon:

bash
Copy
Edit
nodemon server.js
Contributing
We welcome contributions! Please follow these steps to contribute to this project:

Fork the repository.
Create a new branch for your feature (git checkout -b feature-name).
Make changes and commit them (git commit -m 'Add new feature').
Push your changes to your forked repository (git push origin feature-name).
Open a pull request.
