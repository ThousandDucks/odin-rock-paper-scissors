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

function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice == computerChoice) {
            console.log("It's a tie!");
            return;
        }
        
        if (
            (humanChoice == "rock" && computerChoice == "scissors") ||
            (humanChoice == "paper" && computerChoice == "rock") ||
            (humanChoice == "scissors" && computerChoice == "paper")
        ) {
            humanScore ++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
        }
    }
    
    for (let i = 1; i < 6; i++) {
        console.log(`Round ${i}`)
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log("Results:")
    console.log(`Human: ${humanScore} | Computer: ${computerScore}`);
}

playGame();