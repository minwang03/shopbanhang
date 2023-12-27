const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  // ... thêm các trường khác nếu cần
});

const User = mongoose.model('User', userSchema);

module.exports = User;