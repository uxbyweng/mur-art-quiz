// JavaScript für die Startseite

// stats initialisieren
let correctAnswers = 0;
let wrongAnswers = 0;
let quizStats = "";

// Bookmark Icon / Toogle
const addBookmark = document.querySelectorAll('[data-js="add-bookmark"]');
document.addEventListener("click", event => {
    const addBookmark = event.target.closest('[data-js="add-bookmark"]');
    if (!addBookmark) return;

    addBookmark.classList.toggle("btn--bookmark--active");
});

// Quiz Card Funktion
document.addEventListener("click", event => {
    // wenn answer button geklickt
    const clickedButton = event.target.closest('[data-js="answer-button"]');
    if (!clickedButton) return;

    // finde zugehörige quiz-card
    const card = clickedButton.closest(".card");
    if (!card) return;

    // finde quiz card elememte
    const choiceGroup = card.querySelector(".card__choice");
    const answerArea = card.querySelector(".card__answer");
    const feedbackImage = card.querySelector(".card__feedback-image");
    const feedbackText = card.querySelector(".card__feedback");
    const solutionText = card.querySelector(".card__solution");
    const originalSolutionHTML = solutionText.innerHTML;
    const tryAgainButton = card.querySelector(".card__buttons .btn--blue");
    const nextQuestionButton = card.querySelector(".btn--green");
    const isCorrect = clickedButton.dataset.correct === "true";

    //  letzte card ermitteln
    const lastCard = document.querySelector(".quiz .card:last-of-type");
    let isLastCard;
    if (card === lastCard) {
        isLastCard = true;
        console.log("letzte card");
    } else {
        isLastCard = false;
        console.log("nicht letzte card");
    }

    // choice buttons ausblenden und answer block einblenden
    choiceGroup.classList.add("hidden");
    answerArea.classList.remove("hidden");

    feedbackText.classList.remove("success", "failure");

    if (isCorrect && isLastCard) {
        correctAnswers = correctAnswers + 1;
        feedbackImage.src = window.baseImageURL + "winner-fox.png";
        feedbackText.classList.add("success");
        feedbackText.textContent = "Correct answer!";
        solutionText.innerHTML = originalSolutionHTML;
        tryAgainButton.classList.add("hidden");
        nextQuestionButton.classList.add("hidden");
        // quiz stats anzeigen
        const quizStats = document.createElement("span");
        quizStats.classList.add("card__stats");
        if (wrongAnswers === 0) {
            quizStats.innerHTML = `Perfect game! <strong>${correctAnswers}</strong> correct answers and not a single wrong one!`;
        } else if (wrongAnswers <= 2) {
            quizStats.innerHTML = `Great job! <strong>${correctAnswers}</strong> correct answers with only <strong>${wrongAnswers}</strong> wrong. Almost perfect!`;
        } else {
            quizStats.innerHTML = `You got <strong>${correctAnswers}</strong> correct, but <strong>${wrongAnswers}</strong> were wrong. Try again and beat your score!`;
            tryAgainButton.classList.remove("hidden");
            tryAgainButton.onclick = () => {
                choiceGroup.classList.remove("hidden");
                answerArea.classList.add("hidden");
                solutionText.innerHTML = originalSolutionHTML;
            };
        }
        solutionText.append(quizStats);
        // console.log("quizStats:", quizStats);
        // console.log("correctAnswers", correctAnswers);
        // console.log("wrongAnswers", wrongAnswers);
    } else if (isCorrect) {
        correctAnswers = correctAnswers + 1;
        feedbackImage.src = window.baseImageURL + "winner-fox.png";
        feedbackText.classList.add("success");
        feedbackText.textContent = "Correct answer!";
        solutionText.innerHTML = originalSolutionHTML;
        tryAgainButton.classList.add("hidden");
        nextQuestionButton.classList.remove("hidden");
        nextQuestionButton.onclick = () => {
            card.classList.add("hidden");
        };
        // console.log("quizStats:", quizStats);
        // console.log("correctAnswers", correctAnswers);
        // console.log("wrongAnswers", wrongAnswers);
    } else {
        wrongAnswers = wrongAnswers + 1;
        feedbackImage.src = window.baseImageURL + "sad-fox.png";
        feedbackText.classList.add("failure");
        feedbackText.textContent = "Wrong answer!";
        solutionText.innerHTML = "But you can try again, if you want.";
        tryAgainButton.classList.remove("hidden");
        tryAgainButton.onclick = () => {
            choiceGroup.classList.remove("hidden");
            answerArea.classList.add("hidden");
            solutionText.innerHTML = originalSolutionHTML;
        };
        nextQuestionButton.classList.add("hidden");
        // console.log("quizStats:", quizStats);
        // console.log("correctAnswers", correctAnswers);
        // console.log("wrongAnswers", wrongAnswers);
    }
});

