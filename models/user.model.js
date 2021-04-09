const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fulname:{
        type: String,
        require: true,
        trim: true,
    },
    occupation:{
        type: String,
        require: true,
        trim: true,
    },
    email:{
        type: String,
        require: true,
        trim: true,
    },
    phonenumber:{
        type: String,
        require: true,
        trim: true,
    }
},{
    timestamps:true
});

const User = mongoose.model('user',userSchema);

module.exports=User;