const mongoose = require('mongoose')
const Tweet = require('./tweet.js')

const mongoURI = 'mongodb://localhost:27017/' + 'tweets'
const db = mongoose.connection


//create a tweet object and then insert it

// const myFirstTweet = {
//     title: 'First Tweet',
//     body: 'This is my first tweet',
//     author: 'Brendan'
//   }
  
//inserts the tweet obj created above

//   Tweet.create(myFirstTweet, (error, tweet) => {
//     if (error) {
//       console.log(error)
//     } else {
//       console.log(tweet)
//     }
//     db.close()
//   })

//find all the tweets created

// Tweet.find((err, tweets) => {
//     console.log(tweets);
//     db.close()
// })

//fin all that have the title body (second argument allows to pass string w fields we are interested in)

// Tweet.find({}, 'title body', (err, tweets)=>{
//     console.log(tweets);
//     db.close();
//     })

//look for a specific tweet(title:water)

// Tweet.find({title:'Water'}, (err, tweet)=>{
//     console.log(tweet);
//     db.close();
//     })
  
//find the tweets that have 20 or more likes

// Tweet.find({ likes: { $gte:20 }}, (err, tweets)=>{
//     console.log(tweets);
//     db.close();
//   });
   

//delete one specific thing (one with the tittle:first tweet)

// Tweet.findOneAndRemove({title:'First Tweet'}, (err, tweet)=>{
//     if (err){
//       console.log(err);
//     } else {
//       console.log('This is the deleted tweet:', tweet);
//     }
//     db.close()
//     })

//update vespas (one specific part) sponsored and have it print on all ends (mongo/mongoose/node) {new: true} :

// Tweet.findOneAndUpdate({title:'Vespa'},{sponsored: true}, {new: true},(err, tweet)=>{
//     if (err){
//       console.log(err);
//     } else {
//       console.log(tweet);
//     }
//     db.close()
//     })
  
//count how many tweets we have that are GreaterThanorEqual to 20:

// Tweet.countDocuments({likes:{$gte:20}}, (err, tweetCount)=>{
//     console.log('the number of tweets with more than 19 likes is', tweetCount)
//     db.close();
//   });
  

mongoose.connect(mongoURI, () => {
    console.log('the connection is established')
})

// Connection Error/Success
// Define callback functions for various events
// db.on('error', (err) => console.log(err.message + ' is mongod not running?'))
// db.on('connected', () => console.log('mongo connected: ', mongoURI))
// db.on('disconnected', () => console.log('mongo disconnected'))



//creates a bunch of objects

// const manyTweets = [
//     {
//       title: 'First Tweet',
//       body: 'This is my first tweet!',
//       author: 'Brendan'
//     },
//     {
//       title: 'Advice',
//       body: 'Code Everyday!',
//       author: 'Brendan',
//       likes: 20
//     },
//     {
//       title: 'WholeFoods',
//       body: 'I shall deny friendship to anyone who does not exclusively shop at Whole Foods',
//       author: 'Brendan',
//       likes: 40
//     },
//     {
//       title: 'Organic',
//       body: 'I have spent $2300 to be one of the first people to own an organic smartphone',
//       author: 'Brendan',
//       likes: 162
//     },
//     {
//       title: 'Confusion',
//       body: 'Why do you just respond with the word `dislike`? Surely you mean to click the like button?',
//       author: 'Brendan',
//       likes: -100
//     },
//     {
//       title: 'Vespa',
//       body: 'My Vespa has been upgraded to run on old french fry oil. Its top speed is now 11 mph',
//       author: 'Brendan',
//       likes: 2
//     },
//     {
//       title: 'Licensed',
//       body: 'I am now officially licensed to teach yoga. Like this to get 10% off a private lesson',
//       author: 'Brendan',
//       likes: 3
//     },
//     {
//       title: 'Water',
//       body: 'I have been collecting rain water so I can indulge in locally sourced raw water. Ask me how',
//       author: 'Brendan',
//     },
//   ];
  
//inserts all the tweets created (to the mongo database, to the subdb)

//   Tweet.insertMany(manyTweets, (error, tweets) => {
//     if (error) {
//       console.log(error)
//     } else {
//       console.log(tweets)
//     }
//     db.close()
//   })