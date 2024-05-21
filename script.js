let computerMove; 

const computerChoice = [1,2,3]; 
const result = document.querySelector('#result'); 
const rockButton = document.querySelector('#rock'); 
const paperButton = document.querySelector('#paper'); 
const scissorsButton = document.querySelector('#scissors'); 
const allButtons = document.querySelectorAll('#rock, #paper, #scissors'); 
const interfaceContainer = document.querySelector('.interface-container'); 
const gameContainer = document.querySelector('.game-container'); 
const player = document.querySelector('#player'); 
const computer = document.querySelector('#computer'); 
const win = document.querySelector('#win'); 
const loss = document.querySelector('#loss'); 
const tie = document.querySelector('#tie'); 
const reset = document.querySelector('#reset-button'); 
const stats = document.querySelectorAll('#win, #loss, #tie');
let audio = new Audio('holy.mp3'); 

const counter = JSON.parse(localStorage.getItem('score')) || {
  win: 0, 
  loss: 0,
  tie: 0
};

rockButton.onclick = playRock; 
paperButton.onclick = playPaper; 
scissorsButton.onclick = playScissors;
reset.onclick = clear; 

win.innerHTML = counter.win; 
loss.innerHTML = counter.loss; 
tie.innerHTML = counter.tie;

audio.play();


function playRock(){
  playerAction('rock'); 

}

function playPaper(){
  playerAction('paper'); 
}

function playScissors(){
  playerAction('scissors');
}


function computerAction(){
  let randomNumber = Math.round(Math.random() * 2); 
  
  computerMove = computerChoice[randomNumber]; 

  if (computerMove === 1) {
    computerMove = 'rock'; 
  } else if (computerMove === 2) {
    computerMove = 'paper'; 
  } else if (computerMove >= 3) {
    computerMove = 'scissors';
  }
  return computerMove;
}

function playerAction(playerMove) {
  
  computerMove = computerAction(); 

  if (playerMove === 'rock') {
    player.innerHTML = '<img src="https://static.thenounproject.com/png/477914-200.png" alt=""></img>';
    player.style.backgroundColor = 'red'; 

    if (computerMove === 'rock'){
      computer.innerHTML = '<img src="https://static.thenounproject.com/png/477914-200.png" alt=""></img>';
      computer.style.backgroundColor = 'red'; 
      result.innerHTML = "It's a tie! 😐";
      counter.tie++; 
      tie.innerHTML = counter.tie; 

    } else if (computerMove === 'paper') {
      computer.innerHTML = '<img src="https://static.thenounproject.com/png/477922-200.png" alt="">';
      computer.style.backgroundColor = 'cyan'; 
      result.innerHTML = 'You lose! 🥲';
      counter.loss++; 
      loss.innerHTML = counter.loss;

    } else if (computerMove === 'scissors') {
      computer.innerHTML = '<img src="https://static.thenounproject.com/png/477919-200.png" alt="">';
      computer.style.backgroundColor = 'violet'; 
      result.innerHTML = 'You win! 😁';
      counter.win++; 
      win.innerHTML = counter.win; 

    }

  }

  if (playerMove === 'paper') {
    player.innerHTML = '<img src="https://static.thenounproject.com/png/477922-200.png" alt="">'; 
    player.style.backgroundColor = 'cyan'; 

    if (computerMove === 'rock'){
      computer.innerHTML = '<img src="https://static.thenounproject.com/png/477914-200.png" alt=""></img>';
      computer.style.backgroundColor = 'red'; 
      result.innerHTML = 'You win! 😁';
      counter.win++;
      win.innerHTML = counter.win; 

    } else if (computerMove === 'paper') {
      computer.innerHTML = '<img src="https://static.thenounproject.com/png/477922-200.png" alt="">';
      computer.style.backgroundColor = 'cyan'; 
      result.innerHTML = "It's a tie! 😐";
      counter.tie++; 
      tie.innerHTML = counter.tie; 
      
    } else if (computerMove === 'scissors') {
      computer.innerHTML = '<img src="https://static.thenounproject.com/png/477919-200.png" alt="">';
      computer.style.backgroundColor = 'violet'; 
      result.innerHTML = 'You lose! 🥲';
      counter.loss++; 
      loss.innerHTML = counter.loss;

    }
  }

  if (playerMove === 'scissors') {
    player.innerHTML = '<img src="https://static.thenounproject.com/png/477919-200.png" alt="">';
    player.style.backgroundColor = 'violet'; 

    if (computerMove === 'rock'){
      computer.innerHTML = '<img src="https://static.thenounproject.com/png/477914-200.png" alt=""></img>';
      computer.style.backgroundColor = 'red'; 
      result.innerHTML = 'You lose! 🥲';
      counter.loss++; 
      loss.innerHTML = counter.loss;

    } else if (computerMove === 'paper') {
      computer.innerHTML = '<img src="https://static.thenounproject.com/png/477922-200.png" alt="">';
      computer.style.backgroundColor = 'cyan'; 
      result.innerHTML = 'You win! 😁';
      counter.win++;
      win.innerHTML = counter.win; 
      
    } else if (computerMove === 'scissors') {
      computer.innerHTML = '<img src="https://static.thenounproject.com/png/477919-200.png" alt="">';
      computer.style.backgroundColor = 'violet'; 
      result.innerHTML = "It's a tie! 😐";
      counter.tie++; 
      tie.innerHTML = counter.tie; 

    }
  }

  disabled();
  setTimeout(enabled, 1500); 
  localStorage.setItem('score', JSON.stringify(counter)); 

}

function enabled(){
  interfaceContainer.style.display = 'flex'; 
  gameContainer.style.display = 'none'; 
}

function disabled(){
  interfaceContainer.style.display = 'none'; 
  gameContainer.style.display = 'flex'; 
}

function clear(){
  for(let i of Object.keys(counter)){
    counter[i] = 0; 
  }

  for(let stat of stats){
    stat.innerHTML = 0; 
  }

}

