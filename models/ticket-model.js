const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');
//mongoose.set('useCreateIndex', true);

const Schema = mongoose.Schema;

//const connection = mongoose.createConnection("mongodb://localhost/backend-mern-project");

const connection = mongoose.createConnection("mongodb://heroku_0hh832k1:p55p4rvl6rg06pjuql6i1seess@ds153566.mlab.com:53566/heroku_0hh832k1");

autoIncrement.initialize(connection);

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
  status: {
    type: String,
    required: true,
    enum: ["New", "In Progress", "Waiting on Customer","Complete"]
  },
  priority: {
    type: String,
    required: true,
    enum: ["Low", "Medium", "High"]
  },
  issueType: {
    type: String,
    required: true,
    enum: ["Infrastructure", "Hardware", "Software","User Administration" ]
  },
  date: {
    type: Date, 
    default: Date.now
  },
  dueDate: {
    type: Date,
    default: () => Date.now() + 3*24*60*60*1000
  },
  completedDate: {
    type: Date,
    default: () => Date.now() 
  },
  primaryResource: {
    type: String,
    required: true
  },
  ticketTitle: {
    type: String,
    required: true
  },
  ticketDescription: {
    type: String,
    required: true
  },
  ticketSolution: {
    type: String    
  }
},
{ 
 //additional settings for Schema Class 
 timestamps: true
}
);

ticketSchema.plugin(autoIncrement.plugin, { model: 'Ticket', field: 'ticketId', startAt: 100000, incrementBy: 1 });

// "User" model -> "users" collection
const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;  