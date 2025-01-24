// Quiz questions by subject
const questionsBySubject = {
  literature: [
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Jane Austen", "Charles Dickens", "Charles Dickens"],
      correctAnswer: 0,
      explanation: "William Shakespeare wrote 'Romeo and Juliet', one of his most famous tragedies.",
    },
    {
      question: "What is the primary theme of Shakespeare's 'Macbeth'?",
      options: ["Ambition", "Love", "Revenge", "Fate"],
      correctAnswer: 0,
      explanation: "The primary theme of 'Macbeth' is ambition, which drives Macbeth to commit horrific acts.",
    },    
    {
      question: "Which of the following novels was written by George Orwell?",
      options: ["Brave New World", "1984", "Moby Dick", "Pride and Prejudice"],
      correctAnswer: 1,
      explanation: "George Orwell wrote '1984', a dystopian novel about totalitarianism and surveillance.",
    },
    {
      question: "In 'The Great Gatsby', what is the name of Gatsby's love interest?",
      options: ["Daisy Buchanan", "Elizabeth Bennet", "Juliet Capulet", "Catherine Earnshaw"],
      correctAnswer: 0,
      explanation: "In 'The Great Gatsby', Daisy Buchanan is the object of Gatsby's love and desire.",
    },
    {
      question: "Who is the protagonist in Mary Shelley's 'Frankenstein'?",
      options: ["Dr. Jekyll", "Dr. Watson", "Victor Frankenstein", "Sherlock Holmes"],
      correctAnswer: 2,
      explanation: "Victor Frankenstein is the protagonist in Mary Shelley's 'Frankenstein', the scientist who creates the monster.",
    }
  ],
  math: [
    {
      question: "What is the derivative of e^(3x)?",
      options: ["3e^(3x)", "e^(3x)", "e^(x)", "3x"],
      correctAnswer: 0,
      explanation: "The derivative of e^(ax) is a*e^(ax). So, the derivative of e^(3x) is 3e^(3x).",
    },
    {
      question: "Which of the following is a prime number?",
      options: ["15", "18", "19", "21"],
      correctAnswer: 2,
      explanation: "19 is a prime number because it is divisible only by 1 and itself.",
    },
    {
      question: "What is the value of pi up to 3 decimal places?",
      options: ["3.141", "3.111", "3.145", "3.151"],
      correctAnswer: 0,
      explanation: "Pi (π) is approximately 3.141, a fundamental constant in mathematics used in geometry.",
    },
    {
      question: "The sum of angles in a triangle is always equal to what?",
      options: ["90 degrees", "180 degrees", "360 degrees", "270 degrees"],
      correctAnswer: 1,
      explanation: "The sum of angles in any triangle is always 180 degrees, a fundamental rule in geometry.",
    },
    {
      question: "What is the solution to the equation 5x - 3 = 17?",
      options: ["x = 3", "x = 5", "x = 2", "x = 4"],
      correctAnswer: 3,
      explanation: "The solution to 5x - 3 = 17 is x = 4, obtained by solving the equation.",
    }
  ],
  history: [
    {
      question: "In which year did the American Civil War begin?",
      options: ["1776", "1812", "1861", "1900"],
      correctAnswer: 2,
      explanation: "The American Civil War began in 1861 and ended in 1865.",
    },
    {
      question: "Which ancient civilization built the pyramids of Giza?",
      options: ["Ancient Egypt", "Ancient Greece", "Ancient Rome", "Ancient Mesopotamia"],
      correctAnswer: 0,
      explanation: "The ancient Egyptians built the pyramids of Giza as tombs for their pharaohs",
    },
    {
      question: "In which year did World War II begin?",
      options: ["1929", "1935", "1939", "1941"],
      correctAnswer: 2,
      explanation: "World War II began in 1939 when Germany invaded Poland, triggering a global conflict.",
    },
    {
      question: "Who was the first president of the United States?",
      options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
      correctAnswer: 0,
      explanation: "George Washington was the first president of the United States, serving from 1789 to 1797.",
    },
    {
      question: "Who was the leader of the Soviet Union during the Cuban Missile Crisis?",
      options: ["Joseph Stalin", "Nikita Khrushchev", "Leonid Brezhnev", "Mikhail Gorbachev"],
      correctAnswer: 1,
      explanation: "Nikita Khrushchev was the Soviet leader during the Cuban Missile Crisis in 1962.",
    }
  ],
  geography: [
    {
      question: "What is the capital city of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: 2,
      explanation: "Paris is the capital and largest city of France.",
    },
    {
      question: "Which country has the largest population in the world?",
      options: ["India", "United States", "Russia", "China "],
      correctAnswer: 3,
      explanation: "China has the largest population in the world, with over 1.4 billion people",
    },
    {
      question: "What is the longest river in the world?",
      options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
      correctAnswer: 1,
      explanation: "The Nile River is traditionally considered the longest river in the world, running through northeastern Africa",
    },
    {
      question: "Which desert is the largest in the world?",
      options: ["Sahara Desert", "Gobi Desert", "Kalahari Desert", "Arabian Desert"],
      correctAnswer: 0,
      explanation: "The Sahara Desert is the largest hot desert in the world, covering much of North Africa.",
    },
    {
      question: "Mount Everest is located in which two countries?",
      options: ["India and Nepal", "China and Nepal", "India and China", "Pakistan and Nepal"],
      correctAnswer: 1,
      explanation: "Mount Everest lies on the border between China and Nepal, making it the highest peak in the world.",
    }
  ],
  science: [
    {
      question: "What is the atomic number of carbon?",
      options: ["6", "8", "12", "16"],
      correctAnswer: 0,
      explanation: "Carbon has the atomic number 6.",
    },
    {
      question: "Which part of the cell contains the genetic material?",
      options: ["Cytoplasm", "Mitochondria", "Ribosome", "Nucleus"],
      correctAnswer: 3,
      explanation: "The nucleus contains the genetic material (DNA) in eukaryotic cells, controlling cell functions.",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Hg", "Fe"],
      correctAnswer: 0,
      explanation: "The chemical symbol for gold is Au, derived from the Latin word aurum.",
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria ", "Ribosome", "Endoplasmic Reticulum"],
      correctAnswer: 1,
      explanation: "The mitochondria are known as the powerhouse of the cell because they generate most of the cell's energy.",
    },
    {
      question: "Which of the following is a gas at room temperature?",
      options: ["Water", "Mercury", "Oxygen", "Sodium"],
      correctAnswer: 2,
      explanation: "Oxygen is a gas at room temperature, essential for respiration in most living organisms.",
    }
  ],
};

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let currentQuestions = [];

