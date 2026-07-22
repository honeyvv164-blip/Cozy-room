const intro = document.getElementById("intro");
const house = document.getElementById("house");
const living = document.getElementById("living");
const ending = document.getElementById("ending");

const enterBtn = document.getElementById("enterBtn");
const doorBtn = document.getElementById("doorBtn");
const finishBtn = document.getElementById("finishBtn");
const hugBtn = document.getElementById("hugBtn");

function showScene(current, next) {
    current.classList.remove("active");
    next.classList.add("active");
}

enterBtn.addEventListener("click", () => {
    showScene(intro, house);
});

doorBtn.addEventListener("click", () => {
    showScene(house, living);
});

finishBtn.addEventListener("click", () => {
    showScene(living, ending);
});

hugBtn.addEventListener("click", () => {
    hugBtn.innerHTML = "🤍 ได้รับกอดเรียบร้อยแล้ว";
    hugBtn.disabled = true;

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "🤍";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = 20 + Math.random() * 20 + "px";
        heart.style.transition = "all 3s linear";
        heart.style.pointerEvents = "none";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.transform = "translateY(-110vh)";
            heart.style.opacity = "0";
        }, 50);

        setTimeout(() => {
            heart.remove();
        }, 3200);
    }
});
