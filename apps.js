const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
};

if (!score) {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
}

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = ''

    if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            result = 'You lose.'
        } else if (computerMove === 'paper') {
            result = 'You win.'
        } else if (computerMove === 'scissors') {
            result = 'Tie.'
        }

    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'You win.'
        } else if (computerMove === 'paper') {
            result = 'Tie.'
        } else if (computerMove === 'scissors') {
            result = 'You lose.'
        }

    } else if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'Tie.'
        } else if (computerMove === 'paper') {
            result = 'You lose.'
        } else if (computerMove === 'scissors') {
            result = 'You win.'
        }

    }

    if (result === 'You win.') {
        score.wins++
    } else if (result === 'You lose.') {
        score.losses++
    } else if (result === 'Tie.') {
        score.ties++
    }

    localStorage.setItem('score', JSON.stringify(score))

    alert(`You picked ${playerMove}.
    Computer picked ${computerMove}.
    
    ${result}
    
    Wins:${score.wins}
    Losses:${score.losses} 
    Ties: ${score.ties}`);
}
function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = ''

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock'
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper'
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors'
    }
    return computerMove;
}

function updateScore() {
    document.getElementById("win").innerText = `Wins: ${score.wins}`;
    document.getElementById("losses").innerText = `Losses: ${score.losses}`;
    document.getElementById("ties").innerText = `Ties: ${score.ties}`;
}
setInterval(updateScore, 100); // update every 100 milliseconds (1 second)
