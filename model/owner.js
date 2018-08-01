var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var ownerSchema = new Schema({
  name: {
    type: String
  },
  address: String,
  phone: String, 
  email: String
});

var Owner = mongoose.model('Owner', ownerSchema); 
module.exports = Owner;
  