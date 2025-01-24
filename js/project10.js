let startBtn = document.getElementById('startBtn');
let restartBtn = document.getElementById('restartBtn');
let startOverBtn = document.getElementById('startOverBtn');
let difficultySelect = document.getElementById('difficulty');
let userInput = document.getElementById('userInput');
let textToType = document.getElementById('textToType');
let wpmDisplay = document.getElementById('wpm');
let accuracyDisplay = document.getElementById('accuracy');
let exerciseArea = document.getElementById('exerciseArea');
let results = document.getElementById('results');
let totalTimeDisplay = document.getElementById('totalTime');
let finalWpmDisplay = document.getElementById('finalWpm');
let finalAccuracyDisplay = document.getElementById('finalAccuracy');

let timer;
let startTime;
let currentText;
let totalTyped = 0;
let correctTyped = 0;
let timerRunning = false;

const texts = {
    easy: [
        "The cat sleeps on the mat.",
        "I enjoy reading books in the park.",
        "The sun shines brightly today.",
        "She likes to walk her dog every morning.",
        "My phone is on the table."
    ],
    medium: [
        "The quick brown fox jumps over the lazy dog in the yard.",
        "She asked me to meet her at the coffee shop near the library.",
        "The weather forecast predicts rain later this evening.",
        "He finished his work just before the deadline arrived.",
        "They decided to take a road trip across the country this summer."
    ],
    hard: [
        "Despite the pouring rain, we managed to finish the marathon with determination and a sense of accomplishment.",
        "The intricate design of the ancient architecture reflects the advanced engineering skills of civilizations long gone.",
        "After hours of research, the scientist uncovered an unexpected correlation between the two variables, which might change current theories.",
        "She hesitated, knowing that making the wrong choice could affect not only her future but also the lives of those around her.",
        "The annual conference, which attracts experts from around the world, provides a unique platform for networking and knowledge exchange."
    ]
};

function startExercise() {
    startBtn.style.display = 'none'; // Hide start button
    exerciseArea.classList.remove('hidden');
    results.classList.add('hidden');
    userInput.value = "";
    userInput.focus();

    // Get a random sentence from the selected difficulty category
    const selectedCategory = difficultySelect.value;
    const randomIndex = Math.floor(Math.random() * texts[selectedCategory].length);
    currentText = texts[selectedCategory][randomIndex];
    
    textToType.innerText = currentText;

    totalTyped = 0;
    correctTyped = 0;
    timerRunning = true;
    startTime = new Date();

    timer = setInterval(updateStats, 1000);
}


function updateStats() {
    if (!timerRunning) return;

    const elapsedTime = Math.floor((new Date() - startTime) / 1000);
    const wpm = Math.floor((correctTyped / 5) / (elapsedTime / 60));
    const accuracy = Math.round((correctTyped / totalTyped) * 100) || 0;

    wpmDisplay.innerText = wpm;
    accuracyDisplay.innerText = accuracy;

    if (userInput.value.length >= currentText.length) {
        finishExercise(elapsedTime);
    }
}

function finishExercise(elapsedTime) {
    clearInterval(timer);
    timerRunning = false;
    totalTimeDisplay.innerText = elapsedTime;
    finalWpmDisplay.innerText = wpmDisplay.innerText;
    finalAccuracyDisplay.innerText = accuracyDisplay.innerText;
    results.classList.remove('hidden');
}

function restartExercise() {
    startExercise();
}

function handleInput() {
    let typed = userInput.value;
    totalTyped = typed.length;

    correctTyped = 0;
    let highlightedText = "";

    // Compare typed text with the original text character by character
    for (let i = 0; i < currentText.length; i++) {
        if (i < typed.length && typed[i] === currentText[i]) {
            // Correct character
            highlightedText += `<span class="correct">${currentText[i]}</span>`;
            correctTyped++;
        } else if (i < typed.length) {
            // Incorrect character
            highlightedText += `<span class="incorrect">${currentText[i]}</span>`;
        } else {
            // Not typed yet, just show the character normally
            highlightedText += currentText[i];
        }
    }

    // Update the text to be typed with the highlighted characters
    textToType.innerHTML = highlightedText;
    updateStats();
}

startBtn.addEventListener('click', startExercise);
restartBtn.addEventListener('click', restartExercise);
startOverBtn.addEventListener('click', () => {
    results.classList.add('hidden');
    exerciseArea.classList.add('hidden');
    startBtn.style.display = 'block';
});

userInput.addEventListener('input', handleInput);
