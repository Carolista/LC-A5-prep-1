/**** COLOR PALETTES ****/

/* 
    Let's keep this project simple! This web page should have the functionality to display a random palette with five color blocks side-by-side and their hex codes displayed beneath.

    BONUS MISSION: Make the header background, intro text, and button hover background change to palette colors each time the scheme changes as well.
*/

// Since we haven't learned how to fetch JSON yet, we'll hardcode some objects here with the color palettes we want to include.
let palettes = [
    { "name": "Fresh Melon", "colors": ["#386641","#6a994e","#a7c957","#f2e8cf","#bc4749"]},
    { "name": "Tahiti", "colors": ["#ff9f1c","#ffbf69","#ffffff","#cbf3f0","#2ec4b6"]},
    { "name": "Lush Lipstick", "colors": ["#4f000b","#720026","#ce4257","#ff7f51","#ff9b54"]},
    { "name": "Lake House", "colors": ["#086788","#07a0c3","#f0c808","#fff1d0","#dd1c1a"]},
    { "name": "Club Neon", "colors": ["#75dddd","#84c7d0","#9297c4","#9368b7","#aa3e98"]},
    { "name": "Disco", "colors": ["#5f0f40","#9a031e","#fb8b24","#e36414","#0f4c5c"]},
    { "name": "Daytona", "colors": ["#b09e99","#fee9e1","#fad4c0","#c0fdfb","#64b6ac"]},
    { "name": "Tahoe", "colors": ["#c17c74","#7a6c5d","#bcac9b","#ddc9b4","#2a3d45"]},
    { "name": "Poolside", "colors": ["#5bc0eb","#fde74c","#9bc53d","#e55934","#fa7921"]},
    { "name": "Wisteria", "colors": ["#360568","#5b2a86","#7785ac","#9ac6c5","#4eb870"]},
    { "name": "Sitka", "colors": ["#db504a","#ff6f59","#b2b09b","#254441","#43aa8b"]},
    { "name": "Mocha Latte", "colors": ["#5e3023","#f3e9dc","#895737","#c08552","#dab49d"]},
    { "name": "Mount Rainier", "colors": ["#131515","#2b2c28","#fffafb","#7de2d1","#339989"]},
    { "name": "Flagstaff", "colors": ["#2a9d8f","#264653","#e9c46a","#f4a261","#e76f51"]}
];
// HT: Hex values for palettes copied, rather efficiently, from https://coolors.co/palettes/trending

// Variable to store whichever palette is currently in use

let currentPalette = { "name": "", "colors": [] };

// Event listener for page load
window.addEventListener("load", function(){
    console.log(`page loaded`);
    console.log (`data loaded`)

    init(); //since we're not working from a JSON file, this is set up to run the init statement after the fact.
});

// DOM code - handles all functionality once it's called in the window load listener

function init(){

    /*** Reference objects needed for dynamic functionality ***/
    //use id's from index.html to reference the objects needed.
    let header = document.getElementById("header");
    let button = document.getElementById("get-colors");
    let paletteName = document.getElementById("palette-name");
    let colorBlocks = []; // stores all 5 div elements in the color blocks
    let colorCodes = []; //stores all the p elements for the color codes
    for (let i = 0; i < colorBlocks.length; i++){
        colorBlocks.push(document.getElementById("color" + i)); //the ("color" + i) is concatting "colori" for the HTML color ids in lines 33-37 !!Always refer to the id= "whatevertheidis"!!
        colorCodes.push(document.getElementById("code" + i)); //the ("code" + i) is concat "codei" for HTML in lines 40-44
    }
     


    /*** Event listeners & functions ***/

    function changePalette(){
        let randomIndex;

        do{
            randomIndex = Math.floor(Math.random() * palettes.length);
            currentPalette = palettes[randomIndex];
        }while(paletteName.innerHTML === currentPalette.name)
        console.log(`current palette is ${currentPalette.name}.`)
        paletteName.innerHTML = currentPalette.name // index.html file has palette-name on line 31. We're changing the innerHTML which is what falls betw opening and closing tags associated with said id
        for (let i = 0; i < 5; i++){
            colorBlocks[i].style.backgroundColor =  currentPalette.colors[i]; //css bg color is background-color, for the JS version, most style props will be converted to camelCase
        }


    }
    button.addEventListener("click", changePalette);
}

    /* For this first one we establish a named function and then call it from the event listener below. */

    // Select "random" new palette and change name and colors

        // Pop up alert only if it's the first time clicking the button
       

        // Pick new palette and validate it's not the same as the last one
        

        // Now modify everything on the page
        

    // Call changePalette() function from event listener for button click


    /* These two just have anonymous functions built in. */

    // Change button color on mouseover

    // Change button color back on mouseout

