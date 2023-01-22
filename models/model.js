const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name:String,
    tech:String
});

module.exports = mongoose.model('model',schema)