// const exampleFunction = () => {
//     const num = 100
//     console.log(num * num)
//   }
  
//   console.log(num)

//variable is defined by global scope - its outside the function: 
// const item = 'spicy meatball'

// const exampleFunction = () => {
//   console.log(`${item} within the function`)
// }

// exampleFunction()

// const setItem = () => {
//     const item = 'spicy meatball'
//     return item
//   }
  
//   const getItem = () => {
//     return item
//   }
  

// const returnName = () => {
//     return 'Brendan'
//   }
  
//   const returnGreeting = () => {
//     return `oh hai ${returnName()}`
//   }
  
//   console.log(returnGreeting())

// // GOOD SCOPING
// {
//     const item = 'spicy meatball'
//   }
  
//   console.log(item)
  
//   // BAD SCOPING
//   {
//     var item = 'spicy meatball'
//   }
  
//   console.log(item)

// for (let i = 0; i < 100; i++) {
//     console.log(`Inside the block: ${i}`)
//   }
  
//   console.log(`Outside the block: ${i}`)

//use var to define - can variable be accessed outside loop after its ran? YES:
// for (var i = 0; i < 100; i++) {
//     console.log(`Inside the block: ${i}`)
//   }
  
//   console.log(`Outside the block: ${i}`)

//use let to define - is variable accessible outside loop? NO :
// for (let i = 0; i < 100; i++) {
//     console.log(`Inside the block: ${i}`)
//   }
  
//   console.log(`Outside the block: ${i}`)

//A LET VARIABLE DEFINED WITHIN THE BLACK OF THE LOOP?:
// for (let i = 0; i < 100; i++) {
//     console.log(`Inside the block: ${i}`)
//   }
  
//   console.log(`Outside the block: ${i}`)

// const age = 21
// let message = ''

// if (age < 21) {
//   message = 'You cannot buy the beer'
// } else {
//   message = 'You can buy the beer'
// }

// // console.log(message)

// const words = 'thats a...'

// {
//   const item = 'spicy meatball'
//   const start = 'mama mia!'
//   {
//     console.log(start)
//     console.log(words)
//     console.log(item)
//   }
// }


