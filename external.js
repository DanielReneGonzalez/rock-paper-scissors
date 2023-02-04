
     //returns rock paper or scissors randomly//

     function getComputerChoice(choice) {
        const random = Math.floor(Math.random() * choice.length);

        const item = choice[random]

        return item;
        
    }
    const array = ['rock','paper', 'scissors'];

    
    function playRound () {
        let computerSelection = getComputerChoice(array);
        let playerSelection = prompt('rock, paper, or scissors?');
            if (playerSelection === '') {
                console.log ('You didn\'t make a choice!') ;
            } 
            else if (playerSelection === null) {
                prompt('rock, paper, or scissors?');
            }
            else if (playerSelection === 'rock') {
                console.log(check(playerSelection,computerSelection));
            }
            else if (playerSelection === 'paper') {
                console.log(check(playerSelection,computerSelection));
            }
            else if (playerSelection === 'scissors') {
                console.log(check(playerSelection,computerSelection));
            }
            else {
                prompt('rock, paper, scissors?')
            }
        console.log(computerSelection)
        }


    //player and computer selection compared and return with statment on play//


    function check(playerSelection, computerSelection) {
        switch (playerSelection) {
            case 'rock':
                switch(computerSelection){
                    case 'paper': 
                        return 'Paper beats rock! You lose, try again!'
                    break;
                    case 'scissors': 
                        return 'Rock beats scissors! You win!'
                    break;
                    default: 
                        return 'Its a tie!'
                    break;
                }
        
                break;
            case 'paper':
                switch(computerSelection){
                    case 'rock':
                        return 'Paper beats rock! You win!'
                    break;
                    case 'scissors':
                        return 'Scissors beats paper! You lose, try again!'
                    break;
                    default:
                        return 'Its a tie!'
                    break;
                }
            
                break;
            case 'scissors':
                switch(computerSelection){
                    case 'paper':
                        return 'Scissors beats paper! You win!'
                    break;
                    case 'rock':
                        return 'Rock beats scissors! You lose, try again!'
                    break;
                    default:
                        return 'Its a tie!'
                    break;
                }
            }
        }
    
//runs game a total of five rounds//

    function game() {
            for (let i = 0; i < 5; i++){
                playRound() ;
             }
    }
    
            
    game()


