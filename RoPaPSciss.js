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
function playGround1(playerSelection, ComputerSelection){
    
}