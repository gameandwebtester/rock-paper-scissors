let choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length );
    return (random, choices[random])
}

console.log(getComputerChoice())

function playGame(playerSelection, computerSelection) {
    playerSelection = prompt("enter either 'rock', 'paper', or 'scissors'");
    return playerSelection
}

console.log(playGame());
