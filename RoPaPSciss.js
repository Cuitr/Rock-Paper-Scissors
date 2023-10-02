function getComputerChoice(){
    let randomChoice = Math.floor(Math.random()*3)
    switch(randomChoice){
        case 0: 
            return `rock`;
            
        case 1:
            return `paper`;
            
        case 2:
            return `scissors`;
            
    }
}

function playGround1(computerSelection){
    let playerSelection = prompt(`Rock, Paper, Scissors. What's choice?`);
    while(playerSelection.toLowerCase() != `rock` && playerSelection.toLowerCase() != `paper` && playerSelection.toLowerCase() != `scissors`){
        playerSelection = prompt(`Invalid data! Please try again!`);
    }
    if(computerSelection == `rock`){
        if(playerSelection.toLowerCase() == `rock`){
            return `Computer picked Rock, we have a raw!`;
        }else if (playerSelection.toLowerCase() == `paper`){
            return `Computer picked Rock, Paper beat Rock, You win!`;
        }else if(playerSelection.toLowerCase() == `scissors`){
            return `Computer picked Rock, Rock beat scissors, Computer win!`;
        }
    }else if(computerSelection == `paper`){ 
        if(playerSelection.toLowerCase() == `rock`){
            return `Computer picked Paper, Paper beat Rock, Computer win!`;
        }else if(playerSelection.toLowerCase() == `paper`){
            return `Computer picked Paper, we have a raw!`;
        }else if(playerSelection.toLowerCase() == `scissors`){
            return `Computer picked Paper, Scissors beat Paper , You win!`;
        }
    }else{
        if(playerSelection.toLowerCase() == `rock`){
            return `Computer picked Scissors, Rock beat scissors, You win!`;
        }else if(playerSelection.toLowerCase() == `paper`){
            return `Computer picked Scissors, Scissors beat Paper, Computer win!`;
        }else if(playerSelection.toLowerCase() == `scissors`){
            return `Computer picked Scissors, we have a raw!`;      
    }
}
}

playGround1(getComputerChoice());