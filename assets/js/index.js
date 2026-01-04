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

// Question 01
const correctButton1 = document.querySelector('#q1 .card__choice button[isCorrect="true"]');
const wrongButtons1 = document.querySelectorAll('#q1 .card__choice button[isCorrect="false"]');
const firstWrongButton1 = wrongButtons1[0];
const secondWrongButton1 = wrongButtons1[1];
const correctAnswer1 = document.querySelector("#q1 .card__answer");
const wrongAnswer1 = document.querySelector("#q1 .card__wrong-answer");
const buttonGroup1 = document.querySelector("#q1 .card__choice");

// Question 02
const correctButton2 = document.querySelector('#q2 .card__choice button[isCorrect="true"]');
const wrongButtons2 = document.querySelectorAll('#q2 .card__choice button[isCorrect="false"]');
const firstWrongButton2 = wrongButtons2[0];
const secondWrongButton2 = wrongButtons2[1];
const correctAnswer2 = document.querySelector("#q2 .card__correct-answer");
const wrongAnswer2 = document.querySelector("#q2 .card__wrong-answer");
const buttonGroup2 = document.querySelector("#q2 .card__choice");

// Question 03
const correctButton3 = document.querySelector('#q3 .card__choice button[isCorrect="true"]');
const wrongButtons3 = document.querySelectorAll('#q3 .card__choice button[isCorrect="false"]');
const firstWrongButton3 = wrongButtons3[0];
const secondWrongButton3 = wrongButtons3[1];
const correctAnswer3 = document.querySelector("#q3 .card__correct-answer");
const wrongAnswer3 = document.querySelector("#q3 .card__wrong-answer");
const buttonGroup3 = document.querySelector("#q3 .card__choice");

// Question 01
correctButton1.addEventListener("click", () => {
    buttonGroup1.classList.add("hidden");
    correctAnswer1.classList.remove("hidden");
});

firstWrongButton1.addEventListener("click", () => {
    buttonGroup1.classList.add("hidden");
    wrongAnswer1.classList.remove("hidden");
});

secondWrongButton1.addEventListener("click", () => {
    buttonGroup1.classList.add("hidden");
    wrongAnswer1.classList.remove("hidden");
});

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
