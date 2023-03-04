
     //returns rock paper or scissors randomly//

     function getComputerChoice(choice) {
        const random = Math.floor(Math.random() * choice.length);

        const item = choice[random]

        return item;
        
    }
    const array = ['rock','paper', 'scissors'];


//button Eventlisteners//

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const container = document.querySelector('#container');
const results = document.createElement('div');
let computerScore = 0;
let playerScore = 0;
const updateScore = document.querySelector('#playerScore' );
const updateComputerScore = document.querySelector('#computerScore');
const winnerMessage = document.createElement('div')


    rockButton.addEventListener('click', () => {
        const playerSelection = 'rock';
        const computerSelection = getComputerChoice(array);
        playRound(playerSelection,computerSelection);
        console.log(playerSelection);
            const replaceResults = document.querySelector('.results');
            replaceResults.replaceWith(results);
            if (playerScore == 5){
                winnerMessage.classList.add('winner')
                winnerMessage.textContent = 'You beat the Computer!';
                rockButton.disabled = true;
                paperButton.disabled = true;
                scissorsButton.disabled = true;
                results.replaceWith(winnerMessage)
           } else if (computerScore == 5){
            winnerMessage.classList.add('winner')
            winnerMessage.textContent = 'The Computer wins! AI is taking over the world!';
            results.replaceWith(winnerMessage);
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
           } else {}
    })

    paperButton.addEventListener('click', () => {
        const playerSelection = 'paper';
        const computerSelection = getComputerChoice(array);
        playRound(playerSelection,computerSelection);
        console.log(playerSelection);
        const replaceResults = document.querySelector('.results');
            replaceResults.replaceWith(results);
           if (playerScore == 5){
            winnerMessage.classList.add('winner')
            winnerMessage.textContent = 'You beat the Computer!';
            results.replaceWith(winnerMessage);
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
           } else if (computerScore == 5) {
            winnerMessage.classList.add('winner')
            winnerMessage.textContent = 'The Computer wins! AI is taking over the world!';
            results.replaceWith(winnerMessage);
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
           } else {}
    })

    scissorsButton.addEventListener('click', () => {
        const playerSelection = 'scissors';
        const computerSelection = getComputerChoice(array);
        playRound(playerSelection,computerSelection);
        console.log(playerSelection);
        const replaceResults = document.querySelector('.results');
            replaceResults.replaceWith(results);
            if (playerScore == 5){
                winnerMessage.classList.add('winner')
                winnerMessage.textContent = 'You beat the Computer!';
                results.replaceWith(winnerMessage);
                rockButton.disabled = true;
                paperButton.disabled = true;
                scissorsButton.disabled = true;
           } else if (computerScore == 5) {
            winnerMessage.classList.add('winner')
            winnerMessage.textContent = 'The Computer wins! AI is taking over the world!';
            results.replaceWith(winnerMessage);
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
           } else {}
    })
    
    function playRound (playerSelection,computerSelection) {
            if (playerSelection === 'rock') {
                return (check(playerSelection,computerSelection));
            }
            else if (playerSelection === 'paper') {
                return (check(playerSelection,computerSelection));
            }
            else if (playerSelection === 'scissors') {
                return (check(playerSelection,computerSelection));
            }
            else {
                playerSelection
            }

        //console.log(computerSelection)
        //console.log(playerSelection)
        }
    //player and computer selection compared and return with statment on play//

 

    function check(playerSelection, computerSelection) {
        switch (playerSelection) {
            case 'rock':
                switch(computerSelection){
                    case 'paper':{
                        computerScore += 1;
                                results.classList.add('results');
                                results.textContent = 'Computer pulled paper. \n Paper beats rock! You lose, try again!';
                            container.appendChild(results);
                            updateComputerScore.textContent = `${computerScore}`;
                    break;}
                    case 'scissors':{
                        playerScore += 1;
                                results.classList.add('results');
                                results.textContent = 'Computer pulled scissors. \n Rock beats scissors! You win!';
                            container.appendChild(results);
                            updateScore.textContent = `${playerScore}`;
                    break;}
                    default: 
                                results.classList.add('results');
                                results.textContent = 'Computer pulled rock. \n Its a tie!'
                                container.appendChild(results);
                    break;
                }
        
                break;
            case 'paper':
                switch(computerSelection){
                    case 'rock':{
                        playerScore += 1;
                                results.classList.add('results');
                                results.textContent = 'Computer pulled rock. \n Paper beats rock! You win!'
                                container.appendChild(results);
                                updateScore.textContent = `${playerScore}`;
                    break;}
                    case 'scissors':{
                        computerScore += 1;
                                results.classList.add('results');
                                results.textContent = 'Computer pulled scissors. \n Scissors beats paper! You lose, try again!'
                                container.appendChild(results);
                                updateComputerScore.textContent = `${computerScore}`;
                    break;}
                    default:
                                results.classList.add('results');
                                results.textContent = 'Computer pulled paper. \n Its a tie!'
                                container.appendChild(results);
                    break;
                }
            
                break;
            case 'scissors':
                switch(computerSelection){
                    case 'paper':{
                        playerScore += 1;
                                results.classList.add('results');
                                results.textContent = 'Computer pulled scissors. \n Scissors beats paper! You win!'
                                container.appendChild(results);
                                updateScore.textContent = `${playerScore}`;
                    break;}
                    case 'rock':{
                        computerScore += 1;
                                results.classList.add('results');
                                results.textContent = 'Computer pulled rock. \n Rock beats scissors! You lose, try again!'
                                container.appendChild(results);
                                updateComputerScore.textContent = `${computerScore}`;
                    break;}
                    default:
                                results.classList.add('results');
                                results.textContent = 'Computer pulled scissors, \n Its a tie!'
                                container.appendChild(results);
                    break;
                }
            }
        }
    
