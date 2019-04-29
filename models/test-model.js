require('dotenv').config();
const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');

//mongoose.set('useCreateIndex', true);

const Schema = mongoose.Schema;

const connection = mongoose.createConnection("mongodb://localhost/backend-mern-project");

autoIncrement.initialize(connection);


const testSchema = new Schema ({
  accountName: {
    type: String,
    required: true,
    minlength: 2
  }

},
{ 
 //additional settings for Schema Class 
 timestamps: true
}
);

// "User" model -> "users" collection
//bookSchema.plugin(autoIncrement.plugin, { model: 'Book', field: 'bookId' });

testSchema.plugin(autoIncrement.plugin, { model: 'Test', field: 'testId', startAt: 100000, incrementBy: 1 });
const Test = mongoose.model("Test", testSchema);

module.exports = Test;