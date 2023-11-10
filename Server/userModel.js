  const mongoose = require('mongoose');

  const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    balance: {
      type: Number,
      default: 0,
    },
    role: {
      type: String,
      enum: ['guest', 'user', 'admin'], // Define the roles here
      default: 'guest',
    },
  });

  const User = mongoose.model('User', userSchema);

  module.exports = User;
