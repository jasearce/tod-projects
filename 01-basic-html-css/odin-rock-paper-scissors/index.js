
const gameChoices = ["paper", "rock", "scissors"];

function getComputerChoice () {
    let computerChoice = "";
    const randomValue = Math.floor(Math.random() * 3);
    switch (randomValue) {
        case 0:
            computerChoice = gameChoices[1];
            break;
        case 1:
            computerChoice = gameChoices[0];
            break;
        case 2:
            computerChoice = gameChoices[2];
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
        if (humanChoice === gameChoices[0]) 
        {
            computerChoice === gameChoices[1] ? humanScore++ : computerScore++;
        }
        if (humanChoice === gameChoices[1]) 
        {
            computerChoice === gameChoices[2] ? humanScore++ :  computerScore++;
        }
        if (humanChoice === gameChoices[2]) 
        {
            computerChoice === gameChoices[0] ? humanScore++ : computerScore++;    
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
        const computerSelection = getComputerChoice();
        const userSelection = getHumanChoice();

        const roundResult = playRound(userSelection, computerSelection, humanScore, computerScore);
        humanScore = roundResult.humanScore;
        computerScore = roundResult.computerScore;    
    }

    console.group("Scores");
    console.log(`User: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
    
    if (humanScore > computerScore) {
        alert(`You won! \nFinal score: User: ${humanScore}pts. Computer: ${computerScore}pts.`);
    }
    else if (humanScore < computerScore) {
        alert(`You lose! \nFinal score: User: ${humanScore}pts. Computer: ${computerScore}pts.`);
    }
    else {
        alert(`Draw! Try again later. \nFinal score: ${humanScore}pts.`);
    }
}

playGame();