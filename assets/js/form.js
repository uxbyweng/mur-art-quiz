const section = document.querySelector("section");
const form = document.querySelector('[data-js="form"]');

// Info Icon Ein- und Ausklapp Funktion
document.addEventListener("click", event => {
    const infoIcon = event.target.closest(".icon-info");
    if (!infoIcon) return;

    event.preventDefault();

    const formGroup = infoIcon.closest("fieldset");
    const hint = formGroup.querySelector(".hint");
    hint.classList.toggle("hidden");
});

// Verbleibende Zeichen Funktion
function remainingChars(maxChars, inputChars) {
    return maxChars - inputChars;
}
document.addEventListener("input", event => {
    const input = event.target.closest('[data-js="counted"]');
    if (!input) return;

    const group = input.closest(".form-group, .group__item");
    const output = group.querySelector('[data-js="remaining"]');
    const maxChars = 150;

    output.textContent = remainingChars(maxChars, input.value.length);
});

form.addEventListener("submit", event => {
    event.preventDefault();

    // Werte aus formularauslesen
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Quiz Image
    const fileInput = event.target.elements.imageFile;
    const fileObject = fileInput.files[0];
    let fileName;
    console.log(fileName);
    if (fileObject) {
        fileName = URL.createObjectURL(fileObject);
    } else {
        fileName = "../assets/images/default.jpg";
    }

    // Quiz Frage
    const questionText = data.questionText;

    // Quiz Antworten
    const correctAnswer = data.correctAnswer;
    const wrongAnswer1 = data.wrongAnswer1;
    const wrongAnswer2 = data.wrongAnswer2;

    // Tags
    const tags = data.tags;

    // Formular resetten
    event.target.reset();
    event.target.elements.imageFile.focus();

    const newQuizCard = document.createElement("article");
    newQuizCard.classList.add("card");
    newQuizCard.id = "q5";
    newQuizCard.innerHTML = `
    <div class="card__top">
        <img src="${fileName}" alt="Foto eines Wandgemäldes an einer Hausfassade." />
        <button class="btn btn--bookmark" aria-label="Zu Lesezeichen hinzufügen" data-js="add-bookmark">
            <i class="icon-bookmark" aria-hidden="true"></i>
        </button>
        <h2 class="card__question">${questionText}</h2>
    </div>
    <div class="card__choice" role="radiogroup">
        <button class="btn btn--blue" type="button" role="radio" data-correct="false" aria-checked="false"
            data-js="answer-button">${wrongAnswer1}</button>
        <button class="btn btn--blue" type="button" role="radio" data-correct="true" aria-checked="false"
            data-js="answer-button">${correctAnswer}</button>
        <button class="btn btn--blue" type="button" role="radio" data-correct="false" aria-checked="false"
            data-js="answer-button">${wrongAnswer2}</button>
    </div>
    <div class="card__answer hidden">
        <img class="card__feedback-image" src="${window.baseImageURL}winner-fox.png" width="200">
        <h3 class="card__feedback">
            Correct answer!
        </h3>
        <p class="card__solution">
            The titel of the mural is <strong>${correctAnswer}</strong>.
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
`;
    section.append(newQuizCard);
});
