const mongoose                              = require('mongoose');
const Schema                                = mongoose.Schema;

const CategorySchema = new Schema(
    {
        name : {type:String, trim:true, required:true },
        image : { type:String, default:null },
        status : { type:Number, enum:[0,1] , required:true, default:1 },
        deleted : { type:Number, enum:[0,1], reuqired:true, default:0 },
        timestamps : true,
        collection : "categories" 
    }
);

modules.exports = mongoose.model('Category',CategorySchema);