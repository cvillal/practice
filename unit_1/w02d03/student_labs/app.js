const prompt = require('prompt-sync')();
// const username = prompt('What is your name? ');
// console.log(`Your name is ${username}`);


const myPlayer = {
    name: '', 
    armor: 20, 
    hitPoints: 15,
    inventory: [{
        name: 'Sword',
        attack: Math.floor(Math.random()*6) + 5 
        criticalHit: Math.floor(Math.random()*7) + 2 / 10
    }, {name: 'Spiky Mace',
        attack: Math.floor(Math.random()*2) + 2,
        criticalHit: Math.floor(Math.random()*7) + 2 / 10}]
    {
        name: 'lance',
        chanceOfattack: Math.floor(Math.random()*2) + 2,
        attackDamage: Math.floor(Math.random()*5) + 10
    }],
    money: 0
}


const arrayOfNames = ['Jill', 'Bob', 'Lancelot', 'Thanos', 'Bababoei', 'Yo Momma', 'The Bishop', 'The Mountain', 'The Hound']


const adversary = {
    name: '',
    armor: 10, 
    hitPoints: Math.floor(Math.random()* 4) + 5,
    inventory: [{
        name: 'Sword',
        attack: Math.floor(Math.random()*2) + 2,
        criticalHit: Math.floor(Math.random()*7) + 2 / 10
    }, {
        name: 'Lance',
        chanceOfattack: Math.floor(Math.random()*2) + 2, 
        attackDamage: 5
    }]
}






////////////////////

        // console.log(myPlayer, adversary)


//START GAME FUNCTION = startGame() 

//ENCOUNTER ENEMY FUNCTION 
const encounterEnemy= () =>{
    let encounter1 = prompt(` ${myPlayer.name} you've encountered ${adversary.name} Do you choose to joust? YES or NO`)
        if (encounter1=== "YES"){
            console.log("Prepare to fight!!!")
            joustingFunction()
         } else if (encounter1==="NO"){
            console.log("GoodBye!")
             }else {
                console.log("Try again!")
                encounterEnemy()
        }

}

//DUELING FUNCTION 
const dueling= (weapon) => {
    let duelFight = prompt(` You and ${adversary.name} are locked in battle press any button to continue `)}

    while (myPlayer.hitPoints > 0 && enemy.hitPoints > 0){

        if(myPlayer.inventory[1].criticalHit === enemy.inventory[1].chanceOfattack){
            console.log(`You both hit each other!`)
            myPlayer.armor -= enemy.inventory[1].attackDamage 
            enemy.armor -= myPlayer.inventory[1].attackDamage
            console.log(`Your armor is at ${myPlayer.armor} and ${enemy.name}'s armor is at ${enemy.armor}`)
        }else if(enemy.inventory[1].chanceOfattack > myPlayer.inventory[1].chanceOfattack){
            console.log(`${enemy.name} hit you with their lance, but you got hit!`)
            myPlayer.armor -= enemy.inventory[1].attackDamage
            console.log(`${enemy.name}, your armor is now at ${myPlayer.hitPoints}`)
        }else if(myPlayer.inventory[1].chanceOfattack > enemy.inventory[1].chanceOfattack){
            console.log(`${myPlayer.name}, you landed your blow and ${enemy.name} missed!`)
            adversary.hitPoints -= myPlayer.inventory[1].attackDamage
            console.log(`${enemy.name}'s armor is now at ${enemy.hitPoints}`)
        }
    }if(myPlayer.armor <= 0 || enemy.armor <= 0){
        console.log(`You're both off your horses! Time to duel!`)
        chooseWeapon()
    }
    ////////////
    
    if (myPlayer.hitPoints === 0){
        console.log("You dead!")
    } else if (myPlayer.hitPoints>0){
        console.log("You live to duel again")
    } else if ()
        console.log ("You win! prepare to fight your next adversary")

    }

//CHOOSE WEAPON
const chooseWeapon = () => {
    let encounter1 = prompt(` ${myPlayer.name} you've entered a duel against ${adversary.name} Type your weapon of choise: sword, pole, spiky mace `)
    if (encounter1=== "sword"){
        console.log("You chose a sword! good luck!")
        duelFight(myPlayer.inventory[0])
    } else if (encounter1==="lance"){
        console.log("You chose a pole! good luck!")
        
        duelFight(myPlayer.inventory[1])
    } else if (encounter1==="spiky mace"){
        console.log("You chose spiky mace") 
        duelFight(myPlayer.inventory[2])   
    }else 
        console.log("Try again!")
        chooseWeapon()
}
}
///////////////////////////////////////

//JOUSTING FUNCTION = jousting()
const joustingFunction = (enemy) => {
    console.log(`You and ${enemy.name} stare each other down, then you charge!`)
        while (myPlayer.armor > 0 && enemy.armor >= 0){
            if(myPlayer.inventory[1].chanceOfattack === enemy.inventory[1].chanceOfattack){
                console.log(`You both hit each other!`)
                myPlayer.armor -= enemy.inventory[1].attackDamage 
                enemy.armor -= myPlayer.inventory[1].attackDamage
                console.log(`Your armor is at ${myPlayer.armor} and ${enemy.name}'s armor is at ${enemy.armor}`)
            }else if(enemy.inventory[1].chanceOfattack > myPlayer.inventory[1].chanceOfattack){
                console.log(`${enemy.name} hit you with their lance, but you got hit!`)
                myPlayer.armor -= enemy.inventory[1].attackDamage
                console.log(`${enemy.name}, your armor is now at ${myPlayer.hitPoints}`)
            }else if(myPlayer.inventory[1].chanceOfattack > enemy.inventory[1].chanceOfattack){
                console.log(`${myPlayer.name}, you landed your blow and ${enemy.name} missed!`)
                adversary.hitPoints -= myPlayer.inventory[1].attackDamage
                console.log(`${enemy.name}'s armor is now at ${enemy.hitPoints}`)
            }
        }if(myPlayer.armor <= 0 || enemy.armor <= 0){
            console.log(`You're both off your horses! Time to duel!`)
            chooseWeapon()
        }

}

///////////////////////////////////////////////////////

//CREATE OBJECTS FOR PLAYER = const myPlayer 
    //make an armor value 
    //make an hp value
    //make an attack value
    //inventory with sword and pole

//CREATE OBJECTS FOR ENEMIES = construct enemies? have a set list? 

//CHECK FOR HEALTH FUNCTION = checkStatus()
    myPlayer.name.hitPoints -= adversary.inventory[i].attack;
    if (myPlayer.hitPoints >0 && adversary.hitPoints>0){

    }
                console.log(`${adversary.name} had a successful attack, OUCH! ${myPlayer.name} only has ${myPlayer.hitPoints} left`);
                //PROMPT ATTACK AGAIN OR QUIT? 
            } else {console.log("They missed");}

//CHECK FOR WIN FUNCTION  = checkMoney()

//WAY TO END GAME = get hitPoints to 0, or get 100 coins. 

////////////////////////////////////////
const decision = () => {
    const firstDecision = prompt(`${myPlayer.name}. How quaint. Anyways, the queen is bored and wants some entertainment and you have the privilege of indulging her. Are you ready? Yes or No`)
if (firstDecision === "yes"){
  console.log("You didn't have a choice, but consent is nice.");
    }else if(firstDecision === "no") {
  console.log("Enjoy death.");
}else{
  console.log("Wrong Input");
  decision()
}
}

//////////////////////////////////////////

const startGame = () => {
    const username = prompt("You got a name?")
    myPlayer.name = username
    decision()
}
startGame()