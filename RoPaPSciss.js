function getComputerChoice(){
    let randomChoice = Math.floor(Math.random()*3)
    switch(randomChoice){
        case 0: 
            return `rock`;
            break;
        case 1:
            return `paper`;
            break;
        case 2:
            return `scissors`;
            break;
    }
}
let playerGuess = prompt(`Rock, Paper, Scissors. What's choice?`);
function playGround1(computerSelection, playerSelection){
    while(playerSelection.toLowerCase() != `rock` && playerSelection.toLowerCase() != `paper` && playerSelection.toLowerCase() != `scissors`){
        playerSelection = prompt(`Invalid data! Please try again!`);
    }
    switch(computerSelection == `rock`){
        case (playerSelection.toLowerCase() === `rock`):
            return `Computer picked Rock, we have a raw!`;
            break;
        case (playerSelection.toLowerCase() === `paper`):
            return `Computer picked Rock, Paper beat Rock, you win!`;
            break;
        case (playerSelection.toLowerCase() === `scissors`):
            return `Computer picked Rock, Rock beat scissors, computer win!`;
            break;
    }
    switch(computerSelection == `paper`){
        case (playerSelection.toLowerCase() === `rock`):
            return `Computer picked Paper, Paper beat Rock, computer win!`;
            break;
        case (playerSelection.toLowerCase() === `paper`):
            return `Computer picked Paper, we have a raw!`;
            break;
        case (playerSelection.toLowerCase() === `scissors`):
            return `Computer picked Paper, Scissors beat Paper , you win!`;
            break;
    }
    switch(computerSelection == `scissors`){
        case (playerSelection.toLowerCase() === `rock`):
            return `Computer picked Scissors, Rock beat scissors, you win!`;
            break;
        case (playerSelection.toLowerCase() === `paper`):
            return `Computer picked Scissors, Scissors beat Paper, computer win!`;
            break;
        case (playerSelection.toLowerCase() === `scissors`):
            return `Computer picked Scissors, we have a raw!`;
            break;
    }
}
playGround1(getComputerChoice(), playerGuess);