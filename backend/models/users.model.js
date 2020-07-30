const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const movieSchema = new Schema({
    name : {
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps: true
}
);

const UserModel = mongoose.model('Users',movieSchema);

module.exports = UserModel ;