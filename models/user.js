const mongoose = require('mongoose');
// const { Schema } = mongoose;


const userSchema = new mongoose.Schema({
    googleID: String
});

mongoose.model('users', userSchema);
