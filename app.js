let playerWins = 0;
let computerWins = 0;

// computer play choice
function getComputerChoice(){
    const playOptions = ['rock', 'paper', 'scissor'];
    const choice = Math.floor(Math.random() * playOptions.length);
    return playOptions[choice];
}               

// player play choice
function playerSelection() {
    return prompt('make a play choice; (1). rock, (2). scissor (3). paper')
}

// play round
function playRound(playerSelection, computerSelection){
    let formattedPlayerSelection = playerSelection.toLowerCase();
    if(computerSelection === 'rock'){
        if(formattedPlayerSelection === 'scissor'){
            computerWins += 1
            return `You lose! Rock beats scissor`;
        }else if(formattedPlayerSelection === 'paper'){
            playerWins += 1
            return `You win! Paper beats rock`;
        }else{
            return `It's tie.`
        }
    }else if(computerSelection === 'paper'){
        if(formattedPlayerSelection === 'scissor'){
            playerWins += 1
            return `You win! Scissor beats paper`;
        }else if(formattedPlayerSelection === 'rock'){
            computerWins += 1
            return `You lose! Paper beats rock`;
        }else{
            return `It's tie.`
        }
    }else if(computerSelection === 'scissor'){
        if(formattedPlayerSelection === 'rock'){
            playerWins += 1 
            return `You win! Rock beats scissor`;
        }else if(formattedPlayerSelection === 'paper'){
            computerWins += 1
            return `You lose! scissor beats paper`;
        }else{
            return `It's tie.`
        }
    }
}

// game 
function game(){

    for(let i = 0; i < 5; i++){
        let res = playRound(playerSelection(), getComputerChoice())

        console.log(res)
    }

    console.log(computerWins)
    if(computerWins > playerWins){
        console.log(`Computer beat humanity again`)
    }else if(computerWins < playerWins){
        console.log(`humanity again is the winner`)
    }else{
        console.log('we understood each other')
    }

}

game() 