// Check the JS is linked to html
// console.log("Hello World")

// Computer selection 
function getComputerChoice() {
    let rps = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);
    return rps[idx]
}

// Human selection 
function getHumanChoice() {
    return prompt("Enter rock, paper, or scissors").toLowerCase()
}


function playGame() {

    // Single round of play
    function playRound(humanChoice, computerChoice) {
        const outcomes = {
            'win'  : `You win! ${humanChoice} beats ${computerChoice}`,
            'lose' : `You lose! ${computerChoice} beats ${humanChoice}`,
            'tie'  : `Tie! ${computerChoice} is the same as ${humanChoice}`,
        };  
        const vectors = {
            'rock'     : [0,   2],
            'paper'    : [-2, -2],
            'scissors' : [2,  -1],
        };
        
        // Calculate cross product
        let humanVector    = vectors[humanChoice]
        let computerVector = vectors[computerChoice]    
        let crossProduct = (humanVector[0] * computerVector[1]) - (humanVector[1] * computerVector[0])
        
        // Using cross product to determine winner
        if (crossProduct < 0) {
            // console.log(outcomes['win']);
            roundResult = outcomes['win'];
            humanScore += 1;
        } else if (crossProduct > 0) {
            // console.log(outcomes['lose']);
            roundResult = outcomes['lose'];
            computerScore += 1;       
        } else {
            // console.log(outcomes['tie']);
            roundResult = outcomes['tie'];
        }
    }   
    
    // Initialize Scores
    let humanScore    = 0;
    let computerScore = 0;    
    let roundResult   = '';
    
    let resultsDiv = document.querySelector('.results-container');
    let buttons    = document.querySelector('.button-container')
    
    // Event Listener for button click
    buttons.addEventListener('click', (event) => {
        let humanSelection    = event.target.id;
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

        resultsDiv.textContent = `${roundResult}   |   Scores: You: ${humanScore}  -  Comp: ${computerScore}`; 

        if (humanScore === 5 || computerScore === 5) {
            console.log("Game Over")
            let winner = (humanScore > computerScore) ? "Human" : "Computer";
            console.log(`Winner: ${winner}`)
        }
    });

    return [humanScore, computerScore]
}

let scores = playGame()
let humanScore = scores[0]
let computerScore = scores[1]

// console.log("This is a log")
