// JS fpr Profile page

const checkboxDarkmode = document.querySelector('[data-js="darkmode-toggle"]');
// console.log(document.body.classList);
// console.log(checkboxDarkmode);
// console.log(checkboxDarkmode.value);
// console.log(checkboxDarkmode.checked);

checkboxDarkmode.addEventListener("click", event => {
    document.body.classList.toggle("dark");
});
