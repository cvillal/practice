const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    date: String,
    name: String,
    from: String,
    amount: Number,
    tags:[String]
});

const Budget = mongoose.model('Budget', budgetSchema);
module.exports = Budget;