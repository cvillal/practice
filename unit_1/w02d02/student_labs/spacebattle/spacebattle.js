//Code allowing prompt funvtion to be used:
const prompt = require('prompt-sync')();

//Creating player ship object/properties:
const playerShip = {
    name: "USS Schwarzenegger",
    hull: 20,
    firepower: 5,
    accuracy: .7,
    attackEnemy: (enemy) => {
        if (Math.random() < playerShip.accuracy) { 
            enemy.hull -= playerShip.firepower;
            console.log(`The ${playerShip.name} successfully hit the enemy ship. The enemy ship only has ${enemy.hull} left`);  
        } else {console.log("you missed");}
         
} 

}

// Next six (6) alien (enemy) ships objects/properites:

const alienShip = {
        name: ["The Accuser", "The Eviscerator", "The Malice", "The Dreadnught", "The Tyrant", "The Predator"],
        hull: Math.round( 3 + Math.random() * 3 ),
        firepower: Math.round(2 + Math.random() * 2),
        accuracy: (.6 + Math.random() * .2).toFixed(1),
        alienAttackEnemy: () => {
            if (Math.random() < alienShip.accuracy) { 
                playerShip.hull -= alienShip.firepower;
                console.log(`The enemy successfully hit our ship. We only have ${playerShip.hull} left`);  
            } else {console.log("They missed");}
    }
}



// variables for prompt reponses
let attack = "Attack";
let retreat = "Retreat";
//function to trigger choice prompt
const battleEncounter = (enemy) => {
//introducing attacking ship and asking for prompt response
    let alienShipApproach = prompt(`${enemy.name[Math.floor(Math.random() * 6)]} is flying towards the ${playerShip.name}! Captain, what are your orders? Attack or retreat? `)

// chooses to attack --> if attack, triggers loop
    if (alienShipApproach === attack.toLowerCase()) {
       
        //loop when hitpoints are above zero
        for (let i = 0; alienShip.hull > 0 && playerShip.hull > 0 ; i++) {
       //attack function used from object
            playerShip.attackEnemy(enemy)
       //if the enemy is not killed in one shot, they get the oppurtunity to attack
            if(enemy.hull >=0) {
          alienShip.alienAttackEnemy()
          //otherwise logs they're dead
        } else {console.log("they ded");}
    }
//  chooses to retreat
    } return (console.log("Never give up never surrender"))}
//looping the entire thing 6 times; we were looking to make the 6 into something more precise using methods, but decided to KISS
for (let i = 0; i <= alienShip.name.length; i++) {
    battleEncounter(alienShip)
}
// still requires you to retreat 6 times to exhaust the loop....
