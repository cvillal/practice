$(() => {
//create
  let $div = $('<div>')
  let $h3 = $('<h3>')
  
  let $div2= $('<div>')
  let $h32= $('<h3>')

  let $image= $('<img>')
  
//edit/change


  $div.addClass('meat')
  $h3.text('Ostrich')

  $div2.addClass('dairy')
  $h32.text('IceCream')

  $image.attr('src', 'https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D')
  
//append


  $div.append($h3)
  $('body').append($div)


  $div2.append($h32)
$('body').prepend($div2)

  $('body').prepend($image)

let $divs = $('div')
// console.log($divs.eq(2).children())
// $divs.eq(2).children().text('Kohlrabi')

// let $meatDivs = $('.meat')
// $meatDivs.remove()

const $newH3 = $('<h3>').text('Wine')
  const $secondDiv = $divs.eq(1)
  $secondDiv.empty()
  $secondDiv.append($newH3)



})