// Start quiz with selected subject
function startQuiz(subject) {
  currentQuestions = questionsBySubject[subject];
  document.getElementById("main-menu").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  updateQuestion();
}

// Update question
function updateQuestion() {
  const questionObj = currentQuestions[currentQuestionIndex];
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");

  questionElement.innerText = questionObj.question;
  optionsElement.innerHTML = "";
  questionObj.options.forEach((option, index) => {
    const optionElement = document.createElement("li");
    optionElement.innerText = option;
    optionElement.addEventListener("click", () => handleAnswer(index));
    optionsElement.appendChild(optionElement);
  });
}

// Handle user's answer
function handleAnswer(selectedIndex) {
  const questionObj = currentQuestions[currentQuestionIndex];
  const isCorrect = selectedIndex === questionObj.correctAnswer;
  userAnswers.push({ questionIndex: currentQuestionIndex, selectedIndex, isCorrect });

  if (isCorrect) {
    score++;
  }

  // Move to the next question or finish quiz
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuestions.length) {
    updateQuestion();
  } else {
    showScore();
  }
}

// Show score
function showScore() {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `Your Score: ${score}/${currentQuestions.length}`;
  document.getElementById("reviewButton").style.display = "block";
}

// Review answers
function reviewAnswers() {
  const reviewElement = document.getElementById("review");
  reviewElement.innerHTML = ""; // Clear previous review
  userAnswers.forEach((answer) => {
    const questionObj = currentQuestions[answer.questionIndex];
    const resultText = answer.isCorrect ? "Correct" : "Incorrect";
    const explanationText = questionObj.explanation;

    const reviewItem = document.createElement("div");

    // Determine if the answer is correct or incorrect
    const resultStyle = resultText === "Correct" ? "color: black; font-weight: normal;" : "color: red; font-weight: bold;";

    reviewItem.innerHTML = `
      <p><strong>Question:</strong> ${questionObj.question}</p>
      <p><strong>Your Answer:</strong> ${questionObj.options[answer.selectedIndex]}</p>
      <p><strong>Result:</strong> <span style="${resultStyle}">${resultText}</span></p>
      <p><strong>Explanation:</strong> ${explanationText}</p>
      <hr>`;
    reviewElement.appendChild(reviewItem);
  });
}

// Go back to the main menu
function goBack() {

  // Clear the result and review content
  document.getElementById('result').innerHTML = '';
  document.getElementById('review').innerHTML = '';

  // Hide the quiz section and review answer button and show the main menu
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('reviewButton').style.display = 'none';
  document.getElementById('main-menu').style.display = 'block';
}
