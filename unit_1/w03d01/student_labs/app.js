
 const tools = [{
    name: `Rusty scissors`, 
    price: 20,
    click: 5
 }, {
    name: `Old Push Mower`,
    price: 100, 
    click: 50
 }, {
    name: `High-tech Lawnmower`,
    price: 500, 
    click: 100,
 }, {
    name: `Team of Starving Students`,
    price: 1000, 
    click: 250,
 }, {
    name: `teeth`, 
    price: 0,
    click: 1,
 }]
 
 const player = {
    money: 0,
    tool: tools[4]
}

$(() => {
  
    // const makeMoney = () => { 
    // const $cutMessage = $('<h4>').text(`You made ${player.money} dollar!`).appendTo('button')
    // player.money += 1
    // const $moneyDiv = $('<div>').text(player.money).appendTo('body')
    // const $moneyDiv = $('<div>').attr()
    
    // $('body').prepend('<div>').addClass('moneyDiv').text(`${player.money}`)
    const bank = () => {
        
        player.money += player.tool.click 
        $('#bankAmount').text(`$ ${player.money}`)
        
        
    }
    const win = () => {
        if(player.money > 10000)
        alert(`You win!`)
    }

    $('#cut').on('click', bank).on('click', win)
    
       
    // const $storeTools = $('<div>').attr('id', 'tools').appendTo('body').text('blah')
    const $storeTools = $('<div>').attr('class', 'one').text('STORE').appendTo('body')
    const $toolUL = $('<ul>').appendTo($storeTools).addClass('variousTools')
    // const toolButton = $('<button>')

    const listTools = () => {
        for (let i=0; i< tools.length - 1; i++){
            const $liTools = $('<button>').attr('class','tools').text(`${tools[i].name}: $${tools[i].price}`).appendTo($toolUL); 
        }
      }
    listTools()

    const buyTool1 = () => {
        if(player.money < tools[0].price){
            alert('You need more money!')
        }else{
            player.money -= tools[0].price
            player.tool = tools[0]
        }
        
    }
    $('.tools').eq( 0 ).on('click', buyTool1)
    const buyTool2 = () => {
        if(player.money < tools[1].price){
            alert('You need more money!')
        }else{
            player.money -= tools[1].price
            player.tool = tools[1]
        }
    }
    $('.tools').eq( 1 ).on('click', buyTool2)
    const buyTool3 = () => {
        if(player.money < tools[2].price){
            alert('You need more money!')
        }else{
            player.money -= tools[2].price
            player.tool = tools[2]
        }
    }
    $('.tools').eq( 2 ).on('click', buyTool3)
    const buyTool4 = () => {
        if(player.money < tools[3].price){
            alert('You need more money!')
        }else{
            player.money -= tools[3].price
            player.tool = tools[3]
        }
    }

    $('.tools').eq( 3 ).on('click', buyTool4)

  

      if(player.money >= 10000){
        alert('You win! Enjoy retirement!')
    } const howToWin = $('<h2>').text('Get $10,000 to win!').appendTo('body').addClass('howToWin')

const imgDiv = $('<div>').attr('id','mowImage').appendTo('body')
const $image = $('<img>').attr('src', 'https://64.media.tumblr.com/36ba3313221690dbd5665db7f29e364f/tumblr_nu9ptbvwZw1sqf5tdo1_400.gifv').appendTo(imgDiv).animate({right: 900}, 20000)

} )



//create something that stores a bank account. 

//MONEY DIV - DISPLAYS CURRENT MONEYS

//I want the money to be changing every time I click, and also not add on any other numbers

//I want something like if I click, then it will remove the previous display, and instead display the new value


//CAROLINAS TOOL OPTION FUNCTION

// if player.tool = 'insert tool here' then player.money += tool.clickval


//SHOP TOOL FUNCTION 

//we need to make a ul inside of a div in a different part of the web page

//inside the ul we need all the buttons for the different tools

//if we click the button, it needs to change our player.tool to the option we chose
    //also, the option needs to be faded our or removed. 


    //UPDATED OBJECTIVES 

    //make it so that we can only buy something if we have enough money, and that if we click that button it minus's our money based on the price. 