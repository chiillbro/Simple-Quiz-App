const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const submitBtn = document.getElementById("submitBtn");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;


const quizQuestions = [
    {
        question: "what is the capital of France?",
        options: ["Berlin", "Madrid", "Rome", "Paris"],
        correctAnswer: "Paris"
    },
    {
        question: "what is the capital of Telangana?",
        options: ["Hyderabad", "Delhi", "Ongole", "Khammam"],
        correctAnswer: "Hyderabad"
    }
]


function loadQuestion(){
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;


    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option,index) =>{
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        
        optionButton.onclick = function(){
            selectAnswer(option, currentQuestion.correctAnswer);
        }
        optionsContainer.appendChild(optionButton);
    })
}

function selectAnswer(selectedOption, correctAnswer){

    if(selectedOption === correctAnswer){
        feedbackElement.textContent = "Correct Answer";
        score++;
    }
    else {
        feedbackElement.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;

    }
    currentQuestionIndex++;

    if (currentQuestionIndex< quizQuestions.length){

        loadQuestion();
    }
    else {
        endQuiz();
    }
}

function endQuiz(){

    quizContainer.innerHTML = "<h2> Quiz Completed</h2>";
    scoreElement.textContent = `Final score: ${score} out of ${quizQuestions.length}`;
}

function submitAnswer(){
    const selectedOption = document.querySelector("input[name = 'option']:checked");
    if (selectedOption){
        selectAnswer(selectedOption.value);
    }
}
loadQuestion();
