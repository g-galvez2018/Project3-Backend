const mongoose = require("mongoose");
//mongoose.set('useCreateIndex', true);

const Schema = mongoose.Schema;

const clientSchema = new Schema ({
  accounName: {
    type: String,
    required: true,
    minlength: 2
  },
  address1: {
    type: String, 
    required: true
  },
  Phone: {
    type: String, 
    required: true
  },
  Active: {
    type: Boolean
  }

},
{ 
 //additional settings for Schema Class 
 timestamps: true
}
);

// "User" model -> "users" collection
const Client = mongoose.model("Client", userSchema);

module.exports = User;