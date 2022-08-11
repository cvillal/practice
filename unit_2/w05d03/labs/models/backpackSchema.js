const mongoose = require('mongoose');

const backpackSchema = new mongoose.Schema({
    name: String,
    grade: Number,
    supplies:[String]
});

const Backpack = mongoose.model('Backpack', backpackSchema);
module.exports = Backpack;