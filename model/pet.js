
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
  
var petSchema = new Schema({
  name: {
    type: String
  },
  colour: String,
  age: Number, 
  breed: String,
  type: String,
  owner_id : String
});

var Pet = mongoose.model('Pet', petSchema); 
module.exports = Pet;