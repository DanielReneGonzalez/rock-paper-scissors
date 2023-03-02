
     //returns rock paper or scissors randomly//

     function getComputerChoice(choice) {
        const random = Math.floor(Math.random() * choice.length);

        const item = choice[random]

        return item;
        
    }
    const array = ['rock','paper', 'scissors'];

let rockButton = document.querySelector('#rock')
let paperButton = document.querySelector('#paper')
let scissorsButton = document.querySelector('#scissors')
    rockButton.addEventListener('click', () => {
        const playerSelection = 'rock';
        const computerSelection = getComputerChoice(array);
        playRound(playerSelection,computerSelection);
        console.log(playerSelection)
    })

    paperButton.addEventListener('click', () => {
        const playerSelection = 'paper';
        const computerSelection = getComputerChoice(array);
        playRound(playerSelection,computerSelection);
        console.log(playerSelection)
    })

    scissorsButton.addEventListener('click', () => {
        const playerSelection = 'scissors';
        const computerSelection = getComputerChoice(array);
        playRound(playerSelection,computerSelection);
        console.log(playerSelection)
    })
    
    function playRound (playerSelection,computerSelection) {
            if (playerSelection === 'rock') {
                console.log(check(playerSelection,computerSelection));
            }
            else if (playerSelection === 'paper') {
                console.log(check(playerSelection,computerSelection));
            }
            else if (playerSelection === 'scissors') {
                console.log(check(playerSelection,computerSelection));
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
                        return 'Computer pulled paper. \n Paper beats rock! You lose, try again!'
                    break;}
                    case 'scissors':{
                         playerScore += 1;
                        return 'Computer pulled scissors. \n Rock beats scissors! You win!'
                    break;}
                    default: 
                        return 'Computer pulled rock. \n Its a tie!'
                    break;
                }
        
                break;
            case 'paper':
                switch(computerSelection){
                    case 'rock':{
                        playerScore += 1;
                        return 'Computer pulled rock. \n Paper beats rock! You win!'
                    break;}
                    case 'scissors':{
                        computerScore += 1;
                        return 'Computer pulled scissors. \n Scissors beats paper! You lose, try again!'
                    break;}
                    default:
                        return 'Computer pulled paper. \n Its a tie!'
                    break;
                }
            
                break;
            case 'scissors':
                switch(computerSelection){
                    case 'paper':{
                        playerScore += 1;
                        return 'Computer pulled scissors. \n Scissors beats paper! You win!'
                    break;}
                    case 'rock':{
                        computerScore += 1;
                        return 'Computer pulled rock. \n Rock beats scissors! You lose, try again!'
                    break;}
                    default:
                        return 'Computer pulled scissors, \n Its a tie!'
                    break;
                }
            }
        }
    
        let computerScore = 0;
        let playerScore = 0;
           
       


//runs game a total of five rounds//

     /*function game() {
            for (playerScore = 0; playerScore < 5 && computerScore < 5;){
                console.log('------------------')
                console.log('Player Score', playerScore)
                console.log('Computer Score', computerScore)
                console.log('------------------')
                playRound() ;
             } if (playerScore >= computerScore){
                console.log('You beat the computer!')
            } else {
                console.log('You lost! \n Computers are taking over the world!')
            }
    } 
    

    alert('Open your console to play!')
    const myTimeout = setTimeout(game, 7000)
    console.log('Welcome to a show down of Rock, Paper, or Scissors!')
    console.log('Please wait...')*/


