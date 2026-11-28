document.body.classList.add("js-ready");

// SCROLL BUTTONS

document.getElementById("bottomButton").addEventListener("click", function () {
    document.getElementById("games").scrollIntoView({
        behavior: "smooth"
    });
});

document.getElementById("topButton").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// SEARCH SYSTEM

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchMessage = document.getElementById("searchMessage");

function searchCategory() {
    const query = searchInput.value.trim().toLowerCase();

    let destination = null;

    if (
        ["game", "games", "gaming", "minecraft", "gta", "free fire"].includes(query)
    ) {
        destination = "games";
    } else if (
        ["ai", "artificial intelligence", "chatgpt", "claude", "gemini", "grok", "deepseek"].includes(query)
    ) {
        destination = "ai";
    } else if (
        ["driver", "drivers", "nvidia", "intel", "amd", "driverpack"].includes(query)
    ) {
        destination = "drivers";
    }

    if (destination) {
        searchMessage.textContent = "Found! Taking you there...";
        searchMessage.style.color = "#60b7ff";

        document.getElementById(destination).scrollIntoView({
            behavior: "smooth"
        });
    } else {
        searchMessage.textContent = "Try: Games, AI or Driver.";
        searchMessage.style.color = "#ff8585";
    }
}

searchButton.addEventListener("click", searchCategory);

searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searchCategory();
    }
});

// QUICK CATEGORY BUTTONS

document.querySelectorAll("[data-category]").forEach(function (button) {
    button.addEventListener("click", function () {
        const destination = button.dataset.category;

        document.getElementById(destination).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// REVEAL ANIMATIONS

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

// SKLAUNCHER POPUP

const skOverlay = document.getElementById("skOverlay");

document.getElementById("skButton").addEventListener("click", function () {
    skOverlay.classList.add("active");
});

document.getElementById("closeSk").addEventListener("click", function () {
    skOverlay.classList.remove("active");
});

// AI POPUP

const aiOverlay = document.getElementById("aiOverlay");
const aiContinue = document.getElementById("aiContinue");

document.querySelectorAll(".ai-button").forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();

        aiContinue.href = button.href;
        aiContinue.textContent = "YES, OPEN " + button.dataset.ai.toUpperCase();

        aiOverlay.classList.add("active");
    });
});

document.getElementById("closeAi").addEventListener("click", function () {
    aiOverlay.classList.remove("active");
});

// CLOSE POPUPS WITH ESCAPE

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        skOverlay.classList.remove("active");
        aiOverlay.classList.remove("active");
    }
});