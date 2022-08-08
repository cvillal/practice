//I tried to work on this for hours trying different approaches and moving things aorund. I continued to get that there were MongooseError of operation and that it was buffering adn timed out. I attemped following the tweets notes to create hotels but the nodemon part never worked properly. Unsure how this all works and where to go from here. The connection with mongod is established

// [nodemon] clean exit - waiting for changes before restart
// [nodemon] restarting due to changes...
// [nodemon] starting `node app.js`
// The connection with mongod is established
// MongooseError: Operation `hotels.insertOne()` buffering timed out after 10000ms
//     at Timeout.<anonymous> (/Users/carolinavillalobos/SEI/SEIR-Zoidberg/unit_2/w04d05/homework/Mongo_Hamburgers_Hotels/hotels_app/node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:151:23)
//     at listOnTimeout (node:internal/timers:559:17)
//     at processTimers (node:internal/timers:502:7)
// [nodemon] clean exit - waiting for changes before restart

// I wrote things out as I thought theyd work as per the markdown, hoping that when things get properly connected I will be able to run everything accordingly.

// *******************************************//
// Everything provided to students in markdown start
// *******************************************//

// Dependencies
const mongoose = require('mongoose')
const { any } = require('webidl-conversions')

const Hotel = require('./models/hotel.js')
const hotelSeed = require('./models/seed.js')

// Config
const mongoURI = 'mongodb://localhost:27017/hotel'
const db = mongoose.connection

// Models


// Connect to Mongo
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
//   console.log('The connection with mongod is established')
// })

// Error / success
// db.on('error', (err) => console.log(err.message + ' is Mongod not running?'))
// db.on('connected', () => console.log('mongo connected: ', mongoURI))
// db.on('disconnected', () => console.log('mongo disconnected'))

/////////////////////////////////////////////////
// const myFirstHotel = {
//   "name": "Hotel California",
//   "location": "California",
//   "rating": 4,
//   "vacancies": true,
//   "rooms": [
//     {
//       "roomNumber": 102,
//       "size": "Queen Double",
//       "price": 55,
//       "booked": true
//     },
//     {
//       "roomNumber": 202,
//       "size": "King Suite",
//       "price": 68,
//       "booked": false
//     },
//     {
//       "roomNumber": 404,
//       "size": "Queen Double",
//       "booked": false
//     }]
// }

//   Hotel.create(myFirstHotel, (error, hotel) => {
//     if (error) {
//       console.log(error)
//     } else {
//       console.log(hotel)
//     }
//     db.close()
//   })



// Hotel.create(myFirstHotel, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added provided hotel data')
// })

// Hotel.find((err, hotels)=>{
//   console.log(hotels);
//   db.close()
//   })  

// Hotel.find({}, "name", (err, hotel) =>{
//     console.log(hotel);
//     db.close()
// })

// Hotel.find({name:"Hotel California"}, (err, hotel) => {
//    console.log(hotel);
//       db.close();
// })

// Hotel.find({}, {vacancies:true}, {$ne rating:1}, (err, hotel)=>{
//     console.log(hotel);
//     db/close();
// })

// Hotel.findOneAndRemove({name:'Hotelicopter'}, (err, hotel) =>{
//   console.log(hotel);
// })

// Hotel.findOneAndRemove({name:'Hilbert's Hotel'}, (err, hotel) =>{
//   console.log(hotel);
// })

// Hotel.findOneAndRemove({location: 'Colorado Rockies'}, (err, hotel) =>{
//   console.log(hotel);
// })

// Hotel.findOneAndUpdate({location:'White Bay, Oregon'},{rating: 5}, {new: true},(err, hotel)=>{
//     console.log(hotel);
//     db.close()
//   })

  // Hotel.findOneAndUpdate({name:'Motel Bambi'},{vancacies: false}, {new: true},(err, hotel)=>{
  //   console.log(hotel);
  //   db.close()
  // })

  // Hotel.findOneAndUpdate({location:'White Bay, Oregon'},{rating: 2}, {new: true},(err, hotel)=>{
//     console.log(hotel);
//     db.close()
//   })
// Hotel.collection.drop()

// Hotel.countDocuments({}, (err, data) => {
//   if (err) console.log(err.message)
//   console.log(`There are ${data} hotels in this database`)
// })

// *******************************************//
// Everything provided to students end
// *******************************************//
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
  console.log('The connection with mongod is established')
})