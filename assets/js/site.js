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

// baseImageURL global verfügbar machen
window.baseImageURL = getBaseImageURL();
// console.log("window.baseImageURL:", window.baseImageURL);
