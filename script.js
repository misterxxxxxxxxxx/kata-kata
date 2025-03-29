// script.js
document.getElementById("showContent").addEventListener("click", function() {
    document.getElementById("content").classList.remove("hidden");
    document.getElementById("bg-music").play();
    document.getElementById("heartCanvas").classList.remove("hidden");
    this.style.display = "none";
    startHeartAnimation();
});

const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const hearts = [];
function createHeart() {
    hearts.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 100,
        size: Math.random() * 30 + 15,
        speed: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.5
    });
}
function drawHeart(x, y, size, opacity) {
    ctx.fillStyle = `rgba(255, 100, 150, ${opacity})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
    ctx.bezierCurveTo(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
    ctx.fill();
}
function animateHearts() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach((heart, index) => {
        heart.y -= heart.speed;
        drawHeart(heart.x, heart.y, heart.size, heart.opacity);
        if (heart.y < -20) hearts.splice(index, 1);
    });
    requestAnimationFrame(animateHearts);
}
function startHeartAnimation() {
    setInterval(createHeart, 50); // Lebih banyak love
    animateHearts();
}