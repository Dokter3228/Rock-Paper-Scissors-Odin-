"use strict";

let human = 0;
let computer = 0;

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
  playerSelection = playerSelection.toLowerCase();
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

function game() {
  for (let i = 0; i < 5; i++) {
    const player = prompt("Choose the thing!");
    console.log(playRound(player, getComputerChoice()));
    if (human == 3) {
      console.log("YOU COMPLETELY DESTROYED THE COMPUTER");
      console.log(`Your score: ${human}
    Computer's score: ${computer}`);
      break;
    } else if (computer == 3) {
      console.log("YOU LOSE TO THE FREAKING COMPUTER");
      console.log(`Your score: ${human}
    Computer's score: ${computer}`);
      break;
    }
    console.log(`Your score: ${human}
    Computer's score: ${computer}`);
  }
}

game();