// // Question 01
// const answerButtonGroup1 = document.querySelector("#q1 .card__choice");
// const answerButtonArray1 = document.querySelectorAll('#q1 [data-js="answer-button"]');
// const answerButton1 = answerButtonArray1[0];
// const answerButton2 = answerButtonArray1[1];
// const answerButton3 = answerButtonArray1[2];
// const answerArea1 = document.querySelector("#q1 .card__answer");
// const feedbackImage = document.querySelector("#q1 .card__feedback-image");
// const feedbackText = document.querySelector("#q1 .card__feedback");
// const solutionText = document.querySelector("#q1 .card__solution");

// answerButton1.addEventListener("click", () => {
//     const isCorrect = answerButton1.getAttribute("data-correct");
//     if (isCorrect === "true") {
//         answerButtonGroup1.classList.add("hidden");
//         answerArea1.classList.remove("hidden");
//         feedbackImage.setAttribute("src", "assets/images/winner-fox.png");
//         feedbackText.classList.toggle("success");
//         feedbackText.innerHTML = "Correct answer!";
//     } else {
//         answerButtonGroup1.classList.add("hidden");
//         answerArea1.classList.remove("hidden");
//         feedbackImage.setAttribute("src", "assets/images/sad-fox.png");
//         feedbackText.classList.toggle("error");
//         feedbackText.innerHTML = "Wrong answer!";
//         solutionText.innerHTML = "Try again if you want.";
//     }
// });
// answerButton2.addEventListener("click", () => {
//     const isCorrect = answerButton2.getAttribute("data-correct");
//     if (isCorrect === "true") {
//         answerButtonGroup1.classList.add("hidden");
//         answerArea1.classList.remove("hidden");
//         feedbackImage.setAttribute("src", "assets/images/winner-fox.png");
//         feedbackText.classList.toggle("success");
//         feedbackText.innerHTML = "Correct answer!";
//     } else {
//         answerButtonGroup1.classList.add("hidden");
//         answerArea1.classList.remove("hidden");
//         feedbackImage.setAttribute("src", "assets/images/sad-fox.png");
//         feedbackText.classList.toggle("error");
//         feedbackText.innerHTML = "Wrong answer!";
//         solutionText.innerHTML = "Try again if you want.";
//     }
// });
// answerButton3.addEventListener("click", () => {
//     const isCorrect = answerButton3.getAttribute("data-correct");
//     if (isCorrect === "true") {
//         answerButtonGroup1.classList.add("hidden");
//         answerArea1.classList.remove("hidden");
//         feedbackImage.setAttribute("src", "assets/images/winner-fox.png");
//         feedbackText.classList.toggle("success");
//         feedbackText.innerHTML = "Correct answer!";
//     } else {
//         answerButtonGroup1.classList.add("hidden");
//         answerArea1.classList.remove("hidden");
//         feedbackImage.setAttribute("src", "assets/images/sad-fox.png");
//         feedbackText.classList.toggle("error");
//         feedbackText.innerHTML = "Wrong answer!";
//         solutionText.innerHTML = "Try again if you want.";
//     }
// });
