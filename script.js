'use-strict';

function generateQuestions() {
    let idx = 0;

    if (QUIZ_DATA.answers.length > 0) {
        idx = QUIZ_DATA.answers.length;
    }

    if (idx < QUIZ_DATA.questions.length) {
        updateQuestionCount();

        // generate radio button choices for the current question
        const radioButtonChoices = QUIZ_DATA.questions[idx].choices.map(q => {
            return `<label class="answerOption">
                   <input type="radio" value=${q.isCorrect} name="choice" required>
                   <span>${q.text}</span>
                 </label>`

        }).join("\n");

        return `<form id="question-form">
                  <fieldset>
                    <legend>${QUIZ_DATA.questions[idx].text}</legend>
                    ${radioButtonChoices}
                    <button type="submit" class="submitButton">Submit</button>
                  </fieldset>
                </form>`
    } else {
        generateFinalScore();
    }
}

function startQuiz() {
    $('.start-screen').on('click', '.start-button', function (event) {
        $('.start-screen').remove();

        $('.question-choices').css('display', 'flex');
        $('.question-score').css('visibility', 'visible');

        updateQuestionCount();
    });
}

function renderQuestion() {
    $('.question-choices').html(generateQuestions())
}

function updateQuestionCount(reset = false) {
    if (!reset) {
        let count = QUIZ_DATA.answers.length + 1;
        $('#questionCount').text(count +"/" +QUIZ_DATA.questions.length);
    } else {
        $('#questionCount').text("0"+"/"+QUIZ_DATA.questions.length);
    }
}

function updateScore(reset = false) {
    if (!reset) {
        $('#score').text(QUIZ_DATA.answers.filter(q => {
            return q === 'correct';
        }).length);
    } else {
        $('#score').text(0);
    }
}

function userSelectAnswer() {
    $('form').on('submit', function (event) {
        event.preventDefault();
        let selected = $('input:checked');
        let answer = selected.val();
        if (answer !== 'undefined' && answer) {
            QUIZ_DATA.answers.push('correct');
            generateAnswerFeedback('correct');
        } else {
            QUIZ_DATA.answers.push('wrong');
            generateAnswerFeedback('wrong');
        }

        if (QUIZ_DATA.answers.length === QUIZ_DATA.questions.length){
            $('.nextButton').text('Finish Line');
        }
    });
}

function generateFinalScore() {
    let feedback = '';
    let src = '';
    let alt = 'final score picture';
    let score = $("#score").text();

    if (score == 5) {
        feedback = 'Congratulations! You crushed it and won!';
        src = './images/merckxPodium.jpg';
    } else if (score >= 2 && score <= 4) {
        feedback = 'Bittersweet! You were so close to the win, but just missed out!';
        src = './images/runnerup.jpg';
    } else {
        feedback = 'Better luck next time. You were dropped from the race and did not finish.';
        src = './images/bauerLost.jpg';
    }

    $('.question-choices').html(
        `<div class="final-feedback">
          <p>${feedback}</p>
          <img src=${src} alt=${alt}/>
          <button class="restart" type="submit">Restart</button>
         </div>`
    );

    restart();
}

function restart() {
    $(document).on("click", ".restart", function () {

        QUIZ_DATA.answers = [];
        updateQuestionCount(true);
        updateScore(true);

        location.reload();
    });
}

function generateAnswerFeedback(result) {
    let idx = 0;
    let src = '';
    let alt = '';
    let feedback = '';

    // get decsription explaning correct answer
    if (QUIZ_DATA.answers.length > 0) {
        idx = QUIZ_DATA.answers.length - 1;
    }

    // set correct or wrong image and alt
    if (result === "correct") {
        alt = 'Bob Jungles winning';
        src = './images/jungelsWin.jpg';
        feedback = 'Winning!';
    } else {
        alt = 'Gustav Larsen Crashing';
        src = './images/gustavCrash.jpg';
        feedback = 'Losing!';
    }

    updateScore();

    // generate html for answer reveal
    $('.question-choices').html(
        `<div class="feedback">
          <p>${feedback}</p>
          <p>${QUIZ_DATA.questions[idx].desc}</p>
          <img src=${src} alt=${alt}/>
          <button type=button class="nextButton">Next</button>
          </div>`
    );
}

//what happens when the user clicks next
function generateNextQuestion() {
    $('main').on('click', '.nextButton', function (event) {
        renderQuestion();
        userSelectAnswer();
    });
}

function createQuiz() {
    startQuiz();
    renderQuestion()
    generateNextQuestion();
    userSelectAnswer();
}

$(createQuiz);


