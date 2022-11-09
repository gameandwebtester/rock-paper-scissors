let playerSelection;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('click', getPlayerChoice);
paper.addEventListener('click', getPlayerChoicePaper);
scissors.addEventListener('click', getPlayerChoiceScissors);


let choices = ['rock', 'paper', 'scissors']
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length );
    return (random, choices[random])
}

function score() {
    playerScore +=1
}

function getPlayerChoicePaper(){
    playerSelection = 'paper';
    return playerSelection;
}

function getPlayerChoice(){
    playerSelection = 'rock';
    return playerSelection;
}

function getPlayerChoiceScissors() {
    playerSelection = 'scissors';
    return playerSelection;
}

function timeFunction() {
    setTimeout(function(){ playRound(); }, 100)
}

function playRound(computerSelection) {
    computerSelection = getComputerChoice();

    switch (true) {
        case playerSelection === computerSelection: 
            console.log("you tied with the machine");
            break;
        case playerSelection === "rock" && computerSelection == "scissors":
        case playerSelection === "paper" && computerSelection === "rock":
        case playerSelection === "scissors" && computerSelection === "paper":
            score();
            console.log("you win " + playerSelection + " beats " + computerSelection);
            break;
        case playerSelection === undefined:
            playerScore += 0;
            computerScore += 0;
            break;
        default:
        computerScore += 1;
        console.log("you lose " + computerSelection + " beats " + playerSelection) 
        break;
    }
    console.log(playerScore + ' ' + computerScore);

    if(playerScore >= 5 || computerScore >= 5){
        console.log('game over')
        rock.remove();
        paper.remove();
        scissors.remove();
        console.log(playerScore + " for the player and " +  computerScore + " for the machine is the final score")
    }

    return playerSelection + ' ' + computerSelection
}