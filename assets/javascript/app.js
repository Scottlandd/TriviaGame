// This variable stores all the information to be displayed.
var panel = $("#quiz");

// Starts the quiz when the user clicks "Click to begin, young Padawan". 
$(document).on("click", "#start", function(e) {
    quiz.start();
})
// Gives the user the option to finish the quiz before the timer runs out by clicking "Done".
$(document).on("click", "#done", function(e) {
    quiz.done();
})

// This variable stores the array of questions for the quiz.
var questions = [{
    question: "1. What planet is Anakin Skywalker from??",
    answers: ["Naboo ","Coruscant ", "Geonosis ", "Tatooine "],
    correctAnswer: "Tatooine "
}, {
    question: "2. Who did both Anakin and Luke Skywalker train under??",
    answers: ["Morpheus ", "Obi-Wan Kenobi ", "Count Dooku ", "Mace Windu "],
    correctAnswer: "Obi-Wan Kenobi "
}, {
    question: "3. Who is C3PO's best friend??",
    answers: ["R2D2 ", "Super Battle Droid ", "Jar Jar Binks ", "James Franco "],
    correctAnswer: "R2D2 "
}, {
    question: "4. What creatures thought that C3PO was a god??",
    answers: ["Jawas ", "Wookies ", "Klingons ", "Ewoks "],
    correctAnswer: "Ewoks "
}, {
    question: "5. What planet was Padme Amadala the queen of??",
    answers: ["Tatooine ", "Kamino ", "Naboo ", "Dagobah "],
    correctAnswer: "Naboo "
}, {
    question: "6. Who played Obi Wan Kenobi in the original 1977 movie??",
    answers: ["Ewan McGregor ", "Brad Pitt ", "Alec Guinness ", "John Wayne "],
    correctAnswer: "Alec Guinness "
}, {
    question: "7. What planet was home to both the Galactic Senate chamber and the Jedi Temple??",
    answers: ["Geonosis ", "Alderan ", "Coruscant ", "Dagobah "],
    correctAnswer: "Coruscant "
}, {
    question: "8. What is the name of the Empire's planet-destroying station??",
    answers: ["Big Bertha ",  "The Death Star ",  "The Holy Hand-Grenade ",  "The Noisy Cricket "],
    correctAnswer: "The Death Star "
}, {
    question: "9. What is the name of Han Solo's ship??",
    answers: ["Serenity ",  "Nebuchadnezzar ",  "Millenium Falcon ",  "Battlestar Galactica "],
    correctAnswer: "Millenium Falcon "
}, {
    question: "10. Who is the most hated character in the history of Star Wars??",
    answers: ["Jar Jar Binks ",  "Darth Vader ",  "The Emperor ",  "Chewbacca "],
    correctAnswer: "Jar Jar Binks "
}];

// This variable gives the computer instructions to run the quiz.
var quiz = {
    correct: 0,
    incorrect: 0,
    counter: 30,
    countdown: function() {
        quiz.counter--;
        $("#counter-number").html(quiz.counter);

        if (quiz.counter === 0) {
            quiz.done();
        }
    },
    start: function() {
        timer = setInterval(quiz.countdown, 1000);

        $("#subwrapper").prepend('<h2>Time Remaining: <span id="counter-number"</span>30</h2>');
        $("#start").remove();
        $("#done").add();



        for (var i = 0; i < questions.length; i++) {
            // Displays the quiz questions to the user.
            panel.append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                // Displays answer choices below the questions.
                panel.append('\<input type="radio" id="radio" name="question' + '-' + i + '"value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
            }
        }
        // Adds spacing between the questions and the "Done" button.
        panel.append("</br>");
        panel.append("</br>");
        // Displays the "Done button".
        panel.append("<button id='done'>Done</button>");
    },

    // This function tells the computer what to do when the user runs out of time or hits "Done".
    done: function() {
        $.each($("input[name='question-0']:checked"), function() {

            if ($(this).val() == questions[0].correctAnswer) {

                quiz.correct++;

            } else {

                quiz.incorrect++;

            }

        });

        $.each($("input[name='question-1']:checked"), function() {

            if ($(this).val() == questions[1].correctAnswer) {

                quiz.correct++;

            } else {

                quiz.incorrect++;

            }

        });

        $.each($("input[name='question-2']:checked"), function() {

            if ($(this).val() == questions[2].correctAnswer) {

                quiz.correct++;

            } else {

                quiz.incorrect++;

            }

        });

        $.each($("input[name='question-3']:checked"), function() {

            if ($(this).val() == questions[3].correctAnswer) {

                quiz.correct++;

            } else {

                quiz.incorrect++;

            }

        });

        $.each($("input[name='question-4']:checked"), function() {

            if ($(this).val() == questions[4].correctAnswer) {

                quiz.correct++;

            } else {

                quiz.incorrect++;

            }

        });

        $.each($("input[name='question-5']:checked"), function() {

            if ($(this).val() == questions[5].correctAnswer) {

                quiz.correct++;

            } else {

                quiz.incorrect++;

            }

        });

        $.each($("input[name='question-6']:checked"), function() {

            if ($(this).val() == questions[6].correctAnswer) {

                quiz.correct++;

            } else {

                quiz.incorrect++;

            }

        });

        $.each($("input[name='question-7']:checked"), function() {

            if ($(this).val() == questions[7].correctAnswer) {

                quiz.correct++;

            } else {

                quiz.incorrect++;

            }

        });
        $.each($("input[name='question-8']:checked"), function() {

            if ($(this).val() == questions[8].correctAnswer) {

                quiz.correct++;

            } else {

                quiz.incorrect++;

            }

        });
        $.each($("input[name='question-9']:checked"), function() {

            if ($(this).val() == questions[9].correctAnswer) {

                quiz.correct++;

            } else {

                quiz.incorrect++;

            }

        });
       
        // Calls the function defined below.
        this.result();


    },
    // This function displays the results of the quiz.
    result: function() {
        clearInterval(timer);

        $("#subwrapper h2").remove();
        panel.html("<img src='assets/images/Yoda.png'>");
        panel.append("<h2> 'Out of time, you are' </h2>");
    
        panel.append("<h3>Correct Answers: " + this.correct + "</h3>");

        panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");

        panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
    }
};
