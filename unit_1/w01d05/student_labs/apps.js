// const prompt = require('prompt-sync')();
// const username = prompt('What is your name? ');
// console.log(`Your name is ${username}`);


    //GROUP PROJECT: NICK MOODY & CAROLINA VILLALOBOS


    const prompt = require('prompt-sync')()
    const quit = `Quit`
    const SoYouWantToQuit = `Freaking loser, didn't want you here anyways.`
    
    // const ifUnderAge = () => {
    //   
    //     if(age >= 18) {
    //         let Choice1 = `Micky`
    //         let Choice2 = `Minny`
    //         const player = prompt(`Welcome to the game! Choose your player, Micky? or Minny? `)
    //         return player
    //         }else if (player === `Micky`){
    //         choice1 = `Yes`
    //         choice2 = `No`
    //         decision = prompt(`You chose Micky, you wake up in Micky's house, do you get out of bed? Yes or No`)
    //         return decision
    //     }else{
    //             console.log(`Sorry! Your game ends here, adults only`)
    //         }
    // }
    
    
    const MickysCodingLevel = () => {
        
    }
    
    
    const MickysLevelTwo = () => {
       let choice1 = `Goofy`
       let choice2 = `Coding`
        const choiceMicky2 = prompt(`Do you want to practice coding? Or go to Goofy's House? Choose: Goofy, or Coding `)
            if (choiceMicky2 === choice1){
                console.log(`Coding is for nerds! You're off to Goofy's house!`)
                //insertFunctionHere()
            } else {
                console.log(`What a nerd, go learn some coding!!`)
                //insertFunctionHere()
            }
    }
    
    
    const MickysLevelOne = () => {
        choiceYes = `Yes`
        choiceNo = `No`
        const ChoiceMicky = prompt(`Welcome to Micky's house, do you get out of bed? Yes or No? `) 
            if (ChoiceMicky === choiceYes) {
                console.log(`You get out of bed! Productivity is for winners! `)
                MickysLevelTwo()
            }else{
                console.log(`You go back to sleep, game over `)
        }
    }
    
    const ChocolateCakeRecipe = () => {
        chocolateIngredients = ["flour", "sugar", "cacao", "eggs", "coconut oil"]
        let step1 = "1"
        let step2 = "2"
        let step3 = "3"
        let step4 = "4"


        const ChoiceMinny = prompt(` `)
            if (vanillaIngredients[0] === choiceCake) {
            console.log(`You want to bake a cake! `)
            // InsertFunctionHere()
            } else if (ChoiceMinny === quit) {
            console.log(SoYouWantToQuit)
        } else {
            console.log(``)
    //ingredients function

    const vanillaCakeRecipe = () => {
        vanillaIngredients = ["flour", "sugar", "vanilla", "eggs"]
        let step1 = "1"
        let step2 = "2"
        let step3 = "3"
        let step4 = "4"


        const ChoiceMinny = prompt(`lets make a vanilla cake, choose a recipe step 1-4`)
            if (vanillaIngredients[0] === choiceCake) {
            console.log(`You want to bake a cake! `)
            // InsertFunctionHere()
            } else if (ChoiceMinny === quit) {
            console.log(SoYouWantToQuit)
        } else {
            console.log(``)


    const MinnysCake = () => {
        vanillaCake = 'Vanilla'
        chocCake = 'Chocolate'
        const choiceFlavor = prompt ('Yummy! to choose the right ingredients choose your flavorite recipe. Vanilla or Chocolate?')
            if (choiceFlavor === vanillaCake) {
                console.log ('Vanilla!')
                vanillaCake()
            }else if (ChoiceMinny === quit) {
                    console.log(SoYouWantToQuit)
            } else if (choiceFlavor === chocCake) {
                console.log('OoooeyGoooey, you chose Chocolate!')
                ChocolateCakeRecipe()
            }else{
                console.log('')
            }
    }

    const MinnysLevelOne = () => {
        choiceCake = 'Cake'
        choiceSalad = 'Salad'
        const ChoiceMinny = prompt(`Welcome to Minny's house! You are in Minnys kitchen, do you want to bake a cake? or make a salad? Choose: Salad, or Cake `)
            if (ChoiceMinny === choiceCake) {
            console.log(`You want to bake a cake! `)
                MinnysCake()
            } else if (ChoiceMinny === quit) {
            console.log(SoYouWantToQuit)
        } else {
            console.log(`Ew, Salad?! Really?! GAME OVER`)
        }
    }
    
    const playerChoice = () => {
        let player1 = `Micky`
        let player2 = `Minny`
        const player = prompt(`Choose your player: Micky or Minny `)
            if(player === player1 ) {
                console.log(`You chose ${player1}`)
                MickysLevelOne()
            } else if (player === quit){
                console.log(SoYouWantToQuit)
            } else if (player === player2) {
            console.log(`You chose ${player2}`)
            MinnysLevelOne()
        }
    }
    
    
    
    
    const startGame = () => {
        const age = prompt('Guess you want to play our game, weirdo. If you ever want to quit type Quit. Anyways, what is your age? ')
        
        if (age >= 18) {
            console.log(`You are ${age}`)
            console.log(`Welcome to the game! If you ever want to quit, simply type 'Quit'`)
            playerChoice()
        }else if (age === quit){
            console.log(SoYouWantToQuit)
        }else {
            console.log(`You are ${age}`)
            console.log(`Adults only!!!!`)
        }
    }
    
    startGame()
    
    // const playerChoice = () => {
    //     let player1 = `Micky`
    //     let player2 = `Minny`
    //     const player = prompt(`Choose your player: Micky or Minny `)
    //         if(player ) {
    //             console.log(`You chose ${player1}`)
    //         } else {
    //             console.log(`You chose ${player2}`)
    //     }
    // }
    
    
    // playerChoice()
    
    
    
    // MickysLevelOne()
    
        
    
    
     
    
     
    