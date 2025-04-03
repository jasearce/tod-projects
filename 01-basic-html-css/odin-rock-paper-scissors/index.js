console.log("Hello World!");

function getComputerChoice () {
    let computerChoice = "";
    const randomValue = Math.floor(Math.random() * 3);
    console.log({randomValue});
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
    console.log({computerChoice});
    return computerChoice;
}

function getHumanChoice() {
    let userChoice = prompt("Choose your option (rock, paper, scissors): ");
    console.log({userChoice});
    return userChoice.trim().toLowerCase();
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    const condition1 = "Paper beats Rock";
    const condition2 = "Rock beats Scissors";
    const condition3 = "Scissors beats Paper";
    
    if (humanChoice == computerChoice) {
        console.log("Draw! Try again.");
    }
    if (humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You won! ${condition1}`);
        humanScore++;
    }
    if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log(`You lose! ${condition3}`);
        computerScore++;
    }
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log(`You lose! ${condition1}`);
        computerScore++;
    }
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log(`You won! ${condition2}`);
        humanScore++;
    }
    if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You won! ${condition3}`);
        humanScore++;
    }
    if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log(`You lose! ${condition2}`);
        computerScore++;
    }
    console.log(`Round score User: ${humanScore}pt. Computer: ${computerScore}pt.`);
    
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
        alert(`You won! You got ${humanScore}pts. Computer: ${computerScore}`);
    }
    if (humanScore < computerScore) {
        alert(`You lose! You got ${humanScore}pts. Computer: ${computerScore}`);
    }
    if (humanScore === computerScore) {
        alert(`Draw! Try again later. Score: ${humanScore}`);
    }
}

playGame();