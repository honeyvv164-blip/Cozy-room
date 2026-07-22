// ==========================
// Rainy Day
// ==========================

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

    setTimeout(() => {
        next.classList.add("active");
    }, 500);
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

    createHearts();

});


// ==========================
// Heart Animation
// ==========================

function createHearts(){

    for(let i=0;i<25;i++){

        const heart=document.createElement("div");

        heart.innerHTML="🤍";

        heart.className="heart";

        heart.style.left=Math.random()*100+"vw";

        heart.style.animationDuration=
        2+Math.random()*2+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },4000);

    }

}
/* ===========================
   Hearts
=========================== */

.heart{

position:fixed;

bottom:-30px;

font-size:24px;

pointer-events:none;

animation:floatUp linear forwards;

z-index:999;

}

@keyframes floatUp{

0%{

transform:
translateY(0)
scale(.7);

opacity:0;

}

20%{

opacity:1;

}

100%{

transform:
translateY(-110vh)
scale(1.5);

opacity:0;

}

}
