const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./usersModel');

const UserLoginSchema = new Schema({
    user_id : { type:Schema.Types.ObjectId, required:true, ref:"User" },
    auth_token : {type:String, required:true },
    timestamps:true,
    collection:"user_login"
});

module.exports = mongoose.model('UserLogin', UserLoginSchema);