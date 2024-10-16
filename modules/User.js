//insert 
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  city: String,
  mobileNumber: String,
  role: {
    type: String,
    default: 'user',  // 'user' or 'admin'
  }
});

// Check if the 'User' model already exists before defining it
module.exports = mongoose.models.User || mongoose.model('User', userSchema);
