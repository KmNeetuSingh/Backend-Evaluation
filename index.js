const express = require('express');
const blogRoutes = require('./routes/blogRoutes');
const logger = require('./Middleware/logger');
const errorHandler = require('./Middleware/errorHandler');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/blogDB?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.3')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB:', err));

// Simple route for testing the server
app.get('/', (req, res) => {
    res.send('Server is Running');
});

// Middleware setup
app.use(express.json());
app.use(logger); 

// Blog routes
app.use('/api', blogRoutes);

// Error handling middleware
app.use(errorHandler); 

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
