// const prompt = require('prompt-sync')();
// const username = prompt('What is your name? ');
// console.log(`Your name is ${username}`);


    //GROUP PROJECT: NICK MOODY & CAROLINA VILLALOBOS


    const prompt = require('prompt-sync')()
    const quit = `Quit`
    const SoYouWantToQuit = `Freaking loser, didn't want you here anyways.`
    
    // // const ifUnderAge = () => {
    // //   
    // //     if(age >= 18) {
    // //         let Choice1 = `Micky`
    // //         let Choice2 = `Minny`
    // //         const player = prompt(`Welcome to the game! Choose your player, Micky? or Minny? `)
    // //         return player
    // //         }else if (player === `Micky`){
    // //         choice1 = `Yes`
    // //         choice2 = `No`
    // //         decision = prompt(`You chose Micky, you wake up in Micky's house, do you get out of bed? Yes or No`)
    // //         return decision
    // //     }else{
    // //             console.log(`Sorry! Your game ends here, adults only`)
    // //         }
    // // }
    
    
    // const MickysCodingLevel = () => {
        
    // }
    
    
    // const MickysLevelTwo = () => {
    //    let choice1 = `Goofy`
    //    let choice2 = `Coding`
    //     const choiceMicky2 = prompt(`Do you want to practice coding? Or go to Goofy's House? Choose: Goofy, or Coding `)
    //         if (choiceMicky2 === choice1){
    //             console.log(`Coding is for nerds! You're off to Goofy's house!`)
    //             //insertFunctionHere()
    //         } else {
    //             console.log(`What a nerd, go learn some coding!!`)
    //             //insertFunctionHere()
    //         }
    // }
    
    
    // const MickysLevelOne = () => {
    //     choiceYes = `Yes`
    //     choiceNo = `No`
    //     const ChoiceMicky = prompt(`Welcome to Micky's house, do you get out of bed? Yes or No? `) 
    //         if (ChoiceMicky === choiceYes) {
    //             console.log(`You get out of bed! Productivity is for winners! `)
    //             MickysLevelTwo()
    //         }else{
    //             console.log(`You go back to sleep, game over `)
    //     }
    // }
    

//////////////////////////////////////////////////////////////////

