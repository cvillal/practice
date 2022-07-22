$(() => {
//create
let $container= $('#container')
let $h1= $('<h1>')
let $name= $('<h2>')
let $house= $('<h3>')
let $pet= $('<h4>')
let $wand= $('<h4>')
let $trunk= $('<ul>')
//change
$h1.text('Welcome to Hogwarts!')
$name.text('Carolina')
$house.text('Hufflepuff')
$pet.addClass('Owl').text('Chicken')
$wand.text('Holly Wand with Unicorn Hair Core')

$trunk.attr('storage','trunk')
$trunk.html('<li>Butter Beer</li>','<li>Invisibility Cloak</li>','<li>Magic Map</li>','<li>Time Turner</li>','<li>Leash</li>',"<li>Bertie Bott's Every Flavor[Jelly]Beans</li>")

console.log($trunk)
// console.log($container)
// console.log($h1)
//append
$container.append($h1)
$container.append($name)
$container.append($house)
$container.append($pet)
$container.append($wand)
$container.append($trunk)


});
