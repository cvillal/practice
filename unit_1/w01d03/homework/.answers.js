////////////////////////////////
// Easy Going: Write a for loop that will log the numbers 1 through 20.
// for (let i=1; i<=20; i++){
//     console.log(i)
// }    
////////////////////////////////


////////////////////////////////
// Get Even:Write a for loop that will log only the even numbers in 0 through 200
    // for (let i=0; i<=200; i++){
    //     if (i%2 ===0){
    //         console.log(i)
    // }
    // }
////////////////////////////////


////////////////////////////////
// Fizz Buzz:

// for (let i=1; i<=100; i++){
//     if (i % 3 === 0){
//     console.log("Fizz")
//     }
//     if (i % 5 === 0){
//         console.log("Buzz")
//     }
//     if (i % 3 ===0 && i % 5 === 0){
//         console.log("FizzBuzz")
//     }
// }
//correct way: do most specific one first.
// for (let i=1; i<=100; i++){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log("FizzBuzz")
//     } else if (i % 3 === 0){
//         console.log("Fizz")
//         } else if (i % 5 === 0){
//             console.log("Buzz")
//         }
//     }

//UNSURE WHAT TO DO...RUNNING IT SAYS I NEED TO DEFINE FUZZ BUT I DONT KNOW WHAT TO DEFINE IT AS -- was missing "" around fuzz

////////////////////////////////


////////////////////////////////
// Wild Wild Life
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// 1.
// plantee [2] =5001
// console.log(plantee)
// //a more dynamic way is :
// plantee [2] +=1
// console.log(plantee[2])

// 2.
// wolfy[3] = "Gotham City"
// console.log(wolfy)
// //or:
//.splice or .push n pull

// 3.
// dart.push("Hawkins")
// console.log(dart)
// 4.
// wolfy[0]="Gameboy"
// console.log (wolfy)
////////////////////////////////


////////////////////////////////
// Yell at the Ninja Turtles:

// const NinjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]

// for (let i = 0; i<= NinjaTurtles.length; i++){
//     console.log((NinjaTurtles[i]).toUpperCase())
// }

// //or
// for (names of NinjaTurtles){
//     console.log(names.toUpperCase())
// }

//for fun...REVERSE IT:





//found for of loop on w3 schoool and some guidance on stackoverflow where they suggested looping through each element and making it upper case. i wish i had recorded my excitement face when it worked and printed all in UPPERCASE!!!!HOOOORAAAYYYYYY!!!!
////////////////////////////////


////////////////////////////////
// Methods, Revisited:

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// console.log(favMovies.indexOf('Titanic'))

// console.log(favMovies.sort())
// favMovies.pop()

// console.log(favMovies)
// or
// console.log(favMovies.pop())
// console.log(favMovies)

// favMovies.push("Guardians of the Galaxy")
// console.log(favMovies)

// favMovies.reverse()
// console.log(favMovies)

// favMovies.shift()
// console.log(favMovies)

// favMovies.unshift()
// console.log(favMovies)

//console.log(favMovies.indexOf('Django Unchained')) //3

// favMovies.splice(3,1,"Avatar")
// console.log(favMovies)

//console.log(favMovies.length) //19
//console.log(favMovies[Math.floor(19/2)]) //harry potter
//console.log(favMovies.indexOf('Harry Potter')) //9

//console.log(favMovies.slice(9,19))

// let var = favMovies.slice(9,19)
// console.log(var)
//not sure what to do here, why is it not defining var? HELP

//undefined? not sure what is being asked in this question
////////////////////////////////

////////////////////////////////
// Where is Waldo:
// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
//                     ["Lucinda", "Jacc", "Neff", "Snoop"],
//                     ["Petunia", ["Baked Goods", "Waldo"]]];

// whereIsWaldo.splice(1,1,)
// console.log(whereIsWaldo)


// How do I taget the "neff" inside that array? do I have to splice the original array into several and then change it? but then thats no longer whereIsWaldo

// whereIsWaldo[2].splice(2,1,"No One")
// console.log(whereIsWaldo)
// console.log(whereIsWaldo[2])


// whereIsWaldo.splice(

//maybe:
// const ljns = whereIsWaldo[2]
// console.log(ljns)

// console.log(whereIsWaldo[3][1][1])
////////////////////////////////

////////////////////////////////
//  Excited Kitten:
// for (let i=1; i<=20; i++){
//     console.log("Love me, pet me! HSSSSS!")
// }  //not sure this is correct...

// let catTalk = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."]

// let meow = 0 //do i even need this?

// for (let i=0; i<catTalk.length; i++){
//     if(i%2 ===0){
//         console.log(Math.floor(Math.random()*3))
//     }
// }

//combine the stuff to make just one loop:

// for (let i = 0; i < 20; i++){
//     console.log("love me, pet me! HSSSSS!")
//     if (i % 2 === 0){
//         console.log(catTalk[Math.floor(Math.random(*3))])
//     }
// }

//this worked but it printed 0 instead of a string of words...unsure what to do
////////////////////////////////


////////////////////////////////
//  Find the Median:

//const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

//console.log(nums.sort())

// console.log(nums.length) //25
// console.log(nums[Math.floor(25/2)]) //19??? 25/2=12.5 round down its 12 then i search for the 12th number and thats 15
//NOT SURE HOW TO REACH THAT IN console, loop array talk HELP

// console.log(nums[19])
// console.log(nums.median())
// Math.floor(nums.length/2)
// Expected output:
// => 15


////////////////////////////////


