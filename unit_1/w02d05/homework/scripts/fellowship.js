$(() => {
  // console.log("LINKED");

  // Dramatis Personae
  const hobbits = [
    'Frodo Baggins',
    'Samwise \'Sam\' Gamgee',
    'Meriadoc \'Merry\' Brandybuck',
    'Peregrin \'Pippin\' Took'
  ];

  const buddies = [
    'Gandalf the Grey',
    'Legolas',
    'Gimli',
    'Strider',
    'Boromir'
  ];

  const baddies = [
    "Sauron",
    "Saruman",
    "The Uruk-hai",
    "Orcs"
  ];


  // Our Setting
  const lands = ['The-Shire', 'Rivendell', 'Mordor'];

  // ====================================
  //           Chapters
  // ====================================


  // ============
  // Chapter 1
  // ============

const makeMiddleEarth = () => {
  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!

  // 1. create a section tag with an id of middle-earth
  const $sectionTag = $('<section>').attr('id','middle-earth')

  // 2. append the section to the body of the DOM.
  $('body').append($sectionTag)

  // console.log($body)
  // 3. use a for loop to iterate over the lands array that does the following:

  const middleEarthLands = () => {
  for (let i=0 ; i<lands.length; i++){
    // console.log (lands[i])
    const $landArticle = $('<article>').attr('id',lands[i]);
    const $h1 = $('<h1>').text(lands[i]).appendTo($landArticle);
   $sectionTag.append($landArticle)
  }
  }
  middleEarthLands();
}
  //should look like this
// {/* <section></section>
//   <article id+lands></article>
//     <h1>land</h1> */}
// /* <section></section>
//   <article id+lands></article>
//     <h1>land</h1> */}

  //   3a. creates an article tag (there should be one for each land when the loop is done)

  //   3b. gives each land article an `id` tag of the corresponding land name

  //   3c. includes an h1 with the name of the land inside each land article

  //   3d. appends each land to the middle-earth section


  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 1 complete - Made Middle Earth".

  // ============
  // Chapter 2
  // ============

const makeHobbits = () => {
  // Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)

  // 1. create a 'ul'
  const $shireUl= $ ('<ul>')
  const $h1Shire = $('#The-Shire')
  $h1Shire.append($shireUl)
  // 2. make each hobbit an li element and append it to the 'ul' you just created
  // hint: use the given 'hobbits' array and use a for loop
const listHobbits = () => {
  for (let i=0; i< hobbits.length; i++){
      const $liHobbit = $('<li>').attr('class','hobbit').text(hobbits[i]).appendTo($shireUl).appendTo('#The-Shire'.ul); 
  }
}

listHobbits()

}
  // 3. also, give each hobbit (`li`) a class of "hobbit"

  // 4. append the ul to the shire
  // hint: get 'The-Shire' by using its id


  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 2 complete - Made the Hobbits".

  // ============
  // Chapter 3
  // ============

  const keepItSecretKeepItSafe = () => {
//<li class="hobbit">FRODO<>
//<div id = the-ring></div>


  // 1. create an empty div with an id of 'the-ring'
const $ringDiv = $('<div>').attr('id', 'the-ring')

//.appendTo($landArticle.children[1])

  // 2. add the ring as a child of Frodo
  const $frodo = $('.hobbit')
  // console.log($frodo)
$ringDiv.appendTo($frodo[0])

  }
  
  //Section.article[1])
  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .


  // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly


  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

  // ============
  // Chapter 4
  // ============
const makeBaddies = () => {
  // 1. display an unordered list of baddies in Mordor
const $mordorUl = $('<ul>')
const $h1Mordor = $('#Mordor')
$h1Mordor.append($mordorUl)

const listBaddies = () => {
  for (let i=0; i< baddies.length; i++){
      const $liBaddie = $('<li>').attr('class','baddy').text(baddies[i]).appendTo($mordorUl).appendTo('#Mordor'.ul); 
  }
}

listBaddies()

}
  // 3. remember to append the ul to Mordor

  // 2. give each of the baddies a class of "baddy"


  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 4 complete - Made the Baddies"..

  // ============
  // Chapter 5
  // ============

  const makeBuddies = () => {

  //   // 1. create an aside tag and append it to middle-earth below mordor
const $asideTag = $('<aside>').appendTo('#middle-earth')
  //   // 2. display an unordered list of buddies in the aside
  const $buddiesUl = $('<ul>')
$buddiesUl.appendTo($asideTag)

  const listBuddies = () => {
    for (let i=0; i< buddies.length; i++){
        const $liBuddies = $('<li>').attr('class','buddy').text(buddies[i]).appendTo($buddiesUl); 
    }
  }
  
  listBuddies()
  }
  //   // 3. give each of the buddies a class of "buddy"

  //   // 4. don't forget to append them to the aside


  // // COMMIT YOUR WORK
  // // The commit message should read: "Chapter 5 complete - Made the Buddies".

  // // ============
  // // Chapter 6
  // // ============

  const leaveTheShire = () => {
  //   // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
  //       // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes

$('#The-Shire').children().eq(1).appendTo("#Rivendell")
  }
  // // COMMIT YOUR WORK
  // // The commit message should read: "Chapter 6 complete - Left the Shire"

  // // ============
  // // Chapter 7
  // // ============
const beautifulStranger = () => {

  //   // 1. change the buddy 'Strider' text node to "Aragorn"
  //      // hint: You can get a list of elements by tag name, such as 'aside'
$('.buddy').eq(3).text('Aragon')
  
  // // COMMIT YOUR WORK
  // // The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"
}
  // // ============
  // // Chapter 8
  // // ============

const forgeTheFellowShip = () => {
  //   // 1. create a new div with an id 'the-fellowship'

  const $fellowshipDiv = $('<div>').attr('id', 'the-fellowship')

  // 2. add an h1 with the text 'The Fellowship' to this new div
  const $h1Fellowship = $('<h1>').text('The Fellowship')

$fellowshipDiv.append($h1Fellowship).appendTo('#middle-earth')
  // 3. append the fellowship to middle-earth

  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
$('#Rivendell').children().eq(1).appendTo('#the-fellowship')
$('aside').children().eq(0).appendTo('#the-fellowship')
}
  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 8 complete - The Fellowship is created"

  // ============
  // Chapter 9
  // ============

const theBalrog = () => {
  // 1. change the 'Gandalf' text to 'Gandalf the White'

  $('.buddy').eq(0).text('Gandalf the White').attr('class', 'the-white')
}
  // 2. add a class "the-white" to this element

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border


  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 9 complete - Updated Gandalf"

  // ============
  // Chapter 10
  // ============


  // 1. create a pop-up alert that the horn of gondor has been blown
  //when the webpage is loaded
// html.on(DOMContentLoaded)

//bottom click function was messing me up Isaac pointed out to comment them out to see it pop-up

  const hornOfGondor = () => {
    alert('horn of gondor has been blown');
  

//   hornOfGondor.on('DOMContentLoaded') () => {
//     alert("horn of gondor has been blown");
//   }

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
$('.buddy').eq(4).css({textDecoration: 'line-through'});

  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
$('.baddy').eq(2).remove()  

  }
  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

  // ============
  // Chapter 11
  // ============
const itsDangerousToGoAlone = () => {
  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)

$('.hobbit').eq(0).appendTo('#Mordor')
$('.hobbit').eq(1).appendTo('#Mordor')
  // 2. add a div with id of 'mount-doom' to Mordor
const $divMordor = $('<div>').attr('id','mount-doom').appendTo('#Mordor')
}
  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

  // ============
  // Chapter 12
  // ============

const weWantsIt = () => {
  // 1. Create a div with an id of 'gollum' and add it to Mordor
  const $div2Mordor = $('<div>').attr('id','gollum').appendTo('#Mordor')
  // 2. Move the ring from Frodo and give it to Gollum
$('#Mordor').children().eq(2).children().appendTo('#gollum')
  // 3. Move Gollum into Mount Doom
$('#gollum').appendTo('#mount-doom')

}
  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

  // ============
  // Chapter 13
  // ============

const thereAndBackAgain = () => {
  // 1. remove Gollum and the Ring from the DOM

$('#gollum').remove()

  // 2. remove all the baddies from the DOM
$('.baddy').remove()

  // 3. Move all the hobbits back to the shire
$('.hobbit').appendTo('#The-Shire')

}
  // COMMIT YOUR WORK
  // The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


  // =====================================
  // Don't change anything below this line
  // =====================================
  // =====================================
  // This code is loading all of the event listeners for the buttons in your application.
  // =====================================



  $(() => {

    $('#1').on('click', makeMiddleEarth);
    $('#2').on('click', makeHobbits);
    $('#3').on('click', keepItSecretKeepItSafe);
    $('#4').on('click', makeBaddies);
    $('#5').on('click', makeBuddies);
    $('#6').on('click', leaveTheShire);
    $('#7').on('click', beautifulStranger);
    $('#8').on('click', forgeTheFellowShip);
    $('#9').on('click', theBalrog);
    $('#10').on('click', hornOfGondor);
    $('#11').on('click', itsDangerousToGoAlone);
    $('#12').on('click', weWantsIt);
    $('#13').on('click', thereAndBackAgain);
  });

})