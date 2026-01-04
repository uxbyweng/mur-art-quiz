console.clear();

const section = document.querySelector("section");
const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

document.addEventListener("click", event => {
    const infoIcon = event.target.closest(".icon-info");
    if (!infoIcon) return;

    event.preventDefault();

    const formGroup = infoIcon.closest(".form-group");
    const hint = formGroup.querySelector(".hint");

    hint.classList.toggle("hidden");
});

form.addEventListener("submit", event => {
    event.preventDefault();

    // Gather data from the form and log it to the console
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    //

    console.log(data);
    const newQuizCard = document.createElement("article");
    newQuizCard.innerHTML = `
 <article class="card" id="q1">
    <div class="card__top">
        <img src="./assets/images/ash.jpg" alt="Foto eines Wandgemäldes an einer Hausfassade." />
        <button class="btn btn--bookmark" aria-label="Zu Lesezeichen hinzufügen" data-js="add-bookmark">
            <i class="icon-bookmark" aria-hidden="true"></i>
        </button>
        <h2 class="card__question">Who is the artist of this mural?</h2>
    </div>
    <div class="card__choice" role="radiogroup">
        <button class="btn btn--blue" type="button" role="radio" data-correct="false" aria-checked="false"
            data-js="answer-button">Herakut</button>
        <button class="btn btn--blue" type="button" role="radio" data-correct="true" aria-checked="false"
            data-js="answer-button">Victor Ash</button>
        <button class="btn btn--blue" type="button" role="radio" data-correct="false" aria-checked="false"
            data-js="answer-button">Invader</button>
    </div>
    <div class="card__answer hidden">
        <img class="card__feedback-image" src="./assets/images/winner-fox.png" width="200">
        <h3 class="card__feedback">
            Correct answer!
        </h3>
        <p class="card__solution">
            The mural was created by <strong>Victor Ash</strong>.
        </p>
        <div class="card__buttons">
            <button class="btn btn--blue hidden">Try again</button>
            <button class="btn btn--green">Next Question</button>
        </div>
    </div>
    <div class="card__tags">
        <button class="btn btn--tag">#astronaut</button>
        <button href="#" class="btn btn--tag">#mural</button>
        <button href="#" class="btn btn--tag">#kreuzberg</button>
    </div>
</article>
`;
    section.append(newQuizCard);
});

//  <article class="card" id="q1">
//     <div class="card__top">
//         <img src="./assets/images/ash.jpg" alt="Foto eines Wandgemäldes an einer Hausfassade." />
//         <button class="btn btn--bookmark" aria-label="Zu Lesezeichen hinzufügen" data-js="add-bookmark">
//             <i class="icon-bookmark" aria-hidden="true"></i>
//         </button>
//         <h2 class="card__question">Who is the artist of this mural?</h2>
//     </div>
//     <div class="card__choice" role="radiogroup">
//         <button class="btn btn--blue" type="button" role="radio" data-correct="false" aria-checked="false"
//             data-js="answer-button">Herakut</button>
//         <button class="btn btn--blue" type="button" role="radio" data-correct="true" aria-checked="false"
//             data-js="answer-button">Victor Ash</button>
//         <button class="btn btn--blue" type="button" role="radio" data-correct="false" aria-checked="false"
//             data-js="answer-button">Invader</button>
//     </div>
//     <div class="card__answer hidden">
//         <img class="card__feedback-image" src="./assets/images/winner-fox.png" width="200">
//         <h3 class="card__feedback">
//             Correct answer!
//         </h3>
//         <p class="card__solution">
//             The mural was created by <strong>Victor Ash</strong>.
//         </p>
//         <div class="card__buttons">
//             <button class="btn btn--blue hidden">Try again</button>
//             <button class="btn btn--green">Next Question</button>
//         </div>
//     </div>
//     <div class="card__tags">
//         <button class="btn btn--tag">#astronaut</button>
//         <button href="#" class="btn btn--tag">#mural</button>
//         <button href="#" class="btn btn--tag">#kreuzberg</button>
//     </div>
// </article>
