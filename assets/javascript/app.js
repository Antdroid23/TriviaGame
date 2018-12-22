//Variables
var intervalID;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var counter = 90; $("#counter").text(counter);
var sound = document.getElementById("gameAudio");
var sound2 = document.getElementById("gameAudio2");
var sound3 = document.getElementById("gameAudio3");
var sound4 = document.getElementById("gameAudio4");


//when page loads, hide questions and results. play into sound.
window.onload = function() {
    $("#hidden").hide();
    $("#resultsWrapper").hide();
    sound3.play();
};

//On click (start Game Button) hide instructions and start game button and show questions. Play trivia sound and start timer. With 10 seconds left, play countdown sound. If timer hits 00 before user submits answers, run submit function.
$("#start").click(function() {
    $("#hidden2").hide();
    $("#hidden").show();

    sound.play();
    
    clearInterval(intervalID);
    intervalID = setInterval(timer, 1000);
    function timer() {
        counter--
        $("#counter").text(counter);
    if (counter == 10) {
        sound4.play();
    }
    else if (counter == 00) {
        alert("Your time is up!")

    submit();
        }
    }
})

//on click (submit button) run submit function.
$("#submit").click(function() {
    submit()
});

//on click (restart game button) restart everything back to default settings.
$("#reset").click(function() {
    $("#hidden").hide();
    $("#resultsWrapper").hide();
    $("#hidden2").show();
    $('input[type="radio"]').prop('checked', false);
    correct = 0;
    $("#correctAnswers").text(correct);
    incorrect = 0;
    $("#incorrectAnswers").text(incorrect);
    unanswered = 0;
    $("#unanswered").text(unanswered);
    counter = 90;
    $("#counter").text(counter);
    sound3.play();
})

//functions
function submit() {
    $("#hidden").hide();
    $("#resultsWrapper").show();
    clearInterval(intervalID);
    questions();
    sound.currentTime = 0;
    sound.pause();
    sound2.play();
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
    } 
    else if (correctAnswer.checked !== true) {
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
    } 
    else if (correctAnswer.checked !== true) {
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
    } 
    else if (correctAnswer.checked !== true) {
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
    } 
    else if (correctAnswer.checked !== true) {
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
    } 
    else if (correctAnswer.checked !== true) {
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
    } 
    else if (correctAnswer.checked !== true) {
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
    } 
    else if (correctAnswer.checked !== true) {
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
    } 
    else if (correctAnswer.checked !== true) {
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
    } 
    else if (correctAnswer.checked !== true) {
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
    } 
    else if (correctAnswer.checked !== true) {
        incorrect++;
        $("#incorrectAnswers").text(incorrect);
    };
};