const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema ({
    fullName: {
      type: String,
      required: true,
      minlength: 2
    },
    email: {
      type: String,  
      unique: true,
      match: /^.+@.+\..+$/,
      required: true
    },
    encryptedPassword: { 
      type: String, 
      required: true 
    },
    status: {
      type: String,
      required: true,
      enum: ['Pending', 'Active', 'Inactive'],
      default: 'Pending'
    },
    role: {
      type: String,
      required: true,
      enum: ['Admin', 'Technician', 'Client', 'Dispatcher', 'Team Lead', 'Tester'],
      default: 'Client'    
    }
  },
  { 
   //additional settings for Schema Class 
   timestamps: true
  }
);

// "User" model -> "users" collection
const User = mongoose.model("User", userSchema);

module.exports = User;