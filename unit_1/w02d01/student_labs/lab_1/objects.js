//Syntax:
// const: defines the variable
//variable what the objects name will be
// {} declares object, sotres the objects properties/contents
//key: unique descriptor of the data/value of the object
//value: data?
//key-value pair makes up the properties of the object
//there can be arrays, functions, loops and other objects within an object

//MeMeMe
// const me ={
//     firstName: 'Carolina',
//     lastName: 'Villalobos',
//     age: 32,
//     email: 'cvillal2089@gmail.com'
// }

// console.log (me.firstName)

// me.age=1000;
// console.log (me)
//console.log(me.age)

// me.placeOfResidence = 'Charlotte';
// // console.log (me)
// console.log(me.placeOfResidence)

//Fancy Greeting
// const fancyGreeting = (obj)=>{
//     return (`"Greetings ${obj.firstName} ${obj.lastName}"`)
// };
// console.log(fancyGreeting(me))

//you could put me instead of obj or x or i whatever. doesnt matter bc "me" is beign called

//Slimer
// const monster = {
//     name: "Slimer",
//     color: "greenish",
//     type: "plasm or ghost or something"
//  }
 
//  console.log(monster.name)
//  monster.type = 'creature';
//  console.log(monster)

// monster.age=6;
// console.log (monster)

//Ogres
// const adventurer={
//     name: "Adeventurer1", 
//     hitpoints: 40,
//     weapons: ["knife", "log", "water"],
//     damage: 8
// }

// const ogre={
//     name: "BigOgre",
//     hitpoints: 40,
//     weapons: ["hands", "log", "spit"],
//     damage: 2
// }

// const battle = () => {
//     while (adventurer.hitpoints>0 && ogre.hitpoints>0){
//         ogre.hitpoints-=adventurer.damage
//         adventurer.hitpoints-=ogre.damage
//     }

//     }

//NEED HELP UNDERSTANDING HOW TO MAKE A BATTLE GAME WORK. HEALTH-WEAPONS EVERYTHING >>HELP!!!<<

//Cat Combinator
//1.Mama Cat
const cat1 ={
    name: 'Meow',
    breed: 'Sphynx',
    age: 3
}

// console.log (cat1.age);

//console.log (cat1.breed);

//2.Papa Cat
const cat2 ={
    name: 'MeowMeow',
    breed: 'Bengal',
    age: 5
}

const combineCats =(){
    return {
        cat1, cat2
    }
} 
console.log(cat1, cat2)


//NEED HELP COMBINING FUNCTIONS