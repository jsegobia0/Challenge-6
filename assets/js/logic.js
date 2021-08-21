var questions = $('questions');
var timer = $('timer');
var choices = $('choices');
var submit = $('submit');
var start = $('start');
var initials = $('initials');
var feedback = $('feedback');

var currentQuestionIndex = 0;
var timerId;
var time = questions.length * 15;

function startQuiz() {
    var startScreen = $('start-screen');
    startScreen.attr("class", "hide");
    questions.removeAttr("class");
    timer = setInterval(clockTick, 1000);
    timer.textcontent = time;
    getQuestions();
};

function clockTick() {
    time--;
    timer.textcontent = time;
    if (time <= 0) {
        quizEnd();
    }
};

function getQuestions() {
    var currentQuestion = questions[currentQuestionIndex];
    var title = $("question-title");
    title.textcontent = currentQuestion.title;
    choices.innerHTML = "";
    currentQuestion.choices.forEach(function(choice, 1) {
        var choiceNode = ;        
    });
}