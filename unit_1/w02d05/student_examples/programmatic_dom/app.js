// const addH2 = () => {
// 	const $h2 = $('<h2>').text("Just getting started");
// 	$('body').append($h2);
// }

// const changeH2 = () => {
// 	$('h2').text("Getting warmed up");
// }

// $(() => {
// 	addH2();
// 	changeH2();
// });


// for (let i=1; i<= 1000; i++){
//     console.log(i);
// }
// $(()=>{
//     for (let i=1; i<= 1000; i++){
//         console.log(i);
//         catarray()


//         // const $square = $('<div>').addClass('square');
//         // $('body').append($square);
//     }

// });
// $(()=>{
// const generateSquares = () => {
//     for (let i=1; i<=1000; i++) {
//         console.log(i);
//             const $square =$('<div>').addClass('square');
//             $('body').append($square);
//     }
// }
//     generateSquares();

// })
// $(()=>{
//     generateSquares();
//     generateSquares();
//     generateSquares();
//     generateSquares();
// });

// $(()=>{
//     const generateSquares = (numberOfSquares) => { //numberOfSquares is what will get inputted in the equation? basically the argument?
//         for (let i=1; i<= numberOfSquares; i++) {
//             console.log(i);
//                 const $square = $('<div>').addClass('square');
//                 $('body').append($square);
//         }
//     }

//         generateSquares(5) //1000 is the argument. if done this way argument can be changed any time as desired without going back to the loop and changing it there(?)
//         generateSquares(3)
// })
// $(()=>{
//     const generateSquares = (numberofSuares) => {
//         for (let i=1; i <= numberofSuares; i++){
//             console.log(i);
//             const $square = $('<div>').addClass('square');
//             $square.css('background-color', 'rgb(23, 240, 83)');
//             $('body').append($square);

//         }
//     }
//     generateSquares(1000);

const randColorRGB = () => {
    const red = Math.floor( Math.random() * 256);
    const green = Math.floor( Math.random() * 256);
    const blue = Math.floor( Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`

}

    //  console.log (randColorRGB());

// })

$(()=> {
    const generateSquares = () => {
        for (let i=1; i <= 1000; i++){
            console.log(i);
            const $square = $('<div>').addClass('square');

            const color = randColorRGB(); //declaring color = the function we did before to randomize the colors)
            $square.css('background-color', color);

            $square.text(i); //adding/appending text to square
            $square.attr('id', 'square' + i);
            $('body').append($square);

        }
    }

    

    generateSquares(1000);
})



//need clarification on ; separating things

