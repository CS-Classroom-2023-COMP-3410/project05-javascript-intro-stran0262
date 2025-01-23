const restartBtn = document.getElementById('restartBtn');
const startBtn = document.getElementById('startBtn');
const board = document.getElementById('board');
const timerDisplay = document.getElementById('timer');
const movesDisplay = document.getElementById('moves');

const cards = ['🍎', '🍌', '🥝', '🍊', '🍇', '🍓', '🍋', '🍐'];
let shuffledCards = [];
let flippedCards = [];
let matchedCards = [];
let moves = 0;
let timer = 0;
let timerInterval;
let gameStarted = false;

function startTimer() {
    timerInterval = setInterval(() => {
        timer++;
        timerDisplay.textContent = `Time: ${timer}s`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function shuffleCards() {
    shuffledCards = [...cards, ...cards];
    shuffledCards.sort(() => Math.random() - 0.5);
}

function createBoard() {
    board.innerHTML = '';
    flippedCards = [];
    matchedCards = [];

    shuffledCards.forEach((cardValue, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.setAttribute('data-index', index);
        cardElement.textContent = '';
        cardElement.addEventListener('click', () => flipCard(cardElement, cardValue));

        board.appendChild(cardElement);
    });
}

function flipCard(cardElement, cardValue) {
    if (flippedCards.length === 2 || cardElement.classList.contains('flipped') || cardElement.classList.contains('matched')) return;

    cardElement.textContent = cardValue;
    cardElement.classList.add('flipped');
    flippedCards.push(cardElement);

    if (flippedCards.length === 2) {
        moves++;
        movesDisplay.textContent = `Moves: ${moves}`;
        checkForMatch();
    }
}

function checkForMatch() {
    const [card1, card2] = flippedCards;

    if (card1.textContent === card2.textContent) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCards.push(card1, card2);
    } else {
        setTimeout(() => {
            card1.textContent = '';
            card2.textContent = '';
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
        }, 1000);
    }

    flippedCards = [];

    if (matchedCards.length === shuffledCards.length) {
        stopTimer();
        alert(`Congratulations! You won in ${moves} moves and ${timer} seconds.`);
    }
}

function restartGame() {
    moves = 0;
    timer = 0;
    movesDisplay.textContent = `Moves: 0`;
    timerDisplay.textContent = `Time: 0s`;

    // Hide the game board and show the "Start" button again
    board.classList.add('hidden');
    startBtn.style.display = 'block'; // Show the start button
    restartBtn.style.display = 'none'; // Hide the restart button

    // Reset the shuffled cards and board setup
    shuffledCards = [];
    createBoard(); // Reset the board, but cards are hidden

    // Clear the timer if it is running
    if (gameStarted) {
        clearInterval(timerInterval);
    }

    gameStarted = false; // Set gameStarted to false, preventing the timer from running
}

function startGame() {
    gameStarted = true;
    startBtn.style.display = 'none'; // Hide the start button
    restartBtn.style.display = 'block'; // Show the restart button
    shuffleCards();
    createBoard();

    // Show all cards with their values for 3 seconds
    board.querySelectorAll('.card').forEach((card, index) => {
        card.textContent = shuffledCards[index]; // Reveal the card values
        card.classList.add('flipped');
    });

    // Set timeout to hide cards and start the timer
    setTimeout(() => {
        // Hide all cards after 3 seconds
        board.querySelectorAll('.card').forEach(card => {
            card.textContent = '';
            card.classList.remove('flipped');
        });

        // Start the game timer
        startTimer();
    }, 3000);
}

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', restartGame);

// Initialize game
createBoard();
restartBtn.style.display = 'none'; // Hide the restart button initially
