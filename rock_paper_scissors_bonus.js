const readline = require('readline-sync');
const VALID_CHOICES = ['r', 'p', 'ss', 's', 'l'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'ss' && computerChoice === 'p') ||
      (choice === 'p' && computerChoice === 'r') ||
      (choice === 'r' && computerChoice === 'l') ||
      (choice === 'l' && computerChoice === 's') ||
      (choice === 's' && computerChoice === 'ss') ||
      (choice === 'ss' && computerChoice === 'l') ||
      (choice === 'l' && computerChoice === 'p') ||
      (choice === 'p' && computerChoice === 'r') ||
      (choice === 's' && computerChoice === 'r') ||
      (choice === 'r' && computerChoice === 'ss') ||
      (choice === 'r' && computerChoice === 'ss')) {
    prompt('You win!');
    return 'You win!';
  } else if ((computerChoice === 'ss' && choice === 'p') ||
            (computerChoice === 'p' && choice === 'r') ||
            (computerChoice === 'r' && choice === 'l') ||
            (computerChoice === 'l' && choice === 's') ||
            (computerChoice === 's' && choice === 'ss') ||
            (computerChoice === 'ss' && choice === 'l') ||
            (computerChoice === 'l' && choice === 'p') ||
            (computerChoice === 'p' && choice === 's') ||
            (computerChoice === 's' && choice === 'r') ||
            (computerChoice === 'r' && choice === 'ss')) {
    prompt('Computer wins!');
    return 'Computer wins!';
  } else {
    prompt("It's a tie!");
    return 'It\'s a tie!';
  }
}

while (true) {
  let user = 0;
  let computer = 0;
  prompt('You are playing for the best of five');

  while (true) {
    prompt(`Type one: \n
    'r' for rock\n
    'p' for paper\n
    'ss' for scissors\n
    's' for spock\n
    'l' for lizard`);
    let choice = readline.question();

    while (!VALID_CHOICES.includes(choice)) {
      prompt("That's not a valid choice");
      choice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];
    let result = displayWinner(choice, computerChoice);

    if (result === 'You win!') {
      user += 1;
      console.log(user);
    } else if (result === 'Computer wins!') {
      computer += 1;
      console.log(computer);
    }

    if (user === 5 || computer === 5) break;
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
