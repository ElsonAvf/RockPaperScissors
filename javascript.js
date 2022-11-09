function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3)
  
  switch (computerChoice) {
    case 0:
      return 'Rock'
    case 1:
      return 'Paper'
    case 2:
      return 'Scissors'
  }
}

function playRound(playerSelection, computerSelection) {
  return checkWinner(playerSelection, computerSelection);
}
 
function game() {
  let computerPoints = 0;
  let playerPoints = 0;
  for (let i = 0; i < 5; i++) {
    let choice = prompt('Escolha').toLowerCase();
    let winner = playRound(choice, getComputerChoice());
    switch (winner) {
      case 1:
        playerPoints++;
        break;
      case 2:
        computerPoints++;
        break;
      case 3:
        computerPoints += 0.5;
        playerPoints += 0.5;
        break;
    }
  }
  if (playerPoints > computerPoints) {
    console.log('You win the game!');
    console.log(`Result: ${playerPoints} x ${computerChoice}`);
  } else if (playerPoints < computerPoints) {
    console.log('You lose the game!');
    console.log(`Result: ${playerPoints} x ${computerPoints}`);
  } else {
    console.log(`Draw`);
    console.log(`Result: ${playerPoints} x ${computerPoints}`)
  }
}
 
function checkWinner(playerSelection, computerSelection) {
  console.log(`${playerSelection} ${computerSelection}`);
  switch (true) {
    case playerSelection == computerSelection.toLowerCase():
      console.log('Draw');
      return 3
    case playerSelection == 'rock' && computerSelection == 'Paper':
      console.log('You lose! Paper beats Rock');
      return 2
    case playerSelection == 'paper' && computerSelection == 'Scissors':
      console.log('You lose! Scissors beats Paper');
      return 2
    case playerSelection == 'scissors' && computerSelection == 'Rock':
      console.log('You lose! Rock beats Scissors');
      return 2
    case playerSelection == 'rock' && computerSelection == 'Scissors':
      console.log('You win! Rock beats Scissors');
      return 1
    case playerSelection == 'paper' && computerSelection == 'Rock':
      console.log('You win! Paper beats Rock');
      return 1
    case playerSelection == 'scissors' && computerSelection == 'Paper':
      console.log('You win! Scissors beats Paper');
      return 1
    default:
    console.log('Invalid');
  }
}

game();