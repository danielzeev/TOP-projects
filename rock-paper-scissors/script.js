
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
        let humanVector    = vectors[humanChoice];
        let computerVector = vectors[computerChoice];
        let crossProduct   = (humanVector[0] * computerVector[1]) - (humanVector[1] * computerVector[0]);
        
        // Using cross product to determine winner
        if (crossProduct < 0) {
            roundResult = outcomes['win'];
            humanScore += 1;
        } else if (crossProduct > 0) {
            roundResult = outcomes['lose'];
            computerScore += 1;       
        } else {
            roundResult = outcomes['tie'];
        }
    }   
    
    // Initialize Scores
    let humanScore    = 0;
    let computerScore = 0;    
    let roundResult   = '';
    let roundNumber   = 1; 
        
    // Event Listener for button click
    let results = document.querySelector('.results-container');
    let buttons = document.querySelector('.button-container');

    buttons.addEventListener('click', (event) => {
        // Get human and computer selection, play single round
        let humanSelection    = event.target.id;
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        
        // Update round results text and round number
        results.textContent = `Round ${roundNumber}:  ` + roundResult;
        roundNumber++;
        let p         = document.createElement('p');
        p.textContent = `Scores: You: ${humanScore}  -  Comp: ${computerScore}`;
        results.appendChild(p);

        // Game over
        if (humanScore === 5 || computerScore === 5) {
            let winner = (humanScore > computerScore) ? "human" : "computer";
            
            p = document.createElement('p');
            p.textContent = `Game Over! You ${winner === 'human' ? "win" : "lose"}!`;
            results.appendChild(p);
            
            // Reset score
            humanScore    = 0;
            computerScore = 0;
            roundNumber   = 0;
        }
    });

    return [humanScore, computerScore]
}

let scores = playGame()
let humanScore = scores[0]
let computerScore = scores[1]