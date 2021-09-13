const input = document.querySelector("input");
const searchBtn = document.querySelector(".search");

let isShow = false;

/**
 * 用到了React的思想
 * 用状态渲染组件
 * 根据isShow来判断搜索框是否该显示
 */
searchBtn.addEventListener("click", () => {
    if (isShow) {
        searchBtn.classList.remove("search-click");
        input.classList.remove("search-show");
        isShow = false;
    } else {
        searchBtn.classList.add("search-click");
        input.classList.add("search-show");
        isShow = true;
    }
})