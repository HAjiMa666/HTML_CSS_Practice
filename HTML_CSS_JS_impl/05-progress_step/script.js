const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const progress = document.querySelector(".progress");
const circles = document.querySelectorAll(".circle");

let currentIndex = 0;

change(currentIndex);


prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        circles[currentIndex].classList.remove("circle-active");
        currentIndex--;
    }

    change(currentIndex);
})

nextBtn.addEventListener("click", (e) => {
    if (currentIndex < circles.length) {
        currentIndex++;
        circles[currentIndex].classList.add("circle-active");
    }
    change(currentIndex);
})


function change(currentIndex) {
    if (currentIndex < 3) {
        nextBtn.disabled = false;
    } else {
        nextBtn.disabled = true;
    }
    if (currentIndex > 0) {
        prevBtn.disabled = false;
    } else {
        prevBtn.disabled = true;
    }
    progress.style.width = (100 / (circles.length - 1)) * (currentIndex) + "%"
}