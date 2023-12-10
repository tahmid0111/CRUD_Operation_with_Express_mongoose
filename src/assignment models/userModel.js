const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String,
    // This field is optional, so it's not marked as required
  },
  phoneNumber: {
    type: String,
    // This field is optional, so it's not marked as required
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
