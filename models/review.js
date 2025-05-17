const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
user:{
    type: String,
    required: true,
    trim: true
},
product:{
    type:String,
    required:true,
},
rating:{
    type:Number,
    required:true,
    min:1,
    max:5
},
Comment:{
    type:String,
    trim:true,
},
createdAt:{
    type:Date,
    default:Date.now
}
});

module.exports=mongoose.model('Review',reviewSchema);