let array = [];
let bars = [];
let speed = 100;
let isSorting = false;

document.getElementById("speed").addEventListener("input", function() {
  speed = parseInt(this.value);
});

// Generate a random array
function generateArray(size = 50) {
  array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }
  renderArray();
}

// Render the array as bars
function renderArray() {
  const container = document.getElementById("array-container");
  container.innerHTML = ''; // Clear the container
  bars = [];
  
  array.forEach((value, index) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 3.5}px`; // Scale the height
    bar.setAttribute("data-value", value); // Set the value as a data attribute
    bars.push(bar);
    container.appendChild(bar);
  });
}

// Bubble Sort Algorithm
async function bubbleSort() {
  let n = array.length;
  let commentary = document.getElementById("commentary");
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(j, j + 1);
        renderArray();
        commentary.textContent = `Swapping ${array[j]} and ${array[j + 1]}`;
        await sleep(speed);
      }
    }
  }
  commentary.textContent = "Bubble Sort Completed!";
}

// Insertion Sort Algorithm
async function insertionSort() {
  let commentary = document.getElementById("commentary");
  for (let i = 1; i < array.length; i++) {
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
      renderArray();
      commentary.textContent = `Inserting ${key} into sorted part of the array`;
      await sleep(speed);
    }
    array[j + 1] = key;
  }
  commentary.textContent = "Insertion Sort Completed!";
}

// Selection Sort Algorithm
async function selectionSort() {
  let commentary = document.getElementById("commentary");
  for (let i = 0; i < array.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }

    // Swap the minimum element with the current element
    if (minIdx !== i) {
      [array[i], array[minIdx]] = [array[minIdx], array[i]];
      renderArray(); // Visualize the array after the swap
      commentary.textContent = `Swapping ${array[i]} with ${array[minIdx]}`;
      await sleep(speed);
    }
  }
  commentary.textContent = "Selection Sort Completed!";
}

// Swap array elements and update the DOM
function swap(i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// Helper function to add delays (used for animations)
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Start sorting based on selected algorithm
function startSorting(algorithm) {
  if (isSorting) return;
  isSorting = true;
  if (algorithm === 'bubble') {
    bubbleSort().then(() => isSorting = false);
  } else if (algorithm === 'insertion') {
    insertionSort().then(() => isSorting = false);
  } else if (algorithm === 'selection') {
    selectionSort().then(() => isSorting = false);
  }
}

// Reset the array
function resetArray() {
  if (isSorting) return;
  generateArray();
}

// Initialize the array when the page loads
generateArray();
