function getComputerChoice() {
    const randomNumber = Math.random(3)

    if (randomNumber < 1/3) {
        return "rock"
    } else if (randomNumber > 2/3) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let answer = prompt("Type rock, paper or scissors:")
    return answer;
}

function playRound(humanChoice, computerChoice) {
    if (humanScore == 5 || computerScore == 5) {
        return;
    }
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == computerChoice) {
        message.textContent = "It's a tie!";
        return;
    }
    
    if (
        (humanChoice == "rock" && computerChoice == "scissors") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")
    ) {
        humanScore ++;
        message.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        message.textContent = `You lose! ${computerChoice} beats ${humanChoice}`
    }

    score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    
    if (humanScore == 5) {
        message.textContent = "You win!"
    }

    if (computerScore == 5) {
        message.textContent = "Computer wins!"
    }
}

let humanScore = 0 
let computerScore = 0

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper")
const scissorsBtn = document.querySelector("#scissors")

const resultsMessage = document.querySelector("#results")

rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice())
});

paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice())
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice())
});

playGame();