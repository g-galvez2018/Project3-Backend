const mongoose = require("mongoose");
//mongoose.set('useCreateIndex', true);

const Schema = mongoose.Schema;

const ticketSchema = new Schema ({
  accountName: {
    type: String,
    required: true,
    minlength: 2
  },
  contact: {
    type: String,
    required: true
  },
  Status: {
    type: String,
    enum: ["New", "In Progress", "Waiting on Customer","Complete"]
  },
  Priority: {
    type: String,
    enum: ["Low", "Medium", "High"]
  },
  issueType: {
    type: String,
    enum: ["infrastructure", "Hardware", "Software","User Administration" ]
  },
  date: {
    type: Date, 
    default: Date.now
  },
  dueDate: {
    type: Date
  },
  primaryResource: {
    type: String,
    required: true
  },
  contentTicket: {
    title: String,
    description: String
  }

},
{ 
 //additional settings for Schema Class 
 timestamps: true
}
);

// "User" model -> "users" collection
const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;  