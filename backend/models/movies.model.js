const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const movieSchema = new Schema({
    name : {type:String,required:true},
    description : {type:String,required:true},
    genre:[{type:String,required:true}],
    actor:[{type:String,required:true}],
    director:[{type:String,required:true}],
    country :{type:String,required:true},
    duration:{type:Number,required:true},
    release:{type:Number,required:true} ,
    imageUrl:{type:String,required:true}
},{
    timestamps: true
}
);

const MovieModel = mongoose.model('Movie',movieSchema);

module.exports = MovieModel ;