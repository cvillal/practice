// for (let i = 0; i <= 10; i++){
//     console.log(i)
//   }
  
// for (let i = 0; i <= 10; i++){
//   if (i === 1) {
//     console.log('the num is 1')
//   }
// }

// for (let i = 1; i <= 10; i++){
//   if (i % 2 === 0) {
//     console.log('num is even: ', i)
//   }
// }

let evenSum = 0

for (let i = 1; i <= 10; i++){
  if (i % 2 === 0) {
    evenSum += i
    //evenSum= evenSum+1
  }
}

console.log(evenSum)