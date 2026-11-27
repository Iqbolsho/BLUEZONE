document.body.classList.add("js-ready");

// Smooth scroll to launchers at the bottom
document.getElementById("bottomButton").addEventListener("click", function () {
    document.getElementById("footer").scrollIntoView({
        behavior: "smooth"
    });
});

// Back to top
document.getElementById("topButton").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Reveal animations
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(function (element) {
    observer.observe(element);
});

// SKlauncher special fullscreen message
const skButton = document.getElementById("skButton");
const skOverlay = document.getElementById("skOverlay");
const closeOverlay = document.getElementById("closeOverlay");

skButton.addEventListener("click", function (event) {
    event.preventDefault();
    skOverlay.classList.add("active");
});

closeOverlay.addEventListener("click", function () {
    skOverlay.classList.remove("active");
});

// Close with Escape key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        skOverlay.classList.remove("active");
    }
});
