document.getElementById('start-button').addEventListener('click', startGame);

const questions = {
    "US States Capitals": [{
        question: "What is the capital of New York?",
        answer: "Albany"
    },
    {
        question: "What is the capital of New Jersey?",
        answer: "Trenton"
    },
    {
        question: "What is the capital of ohio",
        answer: "Columbus"
    },
    {
        question: "What is the capital of Maryland?",
        answer: "Annapolis"
    }],
    "Country Capitals": [{
        question: "What is the capital of France?",
        answer: "Paris"
    },
    {
        question: "What is the capital of Ghana?",
        answer: "Accra"
    },
    {
        question: "What is the capital of Germany?",
        answer: "Berlin"
    },
    {
        question: "What is the capital of Brazil?",
        answer: "Brasilia"
    }]
};
let score = 0
let questionsIndex = 0;
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
    questionsIndex = 0;
    score = 0;
    selectedCategory = event.target.id === 'us-states-capitals' ? "US States Capitals" : "Country Capitals";
    document.getElementById('question-container').classList.remove('hidden');
    document.getElementById('question').innerText = questions[selectedCategory][questionsIndex].question;
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);

function checkAnswer() {
    userAnswer = document.getElementById('answer-input').value.trim();
    const correctAnswer = questions[selectedCategory][questionsIndex].answer;

    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').innerText = "Correct!";
        score += 1;
    } else {
        document.getElementById('feedback').innerText = "Incorrect!";
    }
    // clear current answer

    const selectedCategoryQuestions = questions[selectedCategory];
    if (questionsIndex + 1 < selectedCategoryQuestions.length) {
        questionsIndex += 1;
        document.getElementById('question').innerText = selectedCategoryQuestions[questionsIndex].question;
    } else {
        document.getElementById('feedback').innerText
        //calulate score percentage
        const finalScore = (score / selectedCategoryQuestions.length) * 100

        //display score
        document.getElementById('question').innerText = `Final score ${finalScore}`;
        // todo add a congratulation message here!
    }
}
