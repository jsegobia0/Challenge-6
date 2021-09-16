// When game Ends, Scores and Initials are Saved to localStorage

function printScore() {
    var highScores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    highScores.sort(function(a, b) {
        return a.score - b.score;
    });
    highScores.forEach(score => {
        var list = document.createElement("li");
        list.textContent = score.initials + " - " + score.score;
        var order = document.getElementById("highscores");
        order.appendChild(list);
    });
}

function clear() {
    window.localStorage.removeItem("highscores");
    window.location,reload();
    document.getElementById("clear").addEventListener("click", clear);
}

printScore();