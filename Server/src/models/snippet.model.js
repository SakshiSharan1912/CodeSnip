const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  // To be defined later
});

module.exports = mongoose.model('User', UserSchema);
