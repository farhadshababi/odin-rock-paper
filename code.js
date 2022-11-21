function getComputerChoice() {
  let computerChoiceInt = Math.floor(Math.random() * 3);
  if (computerChoiceInt === 0) {
    return "ROCK";
  } else if (computerChoiceInt === 1) {
    return "PAPER";
  } else {
    return "SCISSOR";
  }
}

let playerChoice;
let gameResult = "No game";
let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice) {
  if (
    (playerChoice.toUpperCase() === "SCISSOR" &&
      computerChoice.toUpperCase() === "PAPER") ||
    (playerChoice.toUpperCase() === "PAPER" &&
      computerChoice.toUpperCase() === "ROCK") ||
    (playerChoice.toUpperCase() === "ROCK" &&
      computerChoice.toUpperCase() === "SCISSOR")
  ) {
    gameResult = `You Win! ${playerChoice} beats ${computerChoice}. `;
    playerScore++;
  } else if (
    (computerChoice.toUpperCase() === "SCISSOR" &&
      playerChoice.toUpperCase() === "PAPER") ||
    (computerChoice.toUpperCase() === "PAPER" &&
      playerChoice.toUpperCase() === "ROCK") ||
    (computerChoice.toUpperCase() === "ROCK" &&
      playerChoice.toUpperCase() === "SCISSOR")
  ) {
    gameResult = `You lost! ${computerChoice} beats ${playerChoice}. `;
    computerScore++;
  } else {
    gameResult = "It is a tie. ";
  }
}

function game(numRounds) {
  for (let i = 0; i < numRounds; i++) {
    playerChoice = prompt("What is your weapon of choice");
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    console.log(playerScore, computerScore);
    alert(gameResult);
  }

  if (computerScore > playerScore) {
    finalResult = "You Suck";
  } else if (playerScore > computerScore) {
    finalResult = "YYou Rock";
  } else {
    finalResult = "Finished game but tie";
  }
  console.log(finalResult);
}

game(5);
