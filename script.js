"use strict";
let human = 0;
let computer = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const computerScore = document.querySelector("#computerScore");
const humanScore = document.querySelector("#humanScore");

const display = document.querySelector("#display");

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum == 1) {
    return "rock";
  } else if (randomNum == 2) {
    return "paper";
  }
  return "scissors";
}

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection);
  let counter;
  function round() {
    if (playerSelection == "rock" && computerSelection == "rock") {
      human++;
      computer++;
      return "Its a draw!";
    } else if (playerSelection == "paper" && computerSelection == "paper") {
      human++;
      computer++;
      return "Its a draw!";
    } else if (
      playerSelection == "scissors" &&
      computerSelection == "scissors"
    ) {
      human++;
      computer++;
      return "Its a draw!";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
      computer++;
      return "You lose! Paper beats Rock";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
      human++;
      return "You win! Rock beats Scissors";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
      human++;
      return "You win! Paper beats Rock";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
      computer++;
      return "You lose! Scissors beat Paper";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
      human++;
      return "You win! Scissors beat Paper";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
      computer++;
      return "You lose! Rock beats Scissors";
    }
  }
  return round();
}

function clearScores() {
  human = 0;
  computer = 0;
  computerScore.textContent = "Computer score: " + computer;
  humanScore.textContent = "You score: " + human;
}

function scoresUpdate() {
  computerScore.textContent = "Computer score: " + computer;
  humanScore.textContent = "You score: " + human;
}

function game() {
  if (computer >= 3) {
    display.textContent = `You lost!`;
    clearScores();
  } else if (human >= 3) {
    display.textContent = `You won!`;
    clearScores();
  }

  if (human == 3) {
    scoresUpdate();
  } else if (computer == 3) {
    scoresUpdate();
  }
  scoresUpdate();
}

rockBtn.addEventListener("click", function () {
  console.log(playRound("rock", getComputerChoice()));
  display.textContent = "Choose the weapon!";
  game();
});

paperBtn.addEventListener("click", function () {
  console.log(playRound("paper", getComputerChoice()));
  display.textContent = "Choose the weapon!";
  game();
});

scissorsBtn.addEventListener("click", function () {
  console.log(playRound("scissors", getComputerChoice()));
  display.textContent = "Choose the weapon!";
  game();
});
