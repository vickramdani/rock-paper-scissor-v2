let userScore = 0;
let computerScore = 0;

const userScore_sec = document.getElementById("user-score");
const comScore_sec = document.getElementById("comp-score");
const scoreSheet = document.querySelector(".score-sheet");
const resultText = document.querySelector("#result p")

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

const playAgain = document.querySelector("#result h4");

// computer randomly choose rock, paper, scissor
const computerPlay = (input) => {
    const choose = ['rock', 'paper', 'scissor'];
    const random = choose[Math.floor(Math.random() * choose.length)];
    return random;
}

const winner = (user, comps) => {
    userScore++
    userScore_sec.innerHTML = userScore;
    comScore_sec.innerHTML = computerScore;
    resultText.innerHTML = `COMPUTER CHOOSE ${comps}, YOU WIN!`;
    resultText.style.color = 'green';
    resultText.style.fontSize = '1.5em';
    document.getElementById(user).querySelector(".choose img").classList.add("green")
    setTimeout(function () { document.getElementById(user).querySelector(".choose img").classList.remove("green") }, 500)
    if (userScore > computerScore && userScore === 5) {
        userScore = 0;
        computerScore = 0;
        resultText.innerHTML = "CONGRATULATION, YOU WIN THE GAME!!";
        resultText.style.color = "green";
        resultText.style.fontSize = "1.5em";
        playAgain.innerHTML = "Play again?";
        playAgain.classList.add("replay");

        playAgain.addEventListener("click", () => {
            playAgain.classList.remove("replay")
            playAgain.innerHTML = "";
            userScore_sec.innerHTML = 0;
            comScore_sec.innerHTML = 0;
        });
    }
}

const loser = (user, comps) => {
    computerScore++
    userScore_sec.innerHTML = userScore;
    comScore_sec.innerHTML = computerScore;
    resultText.innerHTML = `COMPUTER CHOOSE ${comps}, YOU LOSE! `;
    resultText.style.color = 'red';
    document.getElementById(user).querySelector(".choose img").classList.add("red")
    setTimeout(function () { document.getElementById(user).querySelector(".choose img").classList.remove("red") }, 500)
    if (userScore < computerScore && computerScore === 5) {
        userScore = 0;
        computerScore = 0;

        resultText.innerHTML = "AWW, YOU LOSE THE GAME!!";
        resultText.style.color = "red";
        resultText.style.fontSize = "1.5em";
        playAgain.innerHTML = "Play again?";
        playAgain.classList.add("replay");

        playAgain.addEventListener("click", () => {
            playAgain.classList.remove("replay")
            playAgain.innerHTML = "";
            userScore_sec.innerHTML = 0;
            comScore_sec.innerHTML = 0;
        })
    }
}

const draw = (user, comps) => {
    userScore_sec.innerHTML = userScore;
    comScore_sec.innerHTML = computerScore;
    resultText.innerHTML = `IT'S A DRAW!`;
    resultText.style.color = 'yellow';
    resultText.style.fontSize = '1.5em';
    document.getElementById(user).querySelector(".choose img").classList.add("yellow");
    setTimeout(function () { document.getElementById(user).querySelector(".choose img").classList.remove("yellow") }, 500);
}

// set the game's rules
const playRound = (playerSelection) => {
    const com = computerPlay();
    if ((playerSelection === 'rock' && com === 'scissor') ||
        (playerSelection === 'paper' && com === 'rock') ||
        (playerSelection === 'scissor' && com === 'paper')
    ) {
        winner(playerSelection, com);
    } else if ((playerSelection === 'rock' && com === 'paper') ||
        (playerSelection === 'paper' && com === 'scissor') ||
        (playerSelection === 'scissor' && com === 'rock')
    ) {
        loser(playerSelection, com);
    } else if (playerSelection === com) {
        draw(playerSelection, com);
    }
}

const playRock = () => {
    playRound('rock');
}

const playPaper = () => {
    playRound('paper');
}

const playScissor = () => {
    playRound('scissor');
}

const game = () => {
    rock.addEventListener("click", playRock, true);

    paper.addEventListener("click", playPaper, true);

    scissor.addEventListener("click", playScissor, true);

}

game();
