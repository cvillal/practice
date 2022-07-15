//Verbal Questions:
// What is the difference between a parameter and an argument?
// a Parameter modifies the behavior of the function.
// An Argument specifies the value of the parameter. (what is "plugged in" as the parameter)

// Within a function, what is the difference between return and console.log?
// Return is what will be inputted as the argument. (ends the function immediately)
// console.log prints the argument.

//Palindrome:

// const checkPalindrome = (text) => {
// const tXt = text.split("")    
// console.log(tXt)
//     if(text === tXt.reverse("").join("")){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(checkPalindrome("madam"))





//unsure where to start. unsure how to set it up and what to put where. am i just looking for true/false? or that the function works and returns the words reversed adn w a capital letter upfront?

// Sum Array:

// const Array = [1, 2, 3, 4, 5] 


// const sumArray= (Array) => {
// let sum = 0
//     for (let i=0; i<= Array.length; i++){
//         sum += Array[i]
//         }
//         return sum     
// }
// // console.log(sumArray([1, 2, 3, 4, 5]))
// sumArray(Array)
// console.log(sum)

// sumArray.reduce(sumArray(1, 2, 3, 4, 5), 0)

//unsure of scope/order
//looked up .reduce() definition on w3 attempted to apply, unsure how to proceed. its all a big mess HELP

//Prime Numbers:
// Step 1

// const checkPrime = ("checks if number is prime") => {
//     if (i=0; i<=sqrt(97); i++) {
//     console.log ('true')
//     } else { 
//     console.log ('false')
//     }
// }
// Step 2

// const printPrimes = () =>{
//     if (i=0; i<=97; i++){
//         console.log(all prime numbers up to 97)
//     }

// }

//id like to think this is my pseudo code...unsure how to go deeper into actually making it function pun intended

// ^^this seems to have worked!:
// choices=["rock", "paper", "scissors"]
// const randomMove = (choices)=>{
//     return Math.floor(Math.random()*choices.length)
//     //returns (.randomly chosen move)
   
// }
// console.log(Math.floor(Math.random()*choices.length))
// ^^

//const randomMove =Math.floor(Math.random()*choices.length) //looked at the lapis papyrus scalpellus for reference

// const rockPaperScissors = ([userMove, computerMove])=>{
//     if (userMove(randomMove) && computerMove(randomMove))
//         return 
//     one choice beats the other){
//         console.log(who won)
//     }

// }
// console.log(randomMove())

// )
// rock>scissors
// scissors>paper
// paper>rock

//first part seems to have worked. I am unsure how to now make this second part utilize that first one for user/computer to make their choice and print result.I attempted my "pseudocode"...no clue what to actually input to make them work or if theyre even set up properly. HELP

