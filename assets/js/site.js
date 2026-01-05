// Global JavaScript für alle Seiten

// base image url ermitteln
function getBaseImageURL() {
    const path = window.location.pathname;

    if (path === "/mur-art-quiz/") {
        return "assets/images/";
    } else {
        return "../assets/images/";
    }
}

// base url  ermitteln
function getBaseURL() {
    const path = window.location.pathname;

    if (path === "/mur-art-quiz/") {
        return "";
    } else {
        return "../";
    }
}

// baseImageURL global verfügbar machen
window.baseImageURL = getBaseImageURL();
console.log("window.baseImageURL:", window.baseImageURL);

// baseURL global verfügbar machen
window.baseURL = getBaseURL();
console.log("window.baseURL:", window.baseURL);

console.log("window.location.pathname:", window.location.pathname);
