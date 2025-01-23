let displayValue = ""; // Current display value
let memoryValue = "NaN";   // Memory recall value

// Get necessary elements
const resultInput = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("equals");
const sqrtButton = document.getElementById("sqrt");
const percentButton = document.getElementById("percent");
const memoryRecallButton = document.getElementById("memory-recall");

// Update display
function updateDisplay(value) {
  resultInput.value = value || "0";
}

// Handle button clicks
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    if (value) {
      displayValue += value;
      updateDisplay(displayValue);
    }
  });
});

// Clear the display and reset values
clearButton.addEventListener("click", () => {
  displayValue = "";
  updateDisplay("");
});

// Calculate and display the result
// Calculate and display the result
equalsButton.addEventListener("click", () => {
    try {
      // Check if division by zero occurs
      if (displayValue.includes("/0")) {
        throw new Error("Error");
      }
      displayValue = eval(displayValue).toString(); // Safely evaluate the expression
      updateDisplay(displayValue);
    } catch (error) {
      updateDisplay("Error");
      displayValue = "";
    }
  });

// Square root function
sqrtButton.addEventListener("click", () => {
    try {
      const num = parseFloat(displayValue);
      if (num < 0) {
        throw new Error("Error");
      }
      displayValue = Math.sqrt(num).toString();
      updateDisplay(displayValue);
    } catch (error) {
      updateDisplay("Error");
      displayValue = "";
    }
  });

// Percentage function
percentButton.addEventListener("click", () => {
  try {
    displayValue = (parseFloat(displayValue) / 100).toString();
    updateDisplay(displayValue);
  } catch (error) {
    updateDisplay("Error");
    displayValue = "";
  }
});

// Memory recall function
memoryRecallButton.addEventListener("click", () => {
  displayValue += memoryValue.toString();
  updateDisplay(displayValue);
});

// Update memory value when equals is clicked
equalsButton.addEventListener("click", () => {
  memoryValue = parseFloat(displayValue) || 0;
});
