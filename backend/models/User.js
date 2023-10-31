const mongoose = require('mongoose');
const {Schema , model} = mongoose;

// Schema
const UserSchema = new Schema({
    yourname: {type: String, required: true, min: 3},
    username: {type: String, required: true, min: 4, unique: true},
    password: {type: String, required: true, min: 6},
});

// Collection
const UserModel =model('User', UserSchema);

module.exports = UserModel;