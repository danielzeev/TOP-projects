
// // Grid constants
// const numSquaresPerRow    = 16;
// const numSquaresPerColumn = 16;
// // const rows = 16;
// // const columns = 16;

// // Square attributes
// const squareWidth  = "20px";
// const squareHeight = "20px";
// const squareBorder = "2px solid black";
// // const squarePadding = "2px";

// // Create the grid of squares
// let gridContainer = document.querySelector(".grid-container")

// for (let i = 1; i <= numSquaresPerRow; i++) {
//     // Create a div to hold the entire row 
//     let row = document.createElement("div");
//     row.className = "row";
//     // Populate row with `numSquaresPerColumn` squares 
//     for (let i = 1; i <= numSquaresPerColumn; i++) {
//         let singleSquare = document.createElement("div");
//         singleSquare.className = "square";

//         singleSquare.style.width  = squareWidth;
//         singleSquare.style.height = squareHeight;
//         singleSquare.style.border = squareBorder;
        
//         // Append to row
//         row.appendChild(singleSquare);
//     }
//     // Append row to grid
//     gridContainer.appendChild(row)
// }

// // Hover color change
// gridContainer.addEventListener('mouseover', (event) => {
//     if (event.target.classList.contains('square')) {
//         event.target.style.backgroundColor = "orange";
//     }
// });

// gridContainer.addEventListener('mousedown', (event) => {
//     if (event.target.classList.contains('square')) {
//         event.target.style.backgroundColor = "white";
//     }
// });




// Grid constants
const maxGridPixelWidth  = 300;
const maxGridPixelHeight = 300;

// To be moved to CSS
const squareBorder = "1px solid black";

// Selectors
let gridContainerDiv = document.querySelector(".grid-container")
let rangeInputSlider = document.getElementById("range-input"); // change to gridSizeSlider?
let clearBtn         = document.getElementById("clear-button");
let rainbowBtn       = document.getElementById("rainbow-button");
let colorBtn         = document.getElementById("color-button");
let rainbowMode      = false;
let squareColor      = colorBtn.value;

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Create the grid of squares
function createGrid(gridSize) {
    
    // Clear gird
    removeAllChildNodes(gridContainerDiv);

    // Square attributes - can possibly move to CSS ##################
    const squareWidth  = Math.floor(maxGridPixelWidth / gridSize)  + "px";
    const squareHeight = squareWidth;
    console.log(`Square width: ${squareWidth}`)

    // Grid creation
    for (let i = 1; i <= gridSize; i++) {
        
        // Create a div to hold the entire row 
        let row = document.createElement("div");
        row.className = "row";
        
        // Populate row with `gridSize` squares 
        for (let i = 1; i <= gridSize; i++) {
            let singleSquare = document.createElement("div");
            singleSquare.className = "square";
            
            // These can be changed with the CSS later  ################
            singleSquare.style.width  = squareWidth;
            singleSquare.style.height = squareHeight;
            singleSquare.style.border = squareBorder;
            
            // Append square to row
            row.appendChild(singleSquare);
        }
        // Append row to grid
        gridContainerDiv.appendChild(row)
    }
}

// Create random color
function randomColor() {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    return `rgb(${R}, ${G}, ${B})`;
}

// Grid size change (slider)
rangeInputSlider.addEventListener('change', (event) => {
    gridSize = Number(event.target.value);
    createGrid(gridSize);
});

// Grid drawing 
gridContainerDiv.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('square')) {
        if (rainbowMode) {
            event.target.style.backgroundColor = randomColor();
        } else {
            event.target.style.backgroundColor = squareColor;
        }        
    }
});

// Erase single square 
gridContainerDiv.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('square')) {
        event.target.style.backgroundColor = "white";
    }
});

// Clear canvas 
clearBtn.addEventListener('click', () => {
    createGrid(gridSize);
});

// Rainbow mode - include background button color change
rainbowBtn.addEventListener('click', () => {
    rainbowMode = !rainbowMode;
    rainbowBtn.style.backgroundColor = (rainbowMode) ? "red" : "";
});

// Color selection
colorBtn.addEventListener('input', () => {
    squareColor = colorBtn.value;
})

// Initialize grid
let gridSize = 16; // need better name for this
createGrid(gridSize);
