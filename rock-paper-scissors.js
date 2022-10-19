let choices = ["rock", "paper", "scissors"]
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length );
    return (random, choices[random])
}

function score() {
    playerScore +=1
}

function getPlayerChoice(playerSelection) {
    playerSelection = prompt("enter either 'rock', 'paper', or 'scissors'").toLowerCase();
    if (playerSelection === choices[0].toString() || playerSelection === choices[1].toString() || 
        playerSelection === choices[2].toString()) {
            return playerSelection;
    }
    else {
        console.error("please type a valid object");
        return;
    }
}

// plays one round
function playRound(playerSelection, computerSelection) {
    playerSelection = getPlayerChoice(playerSelection);
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
    return playerSelection + ' ' + computerSelection
}

// keeps track of the score and declares a winner once 3/5 score is achieved
function game() {
    while(playerScore < 3 || computerScore < 3){
        playRound()
        if (playerScore == 3 || computerScore == 3) {
            console.log("game is over");
            break;
        }
    }
    if( playerScore > computerScore) {
        console.log("The player wins the game")
    }
    else if(computerScore > playerScore ){
        console.log("the machine wins the game")
    }
    else{
        console.log("the game is a tie")
    }
}

game();
console.log(playerScore + " for the player and " +  computerScore + " for the machine is the final score")