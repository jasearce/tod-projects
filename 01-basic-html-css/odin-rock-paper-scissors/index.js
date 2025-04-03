
function getComputerChoice () {
    let computerChoice = "";
    const randomValue = Math.floor(Math.random() * 3);
    switch (randomValue) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
        default:
            console.warn("Invalid computer choice!");
            break;
    }
    return computerChoice;
}

function getHumanChoice() {
    let userChoice = prompt("Choose your option (rock, paper, scissors): ");
    return userChoice.trim().toLowerCase();
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {

    if (humanChoice === computerChoice) 
    {
        alert(`Draw! Try again!`);
    }
    else 
    {
        if (humanChoice === "paper") 
        {
            computerChoice === "rock" ? humanScore++ : computerScore++;
        }
        if (humanChoice === "rock") 
        {
            computerChoice === "scissors" ? humanScore++ :  computerScore++;
        }
        if (humanChoice === "scissors") 
        {
            computerChoice === "paper" ? humanScore++ : computerScore++;    
        }
        humanScore > computerScore ? alert(`You won!`) : alert(`You lose!`);

    }
    return {humanScore, computerScore};
    
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    let roundsToPlay = prompt("How many rounds do you want to play?");
    for (let index = 0; index < roundsToPlay; index++)
    {
        const userSelection = getComputerChoice();
        const computerSelection = getHumanChoice();

        const roundResult = playRound(userSelection, computerSelection, humanScore, computerScore);
        humanScore = roundResult.humanScore;
        computerScore = roundResult.computerScore;
1       
    }
    console.group("Scores");
    console.log(`User: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
    
    if (humanScore > computerScore) {
        alert(`You won! Final score: User: ${humanScore}pts. Computer: ${computerScore}pts.`);
    }
    if (humanScore < computerScore) {
        alert(`You lose! Final score: User: ${humanScore}pts. Computer: ${computerScore}pts.`);
    }
    if (humanScore === computerScore) {
        alert(`Draw! Try again later. Final score: ${humanScore}pts.`);
    }
}

playGame();