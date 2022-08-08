// create 5 burgers (at least 3 should be beef)

// db.burger.insert({meat: 'beef', cheese: false, toppings: ['ketchup', 'onions', 'pickles']})
// repeated 5 times with any variations desired


// find all the burgers

// > db.burger.find().pretty()

// {
// 	"_id" : ObjectId("62eeb5ac4ffbbf0617692059"),
// 	"meat" : "beef",
// 	"cheese" : false,
// 	"toppings" : [
// 		"ketchup",
// 		"onions",
// 		"pickles"
// 	]
// }
// {
// 	"_id" : ObjectId("62eeb61a4ffbbf061769205a"),
// 	"meat" : "beef",
// 	"cheese" : false,
// 	"toppings" : [
// 		"ketchup",
// 		"onions",
// 		"pickles"
// 	]
// }
// {
// 	"_id" : ObjectId("62eeb6914ffbbf061769205b"),
// 	"meat" : "beef",
// 	"cheese" : false,
// 	"toppings" : [
// 		"ketchup",
// 		"onions",
// 		"pickles"
// 	]
// }
// {
// 	"_id" : ObjectId("62eeb6944ffbbf061769205c"),
// 	"meat" : "beef",
// 	"cheese" : false,
// 	"toppings" : [
// 		"ketchup",
// 		"onions",
// 		"pickles"
// 	]
// }
// {
// 	"_id" : ObjectId("62eeb6f44ffbbf061769205d"),
// 	"meat" : "veggie",
// 	"cheese" : false,
// 	"toppings" : [
// 		"ketchup",
// 		"mustard",
// 		"tomatoes"
// 	]
// }

// show just the meat of each burger

// db.burger.find({},{meat:1,_id:0})
// { "meat" : "beef" }
// { "meat" : "beef" }
// { "meat" : "beef" }
// { "meat" : "beef" }
// { "meat" : "veggie" }

// show just the toppings of each burger

// db.burger.find({}, {toppings:1, _id:0})
// { "toppings" : [ "ketchup", "onions", "pickles" ] }
// { "toppings" : [ "ketchup", "onions", "pickles" ] }
// { "toppings" : [ "ketchup", "onions", "pickles" ] }
// { "toppings" : [ "ketchup", "onions", "pickles" ] }
// { "toppings" : [ "ketchup", "mustard", "tomatoes" ] }

// show everything but the cheese

// db.burger.find({}, {cheese:0, _id:0})
// { "meat" : "beef", "toppings" : [ "ketchup", "onions", "pickles" ] }
// { "meat" : "beef", "toppings" : [ "ketchup", "onions", "pickles" ] }
// { "meat" : "beef", "toppings" : [ "ketchup", "onions", "pickles" ] }
// { "meat" : "beef", "toppings" : [ "ketchup", "onions", "pickles" ] }
// { "meat" : "veggie", "toppings" : [ "ketchup", "mustard", "tomatoes" ] }

// find all the burgers with beef

// db.burger.find({meat:'beef'},{ _id:0})
// { "meat" : "beef", "cheese" : false, "toppings" : [ "ketchup", "onions", "pickles" ] }
// { "meat" : "beef", "cheese" : false, "toppings" : [ "ketchup", "onions", "pickles" ] }
// { "meat" : "beef", "cheese" : false, "toppings" : [ "ketchup", "onions", "pickles" ] }
// { "meat" : "beef", "cheese" : false, "toppings" : [ "ketchup", "onions", "pickles" ] }
// > 


// find all the burgers that are not beef

// db.burger.find({meat:{$ne:'beef'}})
// { "_id" : ObjectId("62eeb6f44ffbbf061769205d"), "meat" : "veggie", "cheese" : false, "toppings" : [ "ketchup", "mustard", "tomatoes" ] }
// > 

// find the first burger with cheese

//i didnt make any with cheese...oops

// db.burger.find({}, {cheese:1, _id:0})
// { "cheese" : false }
// { "cheese" : false }
// { "cheese" : false }
// { "cheese" : false }
// { "cheese" : false }

// find one and update the first burger with cheese to have a property of 'double cheese'

// db.burger.update({cheese:false},{$set:{cheese:'double cheese'}})
// WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

// find the burger you updated to have double cheese

// db.burger.find({cheese:'double cheese'}).pretty()
// {
// 	"_id" : ObjectId("62eeb5ac4ffbbf0617692059"),
// 	"meat" : "beef",
// 	"cheese" : "double cheese",
// 	"toppings" : [
// 		"ketchup",
// 		"onions",
// 		"pickles"
// 	]
// }


// find and update all the beef burgers to be 'veggie'

// db.burger.update({},{$set:{meat:'veggie'}},{multi:true})
// WriteResult({ "nMatched" : 5, "nUpserted" : 0, "nModified" : 4 })

// delete one of your veggie burgers
// WRONG - dELETES ALL : db.burger.remove({meat: 'veggie'})

// db.burger.remove({meat:'veggie'},{justOne:true})
// WriteResult({ "nRemoved" : 1 })
// > 

// drop the collection
//Expected Output
//true

// db.burger.drop()
// true

// drop the database
//Expected Output
// {
//   "dropped": "burgers",
//   "ok": 1
// }


//
// Bonus
//recreate your burgers database and your burger collection
//copy paste your insert burgers from above to reseed your database


//
// Change the name of the key cheese to 'pumpkinSpice'


// find all the burgers with ketchup (or another topping you used at least once)


// find all the burgers with pickles (or a topping you used more than once) and remove the pickles


// add a topping of 'eggs' to all the beef burgers
//note since this db is 'reset' there should be no veggie burgers, all beef burgers should still be intact

//Add a price to each burger, start with $5.00 for each burger 