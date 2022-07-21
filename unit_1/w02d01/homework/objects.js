// const setUp ={
//     table: "round",
//     screens: 2,
//     laptop: "Macbook Pro",
//     wirelessAccessories: "mouse",
//     notebook: "spiral grid",
//     pencilCase: "yellow cylinder",
//     pencil: "mechanical .7",
//     pens: ["green", "yellow", "red", "dark blue"]
// }

// setUp.clutter=["hair-clip","chapstick","sunscreen","dog picture","sticker","lavender oil","gems","waterbottle"];

// console.log (setUp)

//4.
//console.log(setUp.clutter)

// 5.
// setUp.computer={screenSize:"OS",};

// //6.
// // console.log(setUp.computer)

//7.
// setUp.computer.files= ["homework","labs","notes", "trash"]

// console.log(setUp)

// //8.
// console.log(setUp.computer.files)

// //9.
// const books = [{title: 'Pragmatic Programmer', author: 'David Thomas + Andrew Hunt'}, {title: 'Clean Code', author: 'Robert Martin'}, {title: 'You Don\'t Know JS', author: 'Kyle Simpson'}]

// for (let i=0; i<books.length; i++){
//     console.log(`${books[i].title} by ${books[i].author}`)
// }

// books.forEach((item, i) => {
//     console.log(`${books[i].title} by ${books[i].author}`)
// })

//PART2:Hero vs Goblin


const hero ={
    name: "Hercules",
    hitPoints: 50,
    attack: 10
}

const goblin ={
    name: "Monster",
    hitPoints: 20,
    attack: 5
}

console.log(hero.hitPoints -= goblin.attack) 

console.log(goblin.hitPoints-=hero.attack)

const attackEnemy = (enemy) => {
    while (hero.hitpoints>0 && goblin.hitpoints>0){
    
    }
}
console.log()

// //NEED HELP UNDERSTANDING HOW TO MAKE A BATTLE GAME WORK. what does it mean the methods?  Not sure what the loop should look like for this >>HELP!!!<<
