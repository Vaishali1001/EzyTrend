const mongoose                          = require('mongoose');
const Schema                            = mongoose.Schema;
const Category                          = require('./categoryModel');

const ProductSchema = new Schema({
    name: {type:String, trim:true, required:true },
    description : { type:String, default:null },
    price :  { type:Number , default:0 , required:true },
    category : {  type: Schema.Types.ObjectId, ref:"Category", required:true },
    status : { type:Number , enum:[0,1] , default:1 },
    deleted: { type:Number , enum:[0,1], default:0 },
    timestamps: true,
    collection : "products"
});

module.exports = mongoose.model('Product',ProductSchema);