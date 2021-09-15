const bg = document.querySelector(".bg");
const loading = document.querySelector(".loading");

//让他每隔30ms,就执行一次 营造成一种加载的假象
const int = setInterval(blurload, 30);
let loadNum = 0;

function blurload() {
    loadNum++;
    if (loadNum > 99) {
        clearInterval(int);
    }
    //加载进度条
    loading.textContent = loadNum + "%";
    //随着进度的增加,让他逐渐透明
    loading.style.opacity = `${scale(loadNum, 0, 100, 1, 0)}`;
    //随着进度的增加,让背景的模糊度越来越清晰
    bg.style.filter = `blur(${scale(loadNum, 0, 100, 30, 0)}px)`;

}

//这个函数很关键,是用着这个大佬的回答
//这个函数可以让 输入的一个范围值 映射到 另一个范围值
//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
