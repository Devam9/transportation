
//insert 
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  classStandard: { type: String, required: true },  // class/standard
  password: { type: String, required: true },
  busRoute: { type: String, required: true }
});


// Hash password before saving
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Create the User model
module.exports = mongoose.models.User || mongoose.model('User', userSchema);