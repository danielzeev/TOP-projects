// Check the JS is linked to html
console.log("Hello World")

// Computer selection 
function getComputerChoice() {
    let rps = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);
    return rps[idx]
}
// console.log(getComputerChoice())

// Human selection 
function getHumanChoice() {
    return prompt("Enter rock, paper, or scissors").toLowerCase()
}
// console.log(getHumanChoice())

// Initial scores
let humanScore = 0;
let computerScore = 0;

// Single round of play
function playRound(humanChoice, computerChoice) {
    const vectors = {
        'rock'     : [0,   2],
        'paper'    : [-2, -2],
        'scissors' : [2,  -1],
    };
    
    // Calculate cross product
    let humanVector    = vectors[humanChoice]
    let computerVector = vectors[computerChoice]    
    let crossProduct = (humanVector[0] * computerVector[1]) - (humanVector[1] * computerVector[0])
    
    // Using cross product to check for clockwise
    if (crossProduct < 0) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;
    } else if (crossProduct > 0) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1       
    } else {
        console.log(`Tie! ${computerChoice} is the same as ${humanChoice}`);
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)