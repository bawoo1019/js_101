const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'Scissors', 'spock', 'lizard'];

function prompt(message) {
  console.log(`=> ${message}`);
}

const WINNING_COMBOS = {
  rock:     ['Scissors', 'lizard'],
  paper:    ['rock', 'spock'],
  Scissors: ['paper', 'lizard'],
  lizard:   ['paper', 'spock'],
  spock:    ['rock', 'Scissors'],
};

function playerWins(choice, computerChoice) {
  return WINNING_COMBOS[choice].includes(computerChoice);
}

let firstLetter = ['r', 'p', 'S', 's', 'l'];

let playerScore = 0;
let computerScore = 0;

function updateCurrentScore (choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    playerScore += 1;
    prompt(`Current playerScore is: ${playerScore}`);
  } else if (choice === computerChoice) {
    prompt(`No score added`);
  } else {
    computerScore += 1;
    prompt(`Current computerScore is: ${computerScore}`);
  }
}

function outputRoundResult (choice, computerChoice) {
  if (playerWins(choice, computerChoice)) {
    prompt("You won this round!");
  } else if (choice === computerChoice) {
    prompt("It's a tie!");
  } else {
    prompt("The computer won this round!");
  }
}

function outputGrandWinner() {
  if (playerScore === 5) {
    prompt('Congrats! You are the Grand Winner!');
  } else if (computerScore === 5) {
    prompt('Better luck next time! Computer is the Grand Winner!');
  }
}

while (true) {
  prompt('You are playing for the best of five');
  if (playerScore === 5 || computerScore === 5) {
    playerScore = 0;
    computerScore = 0;
  }

  while (true) {
    prompt(`Choose one: ${VALID_CHOICES.join(', ')}\nyou may also type a single letter\n
    'r' for rock\n
    'p' for paper\n
    'S' for scissors\n
    's' for spock\n
    'l' for lizard`);
    let choice = readline.question();

    while (!(VALID_CHOICES.includes(choice) || firstLetter.includes(choice))) {
      prompt("That's not a valid choice");
      choice = readline.question();
    }

    for (let counter = 0; counter < VALID_CHOICES.length; counter++) {
      if (choice.length === 1 && choice === VALID_CHOICES[counter][0]) {
        choice = VALID_CHOICES[counter];
        break;
      }
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    updateCurrentScore(choice, computerChoice);
    outputRoundResult(choice, computerChoice);
    outputGrandWinner();

    if (playerScore === 5 || computerScore === 5) break;

  }

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') {
    break;
  } else {
    console.clear();
  }
}
