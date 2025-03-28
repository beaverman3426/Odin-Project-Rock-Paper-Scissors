const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}
function determineWinner(human, computer) {
  const outcomes = {
      rock: { scissors: "human", paper: "computer", rock: "draw" },
      scissors: { paper: "human", rock: "computer", scissors: "draw" },
      paper: { rock: "human", scissors: "computer", paper: "draw" }
  };

  return outcomes[human][computer];
}
function updateUI(humanChoice, computerChoice, result) {
  document.getElementById("result").textContent =
      `You chose ${humanChoice}, Computer chose ${computerChoice}. ${result}`;

  document.getElementById("humanScore").textContent = humanScore;
  document.getElementById("computerScore").textContent = computerScore;
}
document.querySelectorAll(".choices button").forEach(button => {
  button.addEventListener("click", function () {
      let humanChoice = this.id;
      let computerChoice = getComputerChoice();
      let result = determineWinner(humanChoice, computerChoice);

      if (result === "human") {
          humanScore++;
          result = "You win!";
      } else if (result === "computer") {
          computerScore++;
          result = "You lose!";
      } else {
          result = "It's a draw!";
      }

      updateUI(humanChoice, computerChoice, result);
  });
});