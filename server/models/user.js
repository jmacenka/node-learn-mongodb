var mongoose = require('mongoose');

var User = mongoose.model('User',{
  name:{
    type:String,
    minlength:2,
    trim:true
  },
  email:{
    type:String,
    required:true,
    minlength:1,
    trim:true
  },
  age:{
    type:Number
  },
  lastUpdated:{
    type:Number,
    default:Date.now
  }
});

module.exports = {
  User
}
