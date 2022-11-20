function changeComputerImg() {
  let computerChoice = Math.floor(Math.random() * 3)
  switch (computerChoice) {
    case 0:
      computerImg.src = 'images/rock.png';
      computerImg.dataset.key = 'rock';
      break;
    case 1:
      computerImg.src = 'images/paper.png';
      computerImg.dataset.key = 'paper';
      break;
    case 2:
      computerImg.src = 'images/scissors.png';
      computerImg.dataset.key = 'scissors';
      break;
  }
}
 
 function winner () {
   if (parseFloat(playerScore.textContent) >= 5 || parseFloat(computerScore.textContent) >= 5) {
     if (parseFloat(playerScore.textContent) >= 5 && parseFloat(computerScore.textContent) >= 5 && playerScore.textContent == computerScore.textContent) {
       alert('Draw');
     } else if (parseFloat(playerScore.textContent) >= 5) {
     alert('You win!');
   } else if (parseFloat(computerScore.textContent) >= 5) {
     alert('You lose!');
   }
   playerScore.textContent = 0;
   computerScore.textContent = 0;
   playerImg.src = '';
   computerImg.src = '';
 }
 }
 
function increasePoints() {
  const player = playerImg.dataset.key;
  let playerCurrentScore = parseFloat(playerScore.textContent);
  const computer = computerImg.dataset.key;
  let computerCurrentScore = parseFloat(computerScore.textContent);
  switch (true) {
    case player == computer:
     // alert('Draw');
      playerScore.textContent = playerCurrentScore + 0.5;
      computerScore.textContent = computerCurrentScore + 0.5;
      break;
    case player == 'rock' && computer== 'paper':
      //alert('You lose! Paper beats Rock');
      computerScore.textContent = computerCurrentScore + 1;
      break;
    case player == 'paper' && computer == 'scissors':
      //alert('You lose! Scissors beats Paper');
      computerScore.textContent = computerCurrentScore + 1;
       break;
    case player == 'scissors' && computer == 'rock':
      //alert('You lose! Rock beats Scissors');
      computerScore.textContent = computerCurrentScore + 1;
      break;
    case player == 'rock' && computer == 'scissors':
      //alert('You win! Rock beats Scissors');
      playerScore.textContent = playerCurrentScore + 1;
      break;
    case player == 'paper' && computer == 'rock':
      //alert('You win! Paper beats Rock');
      playerScore.textContent = playerCurrentScore + 1;
      break;
    case player == 'scissors' && computer == 'paper':
      //alert('You win! Scissors beats Paper');
      playerScore.textContent = playerCurrentScore + 1;
      break;
  }
}

let computerImg = document.querySelector('#computer-img');
let userClick = document.querySelector('#container');
let playerImg = document.querySelector('#player-img');

const computerScore = document.querySelector('#computer-score span');
const playerScore = document.querySelector('#player-score span');


userClick.addEventListener('click', changer);

function changer(e) {
  const rock = 'rock';
  const paper = 'paper';
  const scissors = 'scissors';
  switch (e.target.id) {
    case rock:
      playerImg.src = 'images/rock.png';
      playerImg.dataset.key = 'rock';
      break;
    case paper:
      playerImg.src = 'images/paper.png';
      playerImg.dataset.key = 'paper';
      break;
    case scissors:
      playerImg.src = 'images/scissors.png';
      playerImg.dataset.key = 'scissors';
      break;
  }
  changeComputerImg();
  increasePoints();
 setTimeout(winner, 100);
}
