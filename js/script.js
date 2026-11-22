// js connected through src

const resultDisplay = document.querySelector('.result-display');
const pickedShown = document.querySelector('.picked');
const scoreDisplay = document.querySelector('.scores-details');

const scores = JSON.parse(localStorage.getItem('scores')) || {
  wins: 0,
  losses: 0,
  ties: 0
}

function playerPick(playerMovement){

let result = '';

const computerMove = computerRandomMove();

  if(playerMovement === 'rock'){
     if(computerMove === 'rock'){
      result = 'Ties'
      }else if(computerMove === 'paper'){
        result = 'You losses'
      }else if(computerMove === 'scissors'){
        result = 'You wins';
    }
  }else if(playerMovement === 'paper'){
     if(computerMove === 'paper'){
      result = 'Ties'
      }else if(computerMove === 'scissors'){
        result = 'You losses'
      }else if(computerMove === 'rock'){
        result = 'You wins';
    }
  }else if(playerMovement === 'scissors'){
     if(computerMove === 'scissors'){
      result = 'Ties'
      }else if(computerMove === 'rock'){
        result = 'You losses'
      }else if(computerMove === 'paper'){
        result = 'You wins';
    }
  }

  if(result === 'You wins'){
    scores.wins = scores.wins + 1;
  }else if(result === 'You losses'){
    scores.losses += 1;
  }else if(result === 'Ties'){
    scores.ties += 1;
  }

  // result shown

  pickedShown.innerHTML = `You <img src="images/${playerMovement}-emoji.png" alt="${playerMovement}"> - <img src="images/${computerMove}-emoji.png" alt="${computerMove}"> Computer`
  resultDisplay.innerHTML = `${result}`;
  scoreDisplay.innerHTML = `Wins: ${scores.wins},  Losses: ${scores.losses},  Ties: ${scores.ties}`

  localStorage.setItem('scores', JSON.stringify(scores));
}



function computerRandomMove(){

  const randomMove = Math.random();

  let computerPick = '';

  if(randomMove >= 0 && randomMove <= 1 / 3){
    computerPick ='rock';
  }else if(randomMove > 1 / 3 && randomMove <= 2 / 3){
    computerPick = 'paper';
  }else if(randomMove > 2 / 3 && randomMove <= 1){
    computerPick = 'scissors';
  }

  return computerPick;
}

function scoresReset(){
  scores.wins = 0;
  scores.losses = 0;
  scores.ties = 0;

  resultDisplay.innerHTML = `Scores have been reset!`;
  pickedShown.innerHTML = ''
  scoreDisplay.innerHTML = `Wins: ${scores.wins},  Losses: ${scores.losses},  Ties: ${scores.ties}`
}

function showDataDisplay(){
  resultDisplay.innerHTML = `Previou saved result`;
  pickedShown.innerHTML = ''
  scoreDisplay.innerHTML = `Wins: ${scores.wins},  Losses: ${scores.losses},  Ties: ${scores.ties}`
}


