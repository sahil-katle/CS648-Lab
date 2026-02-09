// Prompt user for choice
let userChoice = prompt("Choose rock, paper, or scissors:").toLowerCase();

// Validate user input
if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
    alert("Invalid choice. Please refresh and choose rock, paper, or scissors.");
} else {
    // Generate computer choice
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice;

    if (randomNum === 0) {
        computerChoice = "rock";
    } else if (randomNum === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    // Determine winner
    let result;

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "rock")
    ) {
        result = "You win!";
    } else {
        result = "Computer wins!";
    }

    // Display result
    alert(
        `You chose ${userChoice}.\nComputer chose ${computerChoice}.\n\n${result}`
    );
}
