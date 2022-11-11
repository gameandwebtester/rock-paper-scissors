let playerSelection;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

const playButtons = document.getElementById('play-buttons');

const container = document.querySelector('#scorekeeper');
const para = document.querySelector('.score');
const info = document.querySelector('.info')
const final = document.querySelector('.finalscore');

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
        info.textContent = 'you tied with the machine'
        container.appendChild(info);
            break;
        case playerSelection === "rock" && computerSelection == "scissors":
        case playerSelection === "paper" && computerSelection === "rock":
        case playerSelection === "scissors" && computerSelection === "paper":
            score();
            info.textContent = "you win " + playerSelection + " beats " + computerSelection;
            container.appendChild(info);
            break;
        case playerSelection === undefined:
            playerScore += 0;
            computerScore += 0;
            break;
        default:
        computerScore += 1;
        info.textContent = "you lose " + computerSelection + " beats " + playerSelection;
        container.appendChild(info);
        break;
    }
    para.textContent = 'The score is: ' + playerScore + ' / ' + computerScore;
    container.appendChild(para);

    if(playerScore >= 5 || computerScore >= 5){
        playButtons.remove();
        info.remove();
        final.textContent = 'GAME OVER! ' + playerScore + " for the player and " +  computerScore + " for the machine is the final score";
        container.appendChild(final);    }
}