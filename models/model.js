const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:String,
    tech:String,
    email:String,
    password:String
});

module.exports = mongoose.model('model',schema)