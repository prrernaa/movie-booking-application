const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true,
        unique: true
    },
    
    password: {
        type: String,
        required: true,
        minLenght: 6,
    }
})
const user = mongoose.model('user', UserSchema);
module.exports = user;
