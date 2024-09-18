const mongoose = require('mongoose');
const Schema = mongoose.Schema();

const UserSchema = new Schema({
    name : { type:String, required:true },
    email : { type:String, required:true, unique:true, trim:true, match:[/.+\@.+\..+/, 'Please fill a valid email address'] },
    password : { type:String, required:true },
    role : { type:String, enum:['admin','user'] },
    status : { type:Number , enum:[0,1] , default:1 },
    deleted : { type:Number , enum:[0,] ,  default:0 },
    timestamps : true,
    collection : "users"
});

module.exports = mongoose.model('User', UserSchema);