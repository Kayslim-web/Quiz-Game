document.getElementById('start-button').addEventListener('click', startGame);

const questions = {
    "US States Capitals": {
        question: "What is the capital of New York?",
        answer: "Albany"
    },
    "Country Capitals": {
        question: "What is the capital of France?",
        answer: "Paris"
    }
};

let selectedCategory = '';
let userAnswer = '';

function startGame() {
    document.getElementById('welcome-message').innerText = "Hello friend! Welcome to the quiz game.";
    document.getElementById('quiz-content').classList.remove('hidden');
}

document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', selectCategory);
});

function selectCategory(event) {
    selectedCategory = event.target.id === 'us-states-capitals' ? "US States Capitals" : "Country Capitals";
    document.getElementById('question-container').classList.remove('hidden');
    document.getElementById('question').innerText = questions[selectedCategory].question;
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);

function checkAnswer() {
    userAnswer = document.getElementById('answer-input').value.trim();
    const correctAnswer = questions[selectedCategory].answer;

    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').innerText = "Correct!";
    } else {
        document.getElementById('feedback').innerText = "Incorrect!";
    }
}