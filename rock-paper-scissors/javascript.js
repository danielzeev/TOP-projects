// Check the JS is linked to html
console.log("Hello World")

function getComputerChoice() {
    let rps = ["rock", "paper", "scissors"];
    let idx = Math.floor(Math.random() * 3);
    return rps[idx]
}

console.log(getComputerChoice())