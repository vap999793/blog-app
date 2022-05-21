var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name : {required:true, minlength:4, maxlength:50, type:String},
    email : {required:true, minlength:4, maxlength:50, type:String},
    password : {required:true, minlength:4, maxlength:50, type:String},
    phone : {required:true, minlength:4, maxlength:50, type:Number},
});

module.exports = mongoose.model("User", userSchema);