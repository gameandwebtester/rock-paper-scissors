let choices = ["rock", "paper", "scissors"]
//console.log(choices[1])

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length );
    return (random, choices[random])
}

function score() {
    playerScore +=1
}

//console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("enter either 'rock', 'paper', or 'scissors'").toLowerCase();
    //playerSelection = "rock"
    computerSelection = getComputerChoice();
    if (playerSelection === choices[0].toString() || playerSelection === choices[1].toString() || 
        playerSelection === choices[2].toString()) {
    }
    else {
        console.error("please type a valid object");
        return;
    }
    if(playerSelection === computerSelection){
        console.log("you tied with the machine")
    }
     else if(playerSelection === "rock" && computerSelection === "scissors") {
        score();
        console.log("you win, rock beats scissors")
    }
    else if(playerSelection === "paper" && computerSelection === "rock") {
        score();
        console.log("you win paper beats rock")
    }
    else if(playerSelection === "scissors" && computerSelection === "paper") {
        score();
        console.log("you win scissors beats paper")
    }
    else{
        computerScore += 1;
        console.log("you lose " + computerSelection + " beats " + playerSelection)
    }
    return playerSelection + ' ' + computerSelection
}



function game() {
    for (let i = 0; i < 5; i++) {
        if (i < 5 ) {
            playRound();
            console.log(i);
        }
        else{
            console.log("game is over")
            return;
        }
    }
}

console.log(game());
console.log(playerScore + ' is the score')
