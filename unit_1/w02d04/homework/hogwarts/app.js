$(() => {
//CREATE

//YEAR1
let $container= $('#container')
let $h1= $('<h1>')

//YEAR2
let $name= $('<h2>')
let $house= $('<h3>')
let $pet= $('<h4>')
let $wand= $('<h4>')
//YEAR3
let $trunk= $('<ul>').attr('storage','trunk')
let $li = $('<li>').text('Butter Beer').appendTo($trunk)
let $li2 = $('<li>').text('invisibility cloack').attr('class','secret').appendTo($trunk)
let $li3 = $('<li>').text('Magic Map').addClass('secret').appendTo($trunk)
let $li4 = $('<li>').text('Time Turner').addClass('secret').appendTo($trunk)
let $li5 = $('<li>').text('Leash').addClass('Owl').appendTo($trunk)
let $li6 = $('<li>').text('Bertie Botts Every Flavor [Jelly] Beans').appendTo($trunk)
//YEAR4
let $yearfour= $('<h5>').text('Spring 2017')
let $classes= $('<table>')
let $thead= $('<thead>')
$thead.appendTo($classes)
let $header=$('<th>').text('Day')
let $header2=$('<th>').text('Class')
$header.appendTo($thead)
$header2.appendTo($thead)
//monday
let $trow= $('<tr>')
$trow.appendTo($thead)
let $tdataOne =$('<td>').text('Monday')
let $tdataTwo =$('<td>').text('Herbology, Divination, History of Magic, Charms, Potions, Transfiguration')
$tdataOne.appendTo($trow)
$tdataTwo.appendTo($trow)
//tuesday
let $trow1= $('<tr>')
$trow1.appendTo($thead)
let $tdataTues =$('<td>').text('Tuesday')
let $tdataTuesTwo =$('<td>').text('Herbology, Divination, History of Magic, Charms, Potions, Transfiguration')
$tdataTues.appendTo($trow1)
$tdataTuesTwo.appendTo($trow1)
//wednesday
let $trow2= $('<tr>')
$trow2.appendTo($thead)
let $tdataWeds =$('<td>').text('Wednesday')
let $tdataWedsTwo =$('<td>').text('Herbology, Divination, History of Magic, Charms, Potions, Transfiguration')
$tdataWeds.appendTo($trow2)
$tdataWedsTwo.appendTo($trow2)
//thursday
let $trow3= $('<tr>')
$trow3.appendTo($thead)
let $tdataTh =$('<td>').text('Thursday')
let $tdataThTwo =$('<td>').text('Herbology, Divination, History of Magic, Charms, Potions, Transfiguration')
$tdataTh.appendTo($trow3)
$tdataThTwo.appendTo($trow3)
//friday
let $trow4= $('<tr>')
$trow4.appendTo($thead)
let $tdataFr =$('<td>').text('Friday')
let $tdataFrTwo =$('<td>').text('Herbology, Divination, History of Magic, Charms, Potions, Transfiguration')
$tdataFr.appendTo($trow4)
$tdataFrTwo.appendTo($trow4)
//YEAR5





//CHANGE

//YEAR1
$h1.text('Welcome to Hogwarts!')
//YEAR2
$name.text('Carolina')
$house.text('Hufflepuff')
$pet.addClass('Owl').text('Chicken')
$wand.text('Holly Wand with Unicorn Hair Core')
//YEAR3
// $trunk.html('<li>Butter Beer</li>','<li>Invisibility Cloak</li>','<li>Magic Map</li>','<li>Time Turner</li>','<li>Leash</li>',"<li>Bertie Bott's Every Flavor[Jelly]Beans</li>")
//YEAR4
// $headertext('Day')
// $header.eq(1).children(0).text('Classes')
// $classes




// console.log($trunk)
// console.log($container)
// console.log($h1)

//APPEND
//YEAR1
$container.append($h1)
//YEAR2
$container.append($name)
$container.append($house)
$container.append($pet)
$container.append($wand)
//YEAR3
$container.append($trunk)
// $trunk.append($li1)
//YEAR4
$container.append($yearfour)
$yearfour.append($classes)
$classes.append($thead)
// $thead.append($header).append($header)

//YEAR5
$wand.remove()
$("li:first-child").remove()
$('h4:last-of-type').append($wand)
$wand.text('New Unicorn Hair Wand')
$wand.css('color','indigo')
$pet.remove()
$pet.appendTo($yearfour)

$pet.remove()
$pet.appendTo($house)

//YEAR6
// console.log($thead)
// $trunk.text('belongings')
$('.secret').hide('slow').delay('2000')//unsure if that right looks the same to me
$('.secret').show('slow')
$li5.addClass('cabbage')
$li5.removeClass('cabbage')
// $trunk.hide('slow').delay('2000')//unsure if that right looks the same to me
// $trunk.show('slow')

//YEAR7
$yearfour.text('Fall 2018')

let $butterBeer = $('<li>').text('ButterBeer!').prependTo($trunk)
$trunk.removeAttr('storage', 'trunk')
$trunk.attr('storage','chest')




});
