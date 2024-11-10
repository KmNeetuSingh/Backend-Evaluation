# 📝 Blog API Evaluation

This API allows you to create, read, update, and delete (CRUD) blog posts, all while connecting to MongoDB for data storage. Let's dive in! 🚀

## 🌟 Features
- 📖 **Create, Read, Update, Delete** blog posts
- 🛠️ **Custom Middleware** for logging requests
- 🌐 **MongoDB** connection for data persistence
- 🎉 **Error Handling** to keep things smooth
- 🔌 **Modular Code** setup for easy scaling

## 🛠️ Tech Stack
- **Node.js** + **Express**: Server and API framework
- **MongoDB**: Database for data storage
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB
- **JSON**: Simple data format for request and response

---

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- **Node.js** and **npm** (Node Package Manager)
- **MongoDB** (locally or a MongoDB Atlas account)

### Installation

1. **Clone the repo**:
   ```bash
   https://github.com/KmNeetuSingh/Backend-Evaluation.git
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start MongoDB**:
   If you’re using MongoDB locally, make sure it’s running. For MongoDB Atlas, update the `MONGODB_URI` in `mongoose.connect` with your connection string.

4. **Run the server**:
   ```bash
   npm start
   ```
   The server will start on `http://localhost:3000` 🚀

---

## 📚 API Endpoints

### Create a New Post
- **Endpoint**: `POST /api/posts`
- **Description**: Adds a new blog post.
- **Body Parameters**: 
  ```json
  {
    "title": "My First Post",
    "content": "This is the content of the blog post.",
    "author": "Your Name"
  }
  ```

### Get All Posts
- **Endpoint**: `GET /api/posts`
- **Description**: Retrieves all blog posts.

### Get a Single Post
- **Endpoint**: `GET /api/posts/:id`
- **Description**: Retrieves a specific blog post by ID.

### Update a Post
- **Endpoint**: `PUT /api/posts/:id`
- **Description**: Updates a specific blog post by ID.
- **Body Parameters**:
  ```json
  {
    "title": "Updated Title",
    "content": "Updated content here."
  }
  ```

### Delete a Post
- **Endpoint**: `DELETE /api/posts/:id`
- **Description**: Deletes a blog post by ID.

---

## 🔧 Project Structure

- **server.js**: Main file that connects to MongoDB, sets up middleware, and starts the server.
- **routes/blogRoutes.js**: Defines all blog-related API routes.
- **Middleware/logger.js**: Logs requests to the server.
- **Middleware/errorHandler.js**: Handles errors and keeps the app running smoothly.
- **models/Post.js**: Mongoose schema for blog posts.

---

## 🐞 Error Handling
Errors are caught and managed through a custom middleware in `errorHandler.js`. If something goes wrong, you’ll see a clear message in your console.
