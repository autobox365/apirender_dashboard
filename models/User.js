const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  job_title: {
    type: String,
  },
  email_preference: {
    type: String,
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
  },
  company_name: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  country: {
    type: String,
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSchema);
