const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema ({

  userName: {
    type: String,
    lowercase: true,
    trim: true,
    unique: 'Email already exists',
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    required: 'Email is required'
  }
})