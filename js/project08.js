// Store the game's story structure and choices
const storyData = {
  start: {
    text: 'You wake up in a dense, magical forest. The sun peeks through the canopy, and you clutch a mysterious key in your hand. A soft voice whispers in the air, "Find the Door, unlock the truth." What will you do?',
    step: 1,
    choices: [
      { text: "Inspect the key", next: "inspectKey" },
      { text: "Explore the forest", next: "exploreForest" }
    ]
  },
  inspectKey: {
    text: 'The key glows faintly, etched with ancient runes. Suddenly, it grows warm, and a glowing arrow appears on the ground, pointing north.',
    step: 2,
    choices: [
      { text: "Follow the arrow", next: "followArrow" },
      { text: "Ignore the arrow and go east instead", next: "ignoreArrow" }
    ]
  },
  exploreForest: {
    text: 'You wander through towering trees and hear a faint sound of laughter. It could be fairies—or something else.',
    step: 3,
    choices: [
      { text: "Follow the laughter", next: "followLaughter" },
      { text: "Keep your distance and move quietly", next: "keepDistance" }
    ]
  },
  followArrow: {
    text: 'The arrow leads you to a stone pedestal with a glowing inscription: "The brave solve the riddle. The faint-hearted leave." The riddle reads: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?"',
    step: 4,
    choices: [
      { text: "Answer: An Echo", next: "answer" },
      { text: "Smash the pedestal in frustration", next: "smash" }
    ]
  },
  answer: {
    text: 'The pedestal slides open, revealing a hidden stairway. You descend into a golden chamber, where you find the Door of Orindar. However, the key begins to shake violently.',
    step: 5,
    choices: [
      { text: "Insert the key into the door", next: "insertKey" },
      { text: "Step back and leave it untouched", next: "stepBack" }
    ]
  },
  smash: {
    text: 'The pedestal explodes, releasing a magical trap. You’re teleported back to your bed. Was it a dream?',
    step: 6,
    choices: [
      { text: "Start over", next: "start" }
    ]
  },
  ignoreArrow: {
    text: 'You walk east and fall into a pit! At the bottom lies a treasure chest, but it’s locked. You try your key, and it fits perfectly. Inside is… a dragon egg.',
    step: 7,
    choices: [
      { text: "Take the egg", next: "takeEgg" },
      { text: "Leave the egg and explore further", next: "leaveEgg" }
    ]
  },
  takeEgg: {
    text: 'The egg begins to crack, and before you can react, it hatches into a furious baby dragon. Its eyes burn with rage, and before you can even defend yourself, it unleashes a blast of fire that consumes you.',
    step: 8,
    choices: [
      { text: "Start over", next: "start" }
    ]
  },
  leaveEgg: {
    text: 'You climb out of the pit, but the chest collapses behind you. You wander the forest endlessly.',
    step: 9,
    choices: [
      { text: "Start over", next: "start" }
    ]
  },
  followLaughter: {
    text: 'The laughter belongs to mischievous fairies! They demand a trade: the key for safe passage out of the forest.',
    step: 10,
    choices: [
      { text: "Trade the key", next: "trade" },
      { text: "Refuse and run away", next: "refuse" }
    ]
  },
  trade: {
    text: 'The fairies let you go, but without the key, the Door remains lost to you forever.',
    step: 11,
    choices: [
      { text: "Start over", next: "start" }
    ]
  },
  refuse: {
    text: 'The fairies curse you to become a tree. You take root in the forest, guarding its secrets for eternity.',
    step: 12,
    choices: [
      { text: "Start over", next: "start" }
    ]
  },
  keepDistance: {
    text: 'You stay quiet, but a shadow moves behind you. A troll blocks your path and demands a password.',
    step: 13,
    choices: [
      { text: 'Say: "Friendship"', next: "friendship" },
      { text: 'Attack the troll with the key', next: "attack" }
    ]
  },
  friendship: {
    text: 'The troll steps aside, revealing the Door of Orindar.',
    step: 14,
    choices: [
      { text: 'Use the key to open the door.', next: "insertKey" }
    ]
  },
  attack: {
    text: 'The troll swats you away like a fly, and you lose the key. You never find the door.',
    step: 15,
    choices: [
      { text: 'Start over', next: "start" }
    ]
  },
  insertKey: {
    text: 'The door creaks open, revealing a magical kingdom of infinite beauty. You are hailed as the chosen one.',
    step: 16,
    choices: [
      { text: 'You win!', next: "end" }
    ]
  },
  stepBack: {
    text: 'The key vanishes from your hand, and the door seals forever. You return to the forest, wiser but empty-handed.',
    step: 17,
    choices: [
      { text: 'Start over', next: "start" }
    ]
  },
  end: {
      text: "The journey ends here. Thank you for playing.",
      step: 18,
      choices: []
  }
};

// Track the game state
let currentLocation = "start";
let gameProgress = [];

// Function to update the game state and display new story text and choices
function updateGame() {
const currentStory = storyData[currentLocation];
const storyText = document.getElementById("story");
const choicesContainer = document.getElementById("choices");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");
const totalSteps = 17;

// Update story text
storyText.innerHTML = currentStory.text;

// Clear previous choices and create new ones
choicesContainer.innerHTML = "";
currentStory.choices.forEach(choice => {
  const button = document.createElement("button");
  button.innerText = choice.text;
  button.onclick = () => makeChoice(choice.next);
  choicesContainer.appendChild(button);
});

// Update progress bar

const progress = ((currentStory.step - 1) / totalSteps) * 100; // Calculate the progress percentage
progressBar.value = progress;
progressText.innerText = `${Math.round(progress)}%`;
}

// Handle choice selection
function makeChoice(nextLocation) {
  gameProgress.push(currentLocation);  // Track the current location
  currentLocation = nextLocation;  // Move to the next location
  updateGame();
}

// Reset the game
function resetGame() {
  currentLocation = "start";
  gameProgress = [];
  updateGame();
}

// Save progress to localStorage
function saveProgress() {
  localStorage.setItem("gameProgress", JSON.stringify(gameProgress));
  localStorage.setItem("currentLocation", currentLocation);
  alert("Progress saved!");
}

// Resume progress from localStorage
function resumeProgress() {
  const savedProgress = localStorage.getItem("gameProgress");
  const savedLocation = localStorage.getItem("currentLocation");

  if (savedProgress && savedLocation) {
    gameProgress = JSON.parse(savedProgress);
    currentLocation = savedLocation;
    updateGame();
  } else {
    alert("No saved progress found.");
  }
}

// Initialize the game
updateGame();
