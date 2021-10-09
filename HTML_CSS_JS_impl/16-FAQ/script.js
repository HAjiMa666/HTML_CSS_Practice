const faqToggleBtns = document.querySelectorAll(".faq-toggle");
const faqText = document.querySelectorAll(".faq-text");
const faq = document.querySelectorAll(".faq");
const faqTextToggle = document.querySelectorAll(".faq-text i");
const questions = document.querySelectorAll(".question");

faqToggleBtns.forEach((item, index) => {
    item.addEventListener("click", () => {
        faq[index].style.display = "none";
        faqText[index].classList.remove("disappear");
        questions[index].classList.add("scaleQuestion");
    })
})

faqTextToggle.forEach((item, index) => {
    item.addEventListener("click", () => {
        faq[index].style.display = "flex";
        faqText[index].classList.add("disappear");
        questions[index].classList.remove("scaleQuestion");
    })
})

