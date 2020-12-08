const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number)) || Number(number) < 0;
}

prompt("Welcome to Mortgage Calculator!");



while (true) {

prompt("What is the loan amount you are applying for?");

let loanAmount = readline.question();
while (invalidNumber(loanAmount)) {
  prompt("That is not a valid loan amount");
  loanAmount = readline.question();
}




prompt("what is the Annual Percentage Rate?")
prompt("Example, enter 5 for 5%")
let annualPercentageRate = readline.question();

while (invalidNumber (annualPercentageRate)) {
  prompt("That is not a valid Annual Percentage Rate");
  annualPercentageRate = readline.question();
}
let annualPercentageRateDecimal = annualPercentageRate/100;
let monthlyInterest = annualPercentageRateDecimal/12;




prompt("For your loan term, first enter loan years, followed by loan months (i.e. 5 years 10 months)");

prompt("Enter the number of loan years");
let loanYears = readline.question();
while (invalidNumber(loanYears)) {
  prompt("That is not a valid loan duration");
  loanYears = readline.question();  
}




prompt("Enter the number of loan months");
let loanMonths = readline.question();
while (invalidNumber(loanMonths)) {
  prompt("That is not a valid loan duration");
  loanMonths = readline.question();  
}




let loanDurationInMonths = (Number(loanYears))*12 + Number(loanMonths);
let monthlyPayment;

if (loanAmount > 0 && loanDurationInMonths > 0) {
  monthlyPayment = loanAmount * (monthlyInterest / (1 - Math.pow((1 + monthlyInterest), (-loanDurationInMonths))));
 }

let twoDecimals = monthlyPayment.toFixed(2);

console.log(`Your monthly payment is in the amount of $${twoDecimals}`);

prompt("Another calcualtion?")
let answer = readline.question().toLowerCase();
while (answer[0] !== 'y' && answer[0] !== 'n') {
  prompt('Please enter "y" or "n".');
  answer = readline.question().toLowerCase();
}

if (answer[0] === 'n') break;

}