// Elements for buttons and containers pulled
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const highscoresButton = document.getElementById('highscores-btn');
// Timer Variables
const startingTime = 600;
let time = startingTime ;
const timerElement = document.getElementById('timer');

let shuffledQuestions, currentQuestionIndex;

const savedhighscores = "nunya"

highscoresButton.addEventListener('click', savedhighscores)
startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
});

console.log(time)

// Function for the timer
function updatecountdown(wrong,) {
  let timeleft = setInterval(() => {
    time--;
    if(timeleft == 0) {
      clearInterval(timeleft);
      window.alert('Sorry you have ran out of time.');
    }
  }, 1000);
  console.log(timeleft)

  timerElement.innerText = "Timer: " + timeleft;
};

// Function to lose time
function timeloss (){
  timeleft - 5

};



// Function to save score

// Function to start the game
function startGame() {
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
  updatecountdown();
};


//Function to set next question
function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
};

// Function that shows the question
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  });
};

// Function to reset state of quiz
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  };
};

// Function that allows to select answer
function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
};

// Function to set whether answer was correct
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

// Function to clear whether correct or not
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
// Start of questions for quiz
const questions = [
  {
    question: 'What are the boolean values?',
    answers: [
      { text: 'True and False', correct: true },
      { text: 'Yes and now', correct: false },
      { text: 'If and then', correct: false}
    ]
  },
  {
    question: 'What does SQL stand for?',
    answers: [
      { text: 'Structured Query Language', correct: true },
      { text: 'Structured Query Loop', correct: false },
      { text: 'Structured Query Lap', correct: false },
      { text: 'None of the above', correct: false }
    ]
  },
  {
    question: 'An array is enclosed with ____ normally.',
    answers: [
      { text: 'Curly Brackets', correct: false },
      { text: 'Brackets', correct: true },
      { text: 'Quotations', correct: false },
      { text: 'Parenthesis', correct: false }
    ]
  },
  {
    question: 'What benefit does the syntax code console.log() provide?',
    answers: [
      { text: 'No benefits', correct: false },
      { text: 'The ability to automatically fix syntax errors. ', correct: false },
      { text: 'The ability to run the app and see the values via the console in the webpage.', correct: true }
    ]
  },
  {
    question: 'What is/are the proper way/ways to comment code?',
    answers: [
      { text: '//', correct: false},
      { text: '/*,*/', correct: false},
      { text: '<!-- -->', correct: false},
      { text: 'All of the above', correct: true}
    ]
  },
  {
    question: 'What does HTML stand for?',
    answers: [
      { text: 'High Maintenance Material Language', correct: false },
      { text: 'Hypertext Madeup Language', correct: false },
      { text: 'Hypertext Markup Language', correct: true }
    ]
  },
]