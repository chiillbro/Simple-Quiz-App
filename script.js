const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

const quizQuestions = [
  {
    question: "what is the capital of France?",
    options: [
      { option: "Nice", correct: false },
      { option: "Paris", correct: true },
      { option: "Lyon", correct: false },
      { option: "Marseille", correct: false },
    ],
  },
  {
    question: "Which is the smallest continent in the World?",
    options: [
      { option: "Asia", correct: false },
      { option: "Arctic", correct: false },
      { option: "Australia", correct: true },
      { option: "Africa", correct: false },
    ],
  },
  {
    question: "Which is the largest desert in the World?",
    options: [
      { option: "Kalahari", correct: false },
      { option: "Gobi", correct: false },
      { option: "Sahara", correct: false },
      { option: "Antarctic", correct: true },
    ],
  },
];

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerText = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = quizQuestions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;
  currentQuestion.options.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.option;
    button.classList.add("btn");
    optionsContainer.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (optionsContainer.firstChild) {
    optionsContainer.removeChild(optionsContainer.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(optionsContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerText = `You scored ${score} out of ${quizQuestions.length}`;
  nextButton.innerText = "Play Again";
  nextButton.style.display = "block";
}
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < quizQuestions.length) {
    nextQuestion();
  } else {
    startQuiz();
  }
});

startQuiz();

/* function loadQuestion() {
 const currentQuestion = quizQuestions[currentQuestionIndex];
questionElement.textContent = currentQuestion.question
   optionsContainer.innerHTML = ""
   currentQuestion.options.forEach((option, index) => {
     const optionButton = document.createElement("button");
     optionButton.textContent = option
     optionButton.onclick = function () {
       selectAnswer(option, currentQuestion.correctAnswer);
     };
     optionsContainer.appendChild(optionButton);
   });
 
 function selectAnswer(selectedOption, correctAnswer) {
   if (selectedOption === correctAnswer) {
     feedbackElement.textContent = "Correct Answer";
     score++;
   } else {
     feedbackElement.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
   }
   currentQuestionIndex++
   if (currentQuestionIndex < quizQuestions.length) {
     loadQuestion();
   } else {
     endQuiz();
   }
 
 function endQuiz() {
   quizContainer.innerHTML = "<h2> Quiz Completed</h2>";
   scoreElement.textContent = `Final score: ${score} out of ${quizQuestions.length}`;
 
 function submitAnswer() {
   const selectedOption = document.querySelector(
     "input[name = 'option']:checked"
   );
   if (selectedOption) {
     selectAnswer(selectedOption.value);
   }
 }
 loadQuestion() */
