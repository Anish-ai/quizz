// script.js

const questions = [
  {
    question: "Simple one, When is my birthday?",
    options: ["23/09/05", "23/09/06", "10/05/05", "10/09/06"],
    answer: 0,
  },
  {
    question: "What do I like most 😉?",
    options: ["Bgmi", "Icecream with extra chocolate", "YOU", "Studying 📕"],
    answer: 2,
  },
  {
    question: "Mera phone number ?",
    options: ["9341027733", "9814111852", "8826330855", "9341027738"],
    answer: 3,
  },
  {
    question: "Our first whatsapp chat ?",
    options: ["02/11/22", "05/11/22", "09/11/22", "05/11/23"],
    answer: 2,
  },
  {
    question: "What do I like most ?",
    options: ["Beach", "Mountains", "Snowy place", "Stay home"],
    answer: 2,
  },

  // Add more questions here
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionEls = document.querySelectorAll(".options button");
const messageEl = document.getElementById("message");

function displayQuestion() {
  const question = questions[currentQuestion];
  questionEl.textContent = question.question;
  optionEls.forEach((optionEl, index) => {
    optionEl.textContent = question.options[index];
  });
}

function checkAnswer(selectedOption) {
  console.log(selectedOption);
  if (selectedOption === questions[currentQuestion].answer) {
    if (currentQuestion === 4) {
      score++;
      messageEl.textContent = "Waise anywhere you will take me to 😆";
      messageEl.classList.add("correct");
    } else if (currentQuestion === 1){
      score++;
      messageEl.textContent = "hehe ofcourse 😘";
      messageEl.classList.add("correct");
    }
    else {
      score++;
      messageEl.textContent = "Naimce!";
      messageEl.classList.add("correct");
    }
  } else {
    messageEl.textContent = "Ayee, one more tryy!";
    messageEl.classList.add("wrong");
  }
}

function nextQuestion() {
  // If correct move to next question
  if (messageEl.classList.contains("correct")) {
    currentQuestion++;
  }
  if (currentQuestion === questions.length) {
    // All questions answered
    if (score === questions.length) {
      // All answers correct - redirect to surprise website
      messageEl.textContent = "Good job! CUTIE PATOOTIE!\nWait 5 seconds";
      //wait for 5 seconds
      setTimeout(function () {
        window.location.href = "../book/index.html";
      }, 5000);
    } else {
      messageEl.textContent = `You answered ${score} out of ${questions.length} questions correctly.`;
    }
    // Disable buttons and prevent further interaction
    optionEls.forEach((optionEl) => {
      optionEl.disabled = true;
    });
  } else {
    displayQuestion();
    messageEl.textContent = "";
    messageEl.classList.remove("correct", "wrong");
  }
}

displayQuestion();

optionEls.forEach((optionEl) => {
  optionEl.addEventListener("click", () => {
    const selectedOption = optionEl.textContent;
    checkAnswer(Array.prototype.indexOf.call(optionEls, optionEl));

    setTimeout(nextQuestion, 2000); // Delay for 1 second before showing next question
  });
});
