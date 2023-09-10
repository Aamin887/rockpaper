// computer play choice
function getComputerChoice(){
    const playOptions = ['rock', 'paper', 'scissor'];
    const choice = Math.floor(Math.random() * playOptions.length);
    return playOptions[choice];
}                             

// play round
function playRound(playerSelection, computerSelection){
    let formattedPlayerSelection = playerSelection.toLowerCase();
    if(computerSelection === 'rock'){
        if(formattedPlayerSelection === 'scissor'){
            return `You lose! Rock beats scissor`;
        }else if(formattedPlayerSelection === 'paper'){
            return `You win! Paper beats rock`;
        }else{
            return `It's tie.`
        }
    }else if(computerSelection === 'paper'){
        if(formattedPlayerSelection === 'scissor'){
            return `You win! Scissor beats paper`;
        }else if(formattedPlayerSelection === 'rock'){
            return `You lose! Paper beats rock`;
        }else{
            return `It's tie.`
        }
    }else if(computerSelection === 'scissor'){
        if(formattedPlayerSelection === 'rock'){
            return `You win! Rock beats scissor`;
        }else if(formattedPlayerSelection === 'paper'){
            return `You lose! scissor beats paper`;
        }else{
            return `It's tie.`
        }
    }
}

console.log(playRound('rock', getComputerChoice()))