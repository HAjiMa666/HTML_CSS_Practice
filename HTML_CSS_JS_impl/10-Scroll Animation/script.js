const contents = document.querySelectorAll(".content");
const clientHeight = document.documentElement.clientHeight;
let contentsheight = 0;

window.addEventListener("load", () => {
    [...contents].map((item, index) => {
        contentsheight += item.offsetHeight;
        if (contentsheight <= clientHeight) {
            console.log(index)
            item.classList.add("cotentShow");
            return index;
        }
    })
})
window.addEventListener("scroll", () => {
    // triggerBottom 我把整块可视窗口划分成了四等分,等到达到前三块区域时,达到触底加载的条件
    const triggerBottom = window.innerHeight / 4 * 3;
    contents.forEach(content => {
        // 使用下面这个属性的原因时,是因为它可以动态的加载相对于视窗的位置
        const contentTop = content.getBoundingClientRect().top;
        if (contentTop < triggerBottom) {
            content.classList.add('cotentShow')
        } else {
            content.classList.remove('cotentShow')
        }
    })

})