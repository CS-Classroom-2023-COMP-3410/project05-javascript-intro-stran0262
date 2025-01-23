const questions = [
    {
      question: "What is the primary theme of Shakespeare's 'Macbeth'?",
      options: ["Ambition", "Love", "Revenge", "Fate"],
      correctAnswer: 0,
      explanation: "The primary theme of 'Macbeth' is ambition, which drives Macbeth to commit horrific acts."
    },
    {
      question: "What is the derivative of e^(3x)?",
      options: ["3e^(3x)", "e^(3x)", "e^(x)", "3x"],
      correctAnswer: 0,
      explanation: "The derivative of e^(ax) is a*e^(ax). So, the derivative of e^(3x) is 3e^(3x)."
    },
    {
      question: "In which year did the American Civil War begin?",
      options: ["1776", "1812", "1861", "1900"],
      correctAnswer: 2,
      explanation: "The American Civil War began in 1861 and ended in 1865."
    },
    {
      question: "What is the capital city of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: 2,
      explanation: "Paris is the capital and largest city of France."
    },
    {
      question: "What is the atomic number of carbon?",
      options: ["6", "8", "12", "16"],
      correctAnswer: 0,
      explanation: "Carbon has the atomic number 6."
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let userAnswers = [];
  
  function updateQuestion() {
    const questionObj = questions[currentQuestionIndex];
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
  
  function handleAnswer(selectedIndex) {
    const questionObj = questions[currentQuestionIndex];
    const isCorrect = selectedIndex === questionObj.correctAnswer;
    userAnswers.push({ questionIndex: currentQuestionIndex, selectedIndex, isCorrect });
  
    if (isCorrect) {
      score++;
    }
  
    // Move to the next question or finish quiz
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      updateQuestion();
    } else {
      showScore();
    }
  }
  
  function showScore() {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Your Score: ${score}/${questions.length}`;
    document.getElementById("reviewButton").style.display = "block"; // Show review button
  }
  
  function reviewAnswers() {
    const reviewElement = document.getElementById("review");
    reviewElement.innerHTML = ""; // Clear previous review
    userAnswers.forEach((answer) => {
      const questionObj = questions[answer.questionIndex];
      const resultText = answer.isCorrect ? "Correct" : "Incorrect";
      const explanationText = questionObj.explanation;
  
      const reviewItem = document.createElement("div");
      reviewItem.innerHTML = `
        <p><strong>Question:</strong> ${questionObj.question}</p>
        <p><strong>Your Answer:</strong> ${questionObj.options[answer.selectedIndex]}</p>
        <p><strong>Result:</strong> ${resultText}</p>
        <p><strong>Explanation:</strong> ${explanationText}</p>
      <br>`;
      reviewElement.appendChild(reviewItem);
    });
  }
  
  updateQuestion();
  