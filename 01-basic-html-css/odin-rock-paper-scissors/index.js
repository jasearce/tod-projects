
function playGame() {

    const gameChoices = ["paper", "rock", "scissors"];

    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const scissorsBtn = document.querySelector("#scissors");

    let humanScore = 0;
    let computerScore = 0;

    const gameContainer = document.querySelector("body");
    const resultsDiv = document.createElement("div");
    resultsDiv.id = "results";
    resultsDiv.innerHTML = `
        <div id="round-result"></div>
        <div id="score-display">
            <p>Human: <span id="human-score">0</span><p>
            <p>Computer: <span id="computer-score">0</span><p>
        </div>
    `;
    gameContainer.appendChild(resultsDiv);

    function getComputerChoice() {
        let computerChoice = "";
        const randomValue = Math.floor(Math.random() * 3);
        switch (randomValue) {
            case 0:
                computerChoice = gameChoices[1]; //rock
                break;
            case 1:
                computerChoice = gameChoices[0]; //paper
                break;
            case 2:
                computerChoice = gameChoices[2]; //scissors
                break;
            default:
                console.warn("Invalid computer choice!");
                break;
        }
        return computerChoice;
    }
    
    function updateResults(message) {
        const roundResult = document.querySelector("#round-result");
        roundResult.textContent = message;
    
        // Update displayed score
        document.querySelector("#human-score").textContent = humanScore;
        document.querySelector("#computer-score").textContent = computerScore;
    }
    
    function playRound(humanChoice) {
        const computerChoice = getComputerChoice();
        let resultMessage = "";
    
        resultMessage = `You chose ${humanChoice}, computer chose ${computerChoice}.`;
    
        if (humanChoice === computerChoice) {
            resultMessage += "It's a draw!";
        }
        else {
            // When human chooses 'paper' (paper beats rock)
            if (humanChoice === gameChoices[0]) {
                // checking 'paper' against 'rock'
                if (computerChoice === gameChoices[1]) {
                    humanScore++;
                    resultMessage += "Paper covers rocks. You win!";                
                }
                else {
                    computerScore++;
                    resultMessage += "Scissors cut paper. You lose!";
                }
            }
            // When human chooses 'rock' (rock beats scissors)
            if (humanChoice === gameChoices[1]) {
                // checking 'rock' against 'scissors'
                if (computerChoice === gameChoices[2]) {
                    humanScore++;
                    resultMessage += "Rock crushes scissors. You win!";
                } else {
                    computerScore++;
                    resultMessage += "Paper covers rock. You lose!";
                }
            }
            // When human chooses 'scissors' (scissors beats paper)
            if (humanChoice === gameChoices[2]) {
                // checking 'scissors' against 'paper'
                if (computerChoice === gameChoices[0]) {
                    humanScore++;
                    resultMessage += "Scissors cut paper. You win!";
                }
                else {
                    computerScore++;
                    resultMessage += "Rock crushes scissors. You lose!";
                }
            }
        }
    
        // Update the results div
        updateResults(resultMessage);
        
        // Check if any player has reached 5 points
        if (humanScore === 5 || computerScore === 5) {
            const winner = humanScore === 5 ? "You" : "Computer";
            alert(`Game Over! ${winner} won the game!`);
            // Reset scores for a new game
            humanScore = 0;
            computerScore = 0;
            updateResults("New game started! Make your choice.");
        }
        
        // Log scores after each round
        console.group("Current Scores");
        console.log(`User: ${humanScore}`);
        console.log(`Computer: ${computerScore}`);
        console.groupEnd();
    }


    rockBtn.addEventListener("click", () => playRound(rockBtn.textContent.toLowerCase()));
    paperBtn.addEventListener("click", () => playRound(paperBtn.textContent.toLowerCase()));
    scissorsBtn.addEventListener("click", () => playRound(scissorsBtn.textContent.toLowerCase()));
}

playGame();

