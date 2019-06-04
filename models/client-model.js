const mongoose = require("mongoose");
//mongoose.set('useCreateIndex', true);

const Schema = mongoose.Schema;

const clientSchema = new Schema ({
  accountName: {
    type: String,
    required: true,
    minlength: 2
  },
  address: {
    type: String, 
    required: true
  },
  city: {
    type: String, 
    required: true
  },
  state: {
    type: String, 
    required: true
  },
  zipCode: {
    type: String, 
    required: true
  },
  phone: {
    type: String, 
    required: true
  },
  active: {
    type: Boolean
  }
},
{ 
 //additional settings for Schema Class 
 timestamps: true
}
);

// "User" model -> "users" collection
const Client = mongoose.model("Client", clientSchema);

module.exports = Client;