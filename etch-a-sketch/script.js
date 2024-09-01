
// Grid constants
const numSquaresPerRow    = 16;
const numSquaresPerColumn = 16;
// const rows = 16;
// const columns = 16;

// Square attributes
const squareWidth  = "20px";
const squareHeight = "20px";
const squareBorder = "2px solid black";
// const squarePadding = "2px";

// Create the grid of squares
let gridContainer = document.querySelector(".grid-container")

for (let i = 1; i <= numSquaresPerRow; i++) {
    // Create a div to hold the entire row 
    let row = document.createElement("div");
    row.className = "row";
    // Populate row with `numSquaresPerColumn` squares 
    for (let i = 1; i <= numSquaresPerColumn; i++) {
        let singleSquare = document.createElement("div");
        singleSquare.className = "square";

        singleSquare.style.width  = squareWidth;
        singleSquare.style.height = squareHeight;
        singleSquare.style.border = squareBorder;
        // singleSquare.style.padding = squarePadding;
        
        // Append to row
        row.appendChild(singleSquare);
    }
    // Append row to grid
    gridContainer.appendChild(row)
}