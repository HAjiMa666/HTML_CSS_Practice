const open = document.querySelector("#open");
const close = document.querySelector("#close");
const circle = document.querySelector(".circle");
const content = document.querySelector(".container");
const nav = document.querySelector("nav");
const body = document.querySelector("body");



open.addEventListener("click", () => {
    circle.classList.add("circle-rotate");
    content.classList.add("content-rotate");
    nav.classList.add("nav-rotate");
})

close.addEventListener("click", () => {
    circle.classList.remove("circle-rotate");
    content.classList.remove("content-rotate");
    nav.classList.remove("nav-rotate");
})