var correct = 0;
var incorrect = 0;
var unanswered = 0;
var counter = 120;

window.onload = function() {
    $("#hidden").hide();
  };
    


function startGame() {
    $("#hidden").show();
    $("#hiddenTwo").hide();
    
    setInterval(timer, 1000);
    function timer() {
        counter--;
        $("#counter").text(counter);
    }
}


function questions() {
    var correctAnswer = document.getElementById("correct1");
    var isChecked = $('input:radio[name="optradio1"]:checked').val();

    if (correctAnswer.checked === true) {
        correct++;
        $("#correctAnswers").text(correct);
    }
    if (!isChecked) {
        unanswered++
        $("#unanswered").text(unanswered);
    } else if (correctAnswer.checked !== true) {
        incorrect++;
        $("#incorrectAnswers").text(incorrect);
    }


    var correctAnswer = document.getElementById("correct2");
    var isChecked = $('input:radio[name="optradio2"]:checked').val();

    if (correctAnswer.checked === true) {
        correct++;
        $("#correctAnswers").text(correct);
    }
    if (!isChecked) {
        unanswered++
        $("#unanswered").text(unanswered);
    } else if (correctAnswer.checked !== true) {
        incorrect++;
        $("#incorrectAnswers").text(incorrect);
    }


    var correctAnswer = document.getElementById("correct3");
    var isChecked = $('input:radio[name="optradio3"]:checked').val();

    if (correctAnswer.checked === true) {
        correct++;
        $("#correctAnswers").text(correct);
    }
    if (!isChecked) {
        unanswered++
        $("#unanswered").text(unanswered);
    } else if (correctAnswer.checked !== true) {
        incorrect++;
        $("#incorrectAnswers").text(incorrect);
    }


    var correctAnswer = document.getElementById("correct4");
    var isChecked = $('input:radio[name="optradio4"]:checked').val();

    if (correctAnswer.checked === true) {
        correct++;
        $("#correctAnswers").text(correct);
    }
    if (!isChecked) {
        unanswered++
        $("#unanswered").text(unanswered);
    } else if (correctAnswer.checked !== true) {
        incorrect++;
        $("#incorrectAnswers").text(incorrect);
    }


    var correctAnswer = document.getElementById("correct5");
    var isChecked = $('input:radio[name="optradio5"]:checked').val();

    if (correctAnswer.checked === true) {
        correct++;
        $("#correctAnswers").text(correct);
    }
    if (!isChecked) {
        unanswered++
        $("#unanswered").text(unanswered);
    } else if (correctAnswer.checked !== true) {
        incorrect++;
        $("#incorrectAnswers").text(incorrect);
    }


    var correctAnswer = document.getElementById("correct6");
    var isChecked = $('input:radio[name="optradio6"]:checked').val();

    if (correctAnswer.checked === true) {
        correct++;
        $("#correctAnswers").text(correct);
    }
    if (!isChecked) {
        unanswered++
        $("#unanswered").text(unanswered);
    } else if (correctAnswer.checked !== true) {
        incorrect++;
        $("#incorrectAnswers").text(incorrect);
    }


    var correctAnswer = document.getElementById("correct7");
    var isChecked = $('input:radio[name="optradio7"]:checked').val();

    if (correctAnswer.checked === true) {
        correct++;
        $("#correctAnswers").text(correct);
    }
    if (!isChecked) {
        unanswered++
        $("#unanswered").text(unanswered);
    } else if (correctAnswer.checked !== true) {
        incorrect++;
        $("#incorrectAnswers").text(incorrect);
    }


    var correctAnswer = document.getElementById("correct8");
    var isChecked = $('input:radio[name="optradio8"]:checked').val();

    if (correctAnswer.checked === true) {
        correct++;
        $("#correctAnswers").text(correct);
    }
    if (!isChecked) {
        unanswered++
        $("#unanswered").text(unanswered);
    } else if (correctAnswer.checked !== true) {
        incorrect++;
        $("#incorrectAnswers").text(incorrect);
    }


    var correctAnswer = document.getElementById("correct9");
    var isChecked = $('input:radio[name="optradio9"]:checked').val();

    if (correctAnswer.checked === true) {
        correct++;
        $("#correctAnswers").text(correct);
    }
    if (!isChecked) {
        unanswered++
        $("#unanswered").text(unanswered);
    } else if (correctAnswer.checked !== true) {
        incorrect++;
        $("#incorrectAnswers").text(incorrect);
    }


    var correctAnswer = document.getElementById("correct0");
    var isChecked = $('input:radio[name="optradio0"]:checked').val();

    if (correctAnswer.checked === true) {
        correct++;
        $("#correctAnswers").text(correct);
    }
    if (!isChecked) {
        unanswered++
        $("#unanswered").text(unanswered);
    } else if (correctAnswer.checked !== true) {
        incorrect++;
        $("#incorrectAnswers").text(incorrect);
    }
}