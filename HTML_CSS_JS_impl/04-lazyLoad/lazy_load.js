import lazyload from "lazyload";
const imgs = document.querySelectorAll("img");
lazyload(imgs);
// let arr = [...imgs]

// let firstTop = 0;
// let secondTop = 0;
// if (imgs[0].offsetTop < document.documentElement.clientHeight + document.documentElement.scrollTop)
//     imgs[0].setAttribute("src", imgs[0].getAttribute("data-src"));
// firstTop = imgs[0].offsetTop

// if (imgs[1].offsetTop < document.documentElement.clientHeight + document.documentElement.scrollTop)
//     imgs[1].setAttribute("src", imgs[1].getAttribute("data-src"));
// secondTop = imgs[1].offsetTop

// console.log(imgs[0].offsetTop);
// console.log(imgs[1].offsetTop);

// console.log(imgs[0]);
// console.log(imgs[1].offsetParent);
// console.log(imgs[0] = imgs[0].offsetParent);





// window.addEventListener("scroll", () => {
//     lazyLoad(arr);
// })


// function getTop(img, prevTop) {
//     let top = img.offsetTop;
//     prevTop = prevTop === 0 ? 0 : prevTop.offsetTop;
//     top += prevTop;
//     return top;
// }

// function lazyLoad(arr) {
//     let prevTop = 0;
//     for (let i = 0; i < arr.length; i++) {
//         prevTop = i === 0 ? 0 : arr[i - 1];
//         if ((getTop(arr[i], prevTop) <= document.documentElement.clientHeight + document.documentElement.scrollTop)) {
//             arr[i].setAttribute("src", arr[i].getAttribute("data-src"));
//         }
//     }
// }






