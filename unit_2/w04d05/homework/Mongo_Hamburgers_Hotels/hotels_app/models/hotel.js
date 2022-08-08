const mongoose = require('mongoose')

// const Schema = mongoose.Schema

// const hotelSchema = new Schema({
//     name: String,
//     location: String,
//     rating: {type: Number, max: 5},
//     vacancies: {type: Boolean, default: false},
//     rooms:[{roomNumber: Number, size: String, price: Number, booked: Boolean}]
// }, {timestamps: true})



// const Hotel = mongoose.model('Hotel',hotelSchema)
// module.exports = Hotel


/////////////////////////////////////////////

const hotelSchema = mongoose.Schema({
    name:{type: String, required: true, unique:true},
    location:{type: String},
    rating:{type: Number, max:5},
    vacancies:{type: Boolean},
    tags:[{type: String}],
    rooms:[{roomNumber: Number, size: String, price: Number, booked:Boolean}]
}, {timestamps: true});

module.exports=mongoose.model('Hotel', hotelSchema);