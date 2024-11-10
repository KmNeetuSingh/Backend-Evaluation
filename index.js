const express = require ('express');
const blogRoutes = require('./routes/blogRoutes');
const fs = require ('fs');
const mongoose = require ('mongoose');
const app = express();
const port = 3000;
app.get('/', (req, res) =>{
    res.send('Server is Running')
})
app.use(express.json());
app.use(logger);
app.use('/api',blogRoutes);
app.listen(port,() =>{
    console.log(`Server is running on port ${port}`)
})