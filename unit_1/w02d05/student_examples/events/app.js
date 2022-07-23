$(()=>{
    const $btn = $('#btn');
    // console.log($btn);
      
// $btn.on('click', ()=>{
//     // console.log('button was clicked!');

//     $('body').append("It seems as if it has been clicked!");
    
    const addText = () => {
        $('body').append("It seems as if it has been clicked!")
    }

    $btn.on('click', addText)

})

