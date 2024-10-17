//database connect                                      
const mongoose = require('mongoose');

// Connection URL
const url = 'mongodb://localhost:27017/mydatabase';

async function connectDB() {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB using Mongoose");
    
    // Define your models and work with your data
  } catch (err) {
    console.error(err);
  }
}

// Call the connectDB function
connectDB();
