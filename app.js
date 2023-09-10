// computer play choice
function getComputerChoice(){
    const playOptions = ['rock', 'paper', 'scissor'];
    const choice = Math.floor(Math.random() * playOptions.length);
    return playOptions[choice];
}                             