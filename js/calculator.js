var s_to_n_map = {
    " ": 0, "0": 0, "+": 0.25, "½": 0.5,
    "1-": 0.75, "1": 1, "1+": 1.25, "1½": 1.5,
    "2-": 1.75, "2": 2, "2+": 2.25, "2½": 2.5,
    "3-": 2.75, "3": 3, "3+": 3.25, "3½": 3.5,
    "4-": 3.75, "4": 4, "4+": 4.25, "4½": 4.5,
    "5-": 4.75, "5": 5, "5+": 5.25, "5½": 5.5,
    "6-": 5.75, "6": 6, "6+": 6.25, "6½": 6.5,
    "7-": 6.75, "7": 7, "7+": 7.25, "7½": 7.5,
    "8-": 7.75, "8": 8, "8+": 8.25, "8½": 8.5,
    "9-": 8.75, "9": 9, "9+": 9.25, "9½": 9.5,
    "10-": 9.75, "10": 10, "10+": 10.25, "10½": 10.5
};

var total = 0;
var questions = [];

function addQuestionScore(s) {
    score = s_to_n_map[s];
    total = total + score;
    i = questions.length;
    questions[i] = score;
    $("#total-score").html(total);
    $("#question-total").remove();
    $("#question-table").append("<tr><td id=\"question" + i + "\">Tehtävä " + (i + 1) + ": " + score + "</td></tr>");
    $("#question-table").append("<tr><td id=\"question-total\">Yhteensä: " + total + "</td></tr>");
    //$("#question" + i).html(score);
};

