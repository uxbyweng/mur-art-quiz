// JavaScript für die Startseite

// Bookmark button - toggle bookmark-icon
const addBookmark = document.querySelectorAll('[data-js="add-bookmark"]');

// addBookmark[0].addEventListener("click", () => {
//     addBookmark[0].classList.toggle("card__bookmark--active");
// });
// addBookmark[1].addEventListener("click", () => {
//     addBookmark[1].classList.toggle("card__bookmark--active");
// });
// addBookmark[2].addEventListener("click", () => {
//     addBookmark[2].classList.toggle("card__bookmark--active");
// });

document.addEventListener("click", event => {
    const addBookmark = event.target.closest('[data-js="add-bookmark"]');
    if (!addBookmark) return;

    addBookmark.classList.toggle("btn--bookmark--active");
});

document.addEventListener("click", event => {
    // wird ein answer button geklickt
    const clickedButton = event.target.closest('[data-js="answer-button"]');
    if (!clickedButton) return;

    // finde die zugehörige quiz-card
    const card = clickedButton.closest(".card");
    if (!card) return;

    // hole alle elememt in dieser card
    const choiceGroup = card.querySelector(".card__choice");
    const answerArea = card.querySelector(".card__answer");
    const feedbackImage = card.querySelector(".card__feedback-image");
    const feedbackText = card.querySelector(".card__feedback");
    const solutionText = card.querySelector(".card__solution");
    const originalSolutionHTML = solutionText.innerHTML;
    const isCorrect = clickedButton.dataset.correct === "true";

    // buttons ausblenden und answer block einblenden
    choiceGroup.classList.add("hidden");
    answerArea.classList.remove("hidden");

    // Feedback-Klassen sauber setzen (nicht toggle)
    feedbackText.classList.remove("success", "error");

    if (isCorrect) {
        feedbackImage.src = "assets/images/winner-fox.png";
        feedbackText.classList.add("success");
        feedbackText.textContent = "Correct answer!";
        solutionText.textContent = originalSolutionHTML;
    } else {
        feedbackImage.src = "assets/images/sad-fox.png";
        feedbackText.classList.add("error");
        feedbackText.textContent = "Wrong answer!";
        solutionText.textContent = "Try again if you want.";
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

// correctAnswerButton1.addEventListener("click", () => {
//     allAnswerButtons1.classList.add("hidden");
//     correctAnswer1.classList.remove("hidden");
// });
// firstWrongAnswerButton1.addEventListener("click", () => {
//     allAnswerButtons1.classList.add("hidden");
//     wrongAnswer1.classList.remove("hidden");
// });

// secondWrongAnswerButton1.addEventListener("click", () => {
//     allAnswerButtons1.classList.add("hidden");
//     wrongAnswer1.classList.remove("hidden");
// });

// wrongButtons1.addEventListener("click", () => {
//     buttonGroup1.classList.toggle("hidden");
//     correctAnswer1.classList.toggle("hidden");
//     question1.classList.add("hidden");
//     errorMessage1.classList.add("error");
//     errorMessage1.classList.remove("hidden");
// });

// document.addEventListener("click", event => {
//     const wrongButtons1 = document.querySelectorAll('#q1 .card__choice button[isCorrect="false"]');
//     if (!wrongButtons1) return;
//     buttonGroup1.classList.toggle("hidden");
//     wrongAnswer1.classList.toggle("hidden");
// });
