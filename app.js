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

    if(computerWins === 5){
        return (`Computer beat humanity again`)
    }else if(playerWins ===  5){
        return (`humanity again is the winner`)
    }
}


const display = document.querySelector('.display');
const btns = document.querySelectorAll('.btns');
const scoreBoard = document.createElement('div')

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        display.innerHTML += `<p>${playRound(e.target.textContent.trim(), getComputerChoice())}</p>`
        scoreBoard.innerHTML = game() ? game() : ''
        display.appendChild(scoreBoard)
        
    })
});