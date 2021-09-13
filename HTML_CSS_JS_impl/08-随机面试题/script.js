const btn = document.querySelector("#start");
const type = document.querySelector(".interviewType");
const tip = document.querySelector(".tip");

btn.addEventListener("click", () => {
    const question = interviewType();
    type.textContent = question;
    tip.textContent = "👨‍🎓👨‍🎓请在今天内完成"
})

/**
 * 
 * @param {Number} range : 有多少种类的面试题,方便随机;
 * @returns 
 */
function randomNum(range) {
    let num = Math.ceil(Math.random() * range);
    return num;
}

function interviewType() {
    const type = [
        "今天练习一道HTML面试题",
        "今天练习一道CSS面试题",
        "今天练习一道JS面试题",
        "今天练习一道React面试题",
        "今天练习一道浏览器面试题",
    ]
    const typeNum = randomNum(type.length - 1);
    return type[typeNum];
}
