// script.js

// Countdown Timer
const countdownElement = document.getElementById("countdown");
const newYearDate = new Date("January 1, 2025 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = newYearDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown reaches zero, display "Happy New Year!"
    if (distance < 0) {
        countdownElement.innerHTML = "Happy New Year 2025!";
        clearInterval(interval);
    }
}

// Start the countdown timer
const interval = setInterval(updateCountdown, 1000);

// Fireworks (simple circles appearing and disappearing randomly)
function createFirework() {
    const firework = document.createElement("div");
    firework.classList.add("fireworks");
    document.body.appendChild(firework);

    // Position fireworks randomly on the screen
    firework.style.left = Math.random() * window.innerWidth + "px";
    firework.style.top = Math.random() * window.innerHeight + "px";

    // Remove fireworks after animation completes
    setTimeout(() => {
        firework.remove();
    }, 1000);
}

// Trigger fireworks every 2 seconds
setInterval(createFirework, 2000);
