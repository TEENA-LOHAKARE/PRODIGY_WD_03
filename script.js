const cells = document.querySelectorAll('.cell');
const gameStatus = document.getElementById('gameStatus');
let currentPlayer = 'X';
let gameState = ["", "", "", "", "", "", "", "", ""];
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

gameStatus.innerText = 'Player ' + currentPlayer + '\'s turn';

function handleCellClick(e) {
    const cell = e.target;
    const cellIndex = parseInt(cell.getAttribute('data-cell-index'));

    if (gameState[cellIndex] !== "" || checkWinner()) {
        return;
    }

    gameState[cellIndex] = currentPlayer;
    cell.innerText = currentPlayer;

    if (checkWinner()) {
        gameStatus.innerText = 'Player ' + currentPlayer + ' wins!';
    } else if (!gameState.includes("")) {
        gameStatus.innerText = 'Draw!';
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        gameStatus.innerText = 'Player ' + currentPlayer + '\'s turn';
    }
}

function checkWinner() {
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return true;
        }
    }
    return false;
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));