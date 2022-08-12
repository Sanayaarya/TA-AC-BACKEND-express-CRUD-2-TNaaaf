var mongoose = reuire('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title: {type:String, required: true},
  description:{type:String,required:true},
  tages:[string],
  author:String,
  likes:{type:Number,default:0}
},{timestamps:true});

module.exports = mongoose.model('Articles', articleSchema)