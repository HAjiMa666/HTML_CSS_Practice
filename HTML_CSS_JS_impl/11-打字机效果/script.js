const blessName = document.querySelector(".name");
const bless = document.querySelector(".bless");
// 使用matchAll进行字符串遍历 最为方便
let blessRes = "祝中秋节快乐".matchAll(/\S/g);
let blessNameRes = "大家".matchAll(/\S/g);
// 使用matchAll会返回一个迭代器 需要遍历才能将数据取出来
for (const word of blessNameRes) {
    blessName.insertAdjacentHTML("beforeend", `<span class="blessName">${word}</span>`);
}
for (const word of blessRes) {
    bless.insertAdjacentHTML("beforeend", `<span class="blessContent">${word}</span>`);
}


let delay = 0;
document.querySelectorAll(".blessName").forEach(item => {
    item.style.animationDelay = `${delay}s`;
    delay++;
})
document.querySelectorAll(".blessContent").forEach(item => {
    item.style.animationDelay = `${delay}s`;
    delay++;
})


bless.addEventListener("animationstart", e => {
    bless.classList.add("start");
})

bless.addEventListener("animationend", (e) => {
    if (e.target === document.querySelector(".blessContent:last-child")) {
        bless.classList.add("ended");
    }
})

blessName.addEventListener("animationend", (e) => {
    if (e.target === document.querySelector(".blessName:last-child")) {
        blessName.classList.add("nameEnded");
    }
})