//  Chocolate delivery to each house still needs to be finished


    const surpriseDoors = ["Door 1: Mikky answers door you kiss him and deliver the cake -its a party you win!", "Door 2: Mikky answers door, you smash cake on his face and run away - cake delivered YOU WIN!", "Door 3: Mikky asnwers the door pluto runs up and snatches the cake - Cake not delivered you lose"]

        const sDoor1 = surpriseDoors[0] 
        const sDoor2 = surpriseDoors[1]
        const sDoor3 = surpriseDoors[2]
       
    const howToDeliverMikky = () => {
    const sSteps = prompt(`Time to deliver, enter a door number (1-3) and reveal your delivery fate `)
        for (let i=0; i<surpriseDoors.length; i++){
            if(i%2 ===0){
                console.log(Math.floor(Math.random()*3))
            }
        }
        if (sSteps === ("1")){
        console.log(`You chose ${surpriseDoors[0]}, I wonder what path you'll choose next time, Enjoy! `)
        startGame()
            } else if (sSteps === quit) {
                console.log(SoYouWantToQuit)
            }else{
                console.log ("Incorrect input, please try again!") 
                howToDeliverMikky()
            }
        }


    const deliverChocCake = () => {
        const userDeliveryChoiceChoc = prompt('To deliver the cake pick a number between 1-100 ')
            if (userDeliveryChoiceChoc === Array.from({length: (100 - 1) / 10 + 1}, (_, i) => 1 + (i * 10))) {
                console.log(`You chose ${userDeliveryChoiceChoc}`)
                console.log(`Welcome to the game! If you ever want to quit, simply type 'Quit'`)
                howToDeliverMikky()
                }else if (userDeliveryChoiceChoc !== (Array.from({length: (100 - 1) / 10 + 1}, (_, i) => 1 + (i * 10))) ){
                    console.log ( 'Deliver to Goofy')
                    //functiongoofydelivery
                    }else if (userDeliveryChoice === quit){
                        console.log(SoYouWantToQuit)
                    }else
                        console.log("Incorrect input, please try again!")
                       
                    }



    const chocolateCakeRecipe5 = () => {
        const Csteps2 = prompt(`Now you're on to the next step! Choose your next step`)
            if (Csteps2 === "5"){
                console.log(` You chose ${cIngredients[4]}, Thats a smooth and moist chocolate cake you got there! To deliver your cake type DELIVER`)
                const chocDeliverMsg= prompt ('To deliver your cake type DELIVER!')
                if (chocDeliverMsg === "DELIVER"){
                    deliverChocCake()
                }
                    }else if (Csteps2 === ("1") && Csteps2 === ("2") && Csteps2 === ("3") && Csteps2 === ("4")) {
                        console.log(tryAgain)
                    }else if(Csteps2 === quit){
                        console.log(SoYouWantToQuit)
                        }else{
                            console.log("Incorrect input, please try again!")
                            chocolateCakeRecipe2()
                        }
                    }
    
    const chocolateCakeRecipe4 = () => {
        const Csteps4 = prompt(`Now you're on to the next step! Choose your next step`)
            if (Csteps4 === "4"){
                console.log(` You chose ${cIngredients[3]}, that is the correct second step!`)
                chocolateCakeRecipe5()
                    }else if (Csteps4 === ("1") && Csteps4 === ("2") && Csteps4 === ("3") && Csteps4 === ("5")) {
                        console.log(tryAgain)
                    }else if(Csteps4 === quit){
                        console.log(SoYouWantToQuit)
                        }else{
                            console.log("Incorrect input, please try again!")
                            chocolateCakeRecipe2()
                        }
                    }

    const chocolateCakeRecipe3 = () => {
        const Csteps3 = prompt(`Now you're on to the next step! Choose your next step`)
            if (Csteps3 === "3"){
                console.log(` You chose ${cIngredients[2]}, that is the correct second step!`)
                chocolateCakeRecipe4()
                    }else if (Csteps3 === ("1") && Csteps3 === ("2") && Csteps3 === ("4") && Csteps3 === ("5")) {
                        console.log(tryAgain)
                    }else if(Csteps3 === quit){
                        console.log(SoYouWantToQuit)
                        }else{
                            console.log("Incorrect input, please try again!")
                            chocolateCakeRecipe2()
                        }
                    }


    const chocolateCakeRecipe2 = () => {
        const Csteps2 = prompt(`Now you're on to the next step! Choose your next step`)
            if (Csteps2 === "2"){
                console.log(` You chose ${cIngredients[1]}, that is the correct second step!`)
                chocolateCakeRecipe3()
                    }else if (Csteps2 === ("1") && Csteps2 === ("3") && Csteps2 === ("4") && Csteps2 === ("5")) {
                        console.log(tryAgain)
                    }else if(Csteps2 === quit){
                        console.log(SoYouWantToQuit)
                        }else{
                            console.log("Incorrect input, please try again!")
                            chocolateCakeRecipe2()
                        }
                    }



        const cIngredients = ["step1: Flour","step2: Sugar", "step3: Cacao", "step4: Eggs", "step5: Coconut Oil"]
                const Cstep1 = cIngredients[0] 
                const Cstep2 = cIngredients[1]
                const Cstep3 = cIngredients[2]
                const Cstep4 = cIngredients[3]
                const Cstep5 = cIngredients[4]

        const chocolateCakeRecipe = () => {
            let tryAgain = `Wrong step, please try again.`
            const cSteps = prompt(`Chocolate it is! chose a recipe step 1-5 `)
                if (cSteps === ("1")){
                console.log(`You chose ${cIngredients[0]}, that's solid start! `)
                chocolateCakeRecipe2()
                    }else if (cSteps === ("2") && cSteps === ("3") && cSteps === ("4") && cSteps === ("5")){
                        console.log (tryAgain)
                    } else if (cSteps === quit) {
                        console.log(SoYouWantToQuit)
                    }else{
                        console.log ("Incorrect input, please try again!") 
                        chocolateCakeRecipe()
                    }
            }

    
    //////the attempt here was to have the computer randomly select a door to tell the user what thei final delivery action was. right now it prints random parts of the array and only deliver door 1 to goofy. the idea behind the random part was to avoid doing one door at a time but I couldnt figure out how to do that.

    const VsurpriseDoorsGoofy = ["Door 1: Goofy answers door you kiss him and deliver the cake -its a party you win!", "Door 2: Goofy answers door, you smash cake on his face and run away - cake delivered YOU WIN!", "Door 3: Goofy asnwers the door Max runs up and snatches the cake - Cake not delivered you lose"]

    const gVsDoor1 = VsurpriseDoorsGoofy[0] 
    const gVsDoor2 = VsurpriseDoorsGoofy[1]
    const gVsDoor3 = VsurpriseDoorsGoofy[2]
   
    const VhowToDeliverGoofy = () => {
    const GsSteps = prompt(`Time to deliver, enter a door number (1-3) and reveal your delivery fate `)
        for (let i=0; i<VsurpriseDoorsGoofy.length; i++){
            if(i%2 ===0){
                console.log(Math.floor(Math.random()*3))
            }
        }
        if (GsSteps === ("1")){
        console.log(`You chose ${VsurpriseDoorsGoofy[0]}, I wonder what path you'll choose next time, Enjoy! `)
        startGame()
            } else if (GsSteps === quit) {
                console.log(SoYouWantToQuit)
                }else{
                    console.log ("Incorrect input, please try again!") 
                    VhowToDeliverGoofy()
                }
        }



    const VsurpriseDoors = ["Door 1: Mikky answers door you kiss him and deliver the cake -its a party you win!", "Door 2: Mikky answers door, you smash cake on his face and run away - cake delivered YOU WIN!", "Door 3: Mikky asnwers the door pluto runs up and snatches the cake - Cake not delivered you lose"]

        const VsDoor1 = VsurpriseDoors[0] 
        const VsDoor2 = VsurpriseDoors[1]
        const VsDoor3 = VsurpriseDoors[2]
       
    const VhowToDeliverMikky = () => {
    const sSteps = prompt(`Time to deliver, enter a door number (1-3) and reveal your delivery fate `)
        for (let i=0; i<VsurpriseDoors.length; i++){
            if(i%2 ===0){
                console.log(Math.floor(Math.random()*3))
            }
        }
        if (sSteps === ("1")){
        console.log(`You chose ${VsurpriseDoors[0]}, I wonder what path you'll choose next time, Enjoy! `)
        startGame()
            } else if (sSteps === quit) {
                console.log(SoYouWantToQuit)
            }else{
                console.log ("Incorrect input, please try again!") 
                VhowToDeliverMikky()
            }
        }


    //     const delivery = prompt ('To deliver the cake pick a number between 1-100')
    //     console.log (if number between 1-10 or 21-30 or 41-50 or 61-70 or 81-90 deliver to mikky if number 11-20 or 31-40 or 51-60 or 71-80 deliver to goofy (aka "else")
    //     const range = (start, stop, step) => Array.from({length: (stop - start) / step + 1}, (_, i) => start + (i * step));
    //     Array.from({length: (100 - 1) / 10 + 1}, (_, i) => 1 + (i * 10));}

    //     The hope here was that the range array would help divide the numbers so that when the user inputs the number the cake will either be delivered to mikky or goody...rn any number will say deliver to goofy


    const deliverCake = () => {
        const userDeliveryChoice = prompt('To deliver the cake pick a number between 1-100 ')
            if (userDeliveryChoice === Array.from({length: (100 - 1) / 10 + 1}, (_, i) => 1 + (i * 10))) {
                console.log(`You chose ${userDeliveryChoice}`)
                console.log(`Welcome to the game! If you ever want to quit, simply type 'Quit'`)
                howToDeliverMikky()
                }else if (userDeliveryChoice !== (Array.from({length: (100 - 1) / 10 + 1}, (_, i) => 1 + (i * 10))) ){
                    console.log ( 'Deliver to Goofy')
                    VhowToDeliverGoofy()
                    }else if (userDeliveryChoice === quit){
                        console.log(SoYouWantToQuit)
                    }else
                        console.log("Incorrect input, please try again!")
                       
                    }
                

    const vanillaCakeRecipe4 = () => {
        const Vsteps4 = prompt(`Now you're on to the next step! Choose your next step`)
        if (Vsteps4 === "4"){
            console.log(` You chose ${vIngredients[3]}, Voila! you made a Vanilla cake!`)
            const deliverMsg= prompt ('To deliver your cake type DELIVER!')
            if (deliverMsg === "DELIVER"){
            deliverCake()
            }
                }else if (Vsteps4 === ("1") && Vsteps4 === ("3") && Vsteps4 === ("4")) {
                console.log(tryAgain)
                }else if(Vsteps4 === quit){
                console.log(SoYouWantToQuit)
                    }else{
                    console.log("Incorrect input, please try again!")
                    vanillaCakeRecipe4()
                    }
                }




    const vanillaCakeRecipe3 = () => {
        const Vsteps3 = prompt(`Now you're on to the next step! Choose your next step`)
        if (Vsteps3 === "3"){
        console.log(` You chose ${vIngredients[2]}, that is the correct third step!`)
        vanillaCakeRecipe4()
            }else if (Vsteps3 === ("1") && Vsteps3 === ("2") && Vsteps3 === ("4")) {
            console.log(tryAgain)
            }else if(Vsteps3 === quit){
            console.log(SoYouWantToQuit)
                }else{
                console.log("Incorrect input, please try again!")
                vanillaCakeRecipe3()
                }
            }
      
    const vanillaCakeRecipe2 = () => {
        const Vsteps2 = prompt(`Now you're on to the next step! Choose your next step`)
            if (Vsteps2 === "2"){
            console.log(` You chose ${vIngredients[1]}, that is the correct second step!`)
            vanillaCakeRecipe3()
                }else if (Vsteps2 === ("1") && Vsteps2 === ("3") && Vsteps2 === ("4")) {
                console.log(tryAgain)
                }else if(Vsteps2 === quit){
                console.log(SoYouWantToQuit)
                    }else{
                    console.log("Incorrect input, please try again!")
                    vanillaCakeRecipe2()
                    }
                }
    
    const vIngredients = ["step1: Flour","step2: Sugar", "step3: Vanilla", "step4: Eggs"]
        const step1 = vIngredients[0] 
        const step2 = vIngredients[1]
        const step3 = vIngredients[2]
        const step4 = vIngredients[3]
    
        const vanillaCakeRecipe = () => {
            let tryAgain = "Wrong step, please try again."
            const vSteps = prompt("lets make a vanilla cake, choose a recipe step 1-4 ")
                if (vSteps === ("1")){
                    console.log(`You chose ${vIngredients[0]}, that is the correct first step!`)
                    vanillaCakeRecipe2()
                    }else if (vSteps === ("2") && vSteps === ("3") && vSteps === ("4")) {
                                    console.log(tryAgain)
                                }else if(vSteps === quit){
                                console.log(SoYouWantToQuit)
                            }else{
                                console.log("Incorrect input, please try again!")
                                vanillaCakeRecipe()
                            }
                                    
                    }
    
        // vanillaCakeRecipe()


    const MinnysCake = () => {
        vanillaCake = 'Vanilla'
        chocCake = 'Chocolate'
        const choiceFlavor = prompt ('Yummy! to work with the right ingredients choose your flavorite recipe. Vanilla or Chocolate?')
            if (choiceFlavor === vanillaCake) {
                console.log ('Vanilla!')
                vanillaCakeRecipe()
                }else if (choiceFlavor === quit) {
                    console.log(SoYouWantToQuit)
                    } else {(choiceFlavor === chocCake)
                    console.log('OoooeyGoooey, you chose Chocolate!')
                    chocolateCakeRecipe()
            }
    }

    const MinnysLevelOne = () => {
        choiceCake = 'Cake'
        choiceSalad = 'Salad'
        const ChoiceMinny = prompt(`Welcome to Minny's house! You are in Minnys kitchen, do you want to bake a cake? or make a salad? Choose: Salad or Cake `)
            if (ChoiceMinny === choiceCake) {
            console.log(`You want to bake a cake! `)
                MinnysCake()
            } else if (ChoiceMinny === quit) {
            console.log(SoYouWantToQuit)
        } else {
            console.log(`Ew, Salad?! Really?! GAME OVER`)
            //fuction option to restart the game?
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
    
        
    
    
     
    
     
    