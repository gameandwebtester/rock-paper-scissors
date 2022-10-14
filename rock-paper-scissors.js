let choices = ["rock", "paper", "scissors"]
console.log(choices[1])

function getComputerChoice() {
    const random = Math.floor(Math.random() * choices.length );
    return (random, choices[random])
}

//console.log(getComputerChoice())

function playGame(playerSelection, computerSelection) {
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
     else if(playerSelection === "rock" && computerSelection === "scissors"){
        console.log("you win, rock beats scissors")
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        console.log("you win paper beats rock")
    }
    else if(playerSelection === "scissors" && computerSelection === "paper"){
        console.log("you win scissors beats paper")
    }
    else{
        console.log("you lose " + computerSelection + " beats " + playerSelection)
    }
    return playerSelection + ' ' + computerSelection
}

console.log(playGame());
