console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

form.addEventListener("submit", event => {
    event.preventDefault();

    // Gather data from the form and log it to the console
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    console.log(data);
});
