var questions = document.getElementById("questions");
var timer = document.getElementById("timer");
var choices = document.getElementById("choices");
var submit = document.getElementById("submit");
var start = document.getElementById("start");
var initials = document.getElementById("initials");
var feedback = document.getElementById("feedback");

var currentQuestionIndex = 0;
var timerId;
var time = 75;

function startQuiz() {
    var startScreen = document.getElementById("start-screen");
    startScreen.setAttribute("class", "hide");
    questions.removeAttribute("class");
    timerId = setInterval(clockTick, 1000);
    timer.textContent = time;
    getQuestions();
};

function clockTick() {
    time--;
    timer.textContent = time;
    if (time <= 0) {
        end();
    }
}

function getQuestions() {
    var currentQuestion = questions[currentQuestionIndex];
    var title = document.getElementById("question-title");
    title.textContent = currentQuestion.title;
    choices.innerHTML = "";
    currentQuestion.choices.forEach(function(choice, i) {
        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("class", "choice");
        choiceBtn.setAttribute("value", choice);
        choiceBtn.textContent = i + 1 + ". " + choice;
        choiceBtn.addEventListener("click", click);
        choices.appendChild(choiceBtn);
    });
}

function click() {
    if (this.value !== questions[currentQuestionIndex].answer) {
        time -= 5;
        if (time < 0) {
            time = 0;
        }
        timer.textContent = time;
        feedback.textContent = "Wrong Answer";
    } else {
        feedback.textContent = "Correct Answer";
    }
    feedback.setAttribute("class", "feedback");
    setTimeout(() => {
        feedback.setAttribute("class", "feedback hide");
    }, 1000);
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
        endQuiz();
    } else {
        getQuestions();
    }
}

function endQuiz() {
    clearInterval(timerId);
    var endScreen = document.getElementById("end-screen");
    endScreen.removeAttribute("class");
    var score = document.getElementById("final-score");
    score.textContent = time;
    questions.setAttribute("class", "hide");
}

function save() {
    var initials = initials.value.trim();
    if (initials !== "") {
        var highScores = JSON.parse(window.localStorage.getItem("highscores")) || [];
        var newHighScore = {
            score: time,
            initials: initials
        };
        highScores.push(newHighScore);
        window.localStorage.setItem("highscores", JSON.stringify(highScores));
        window.location.href = "highscores.html";
    }
}

submit.addEventListener("click", save);
start.addEventListener("click", startQuiz);