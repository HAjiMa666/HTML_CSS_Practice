const panels = document.querySelectorAll(".panel");
const newPanels = [...panels];

// 这个主要是练习了排他思想
newPanels.map((item) => {
    item.addEventListener("click", () => {
        newPanels.forEach(item => {
            if (item.className === "panel active") {
                item.classList.remove("active");
            }
        })
        item.classList.add("active");
    })
})


